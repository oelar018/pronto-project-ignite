import React, { useEffect, useMemo, useRef, useCallback } from "react";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/lib/accessibility";
import { PERF_CONFIG, VISUAL_CONFIG } from "@/lib/hexConfig";
import { createThrottledHandler, createDebouncedHandler, clamp } from "@/lib/hexMath";

type Props = {
  className?: string;
  isPaused?: boolean;
  hexSize?: number;
  lineWidth?: number;
  glowStrength?: number;
  shimmer?: number;
  breatheSpeed?: number;
  parallax?: number;
};

// Optimized shader uniforms type
type Uniforms = {
  uTime: { value: number };
  uResolution: { value: THREE.Vector2 };
  uMouse: { value: THREE.Vector2 };
  uHexSize: { value: number };
  uLineWidth: { value: number };
  uGlow: { value: number };
  uShimmer: { value: number };
  uBreathe: { value: number };
  uParallax: { value: number };
  uRM: { value: number };
};

// Memoized vertex shader
const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

// Optimized fragment shader with reduced operations
const fragmentShader = /* glsl */ `
  precision ${VISUAL_CONFIG.HEX.SHADER_PRECISION} float;

  varying vec2 vUv;

  uniform float uTime;
  uniform vec2  uResolution;
  uniform vec2  uMouse;
  uniform float uHexSize;
  uniform float uLineWidth;
  uniform float uGlow;
  uniform float uShimmer;
  uniform float uBreathe;
  uniform float uParallax;
  uniform float uRM;

  // Optimized hash function
  float hash(vec2 p){
    p = fract(p*0.3183099 + vec2(0.71,0.113));
    return fract(23.3*dot(p, p+0.37));
  }

  // Aspect-corrected coordinate conversion
  vec2 toPlane(vec2 uv) {
    vec2 p = uv * 2.0 - 1.0;
    float aspect = uResolution.x / max(1.0, uResolution.y);
    p.x *= aspect;
    return p;
  }

  // Efficient hex cell calculation
  vec2 hexCell(vec2 p, float s) {
    p /= s;
    const float k = 0.57735026919;
    vec2 q = vec2(p.x * (2.0/3.0), (-p.x * k + p.y));
    vec2 iq = floor(q + 0.5);
    vec2 fq = q - iq;
    vec2 iq2 = iq + (dot(fq, vec2(1.0,1.0)) > 1.0 ? vec2(1.0,1.0) : vec2(0.0));
    vec2 cell = iq2;
    
    vec2 center;
    center.x = (3.0/2.0) * cell.x;
    center.y = (sqrt(3.0)/2.0) * (2.0*cell.y - cell.x);
    
    vec2 local = p - center;
    local *= s;
    return local;
  }

  // Optimized hex edge distance
  float hexEdgeDist(vec2 lp, float s) {
    const float SQ3 = 1.73205080757;
    lp = vec2(abs(lp.x), lp.y);
    float e = max( (lp.x * 0.5 + lp.y * (SQ3*0.5)),  (lp.x * 0.5 - lp.y * (SQ3*0.5)) );
    e = max(e, lp.x);
    float r = s * 0.98;
    return e - r * 0.5;
  }

  // Brand color palette
  vec3 brand(float t){
    vec3 c1 = vec3(0.05, 0.80, 0.76);
    vec3 c2 = vec3(0.38, 0.98, 0.96);
    vec3 c3 = vec3(0.16, 0.88, 0.82);
    return mix(mix(c1, c3, smoothstep(0.0,0.6,t)), c2, smoothstep(0.35,1.0,t));
  }

  void main() {
    vec2 p = toPlane(vUv);

    // Optimized breathing effect
    float breath = (uRM > 0.5) ? 0.0 : (0.08 * sin(uTime * (1.0 + uBreathe * 2.0)));
    float lineW  = clamp(uLineWidth + breath, 0.001, 0.5);

    // Mouse parallax
    vec2 mpx = vec2(0.0);
    if (uParallax > 0.0 && uRM < 0.5) {
      vec2 m = uMouse / max(uResolution, vec2(1.0));
      m = m*2.0 - 1.0;
      m.x *= (uResolution.x / max(1.0, uResolution.y));
      mpx = m * uParallax * 0.25;
      p += mpx;
    }

    vec2 lp = hexCell(p, uHexSize);
    float d = hexEdgeDist(lp, uHexSize);

    float glow = smoothstep(lineW, 0.0, abs(d));
    float soft = smoothstep(0.35 + lineW, 0.0, abs(d));
    float edge = glow * 0.85 + soft * 0.55;

    // Efficient shimmer
    float tw = 0.0;
    if (uShimmer > 0.001 && uRM < 0.5) {
      vec2 gid = floor((p / uHexSize) * vec2(1.0, 0.57735) + 0.5);
      float n = hash(gid + floor(uTime * 0.25) );
      tw = (n - 0.5) * uShimmer;
    }

    float tone = clamp(edge * (0.85 + tw), 0.0, 1.0);
    vec3 col = brand(0.55 + 0.45 * tone);
    float a = tone * uGlow;

    vec3 bg = vec3(0.02, 0.02, 0.03);
    vec3 outCol = bg + col * (0.15 + a * 0.95);

    gl_FragColor = vec4(outCol, 1.0);
  }
`;

const HexGridNeura: React.FC<Props> = ({
  className = "",
  isPaused = false,
  hexSize = VISUAL_CONFIG.HEX.DEFAULT_SIZE,
  lineWidth = VISUAL_CONFIG.HEX.DEFAULT_LINE_WIDTH,
  glowStrength = VISUAL_CONFIG.HEX.DEFAULT_GLOW_STRENGTH,
  shimmer = VISUAL_CONFIG.HEX.DEFAULT_SHIMMER,
  breatheSpeed = VISUAL_CONFIG.HEX.DEFAULT_BREATHE_SPEED,
  parallax = VISUAL_CONFIG.HEX.DEFAULT_PARALLAX,
}) => {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const uniformsRef = useRef<Uniforms | null>(null);
  const rafRef = useRef<number | null>(null);
  const clockRef = useRef<THREE.Clock | null>(null);

  const prefersReduced = usePrefersReducedMotion();
  const intersectPausedRef = useRef(false);
  const visibilityPausedRef = useRef(false);

  // Memoized Three.js setup to avoid recreating on every render
  const threeSetup = useMemo(() => ({
    renderer: null as THREE.WebGLRenderer | null,
    scene: null as THREE.Scene | null,
    camera: null as THREE.OrthographicCamera | null,
    geometry: new THREE.PlaneGeometry(2, 2),
    disposed: false,
  }), []);

  // Optimized resize handler
  const handleResize = useCallback(
    createDebouncedHandler(() => {
      const wrap = wrapRef.current;
      const renderer = rendererRef.current;
      const uniforms = uniformsRef.current;
      
      if (!wrap || !renderer || !uniforms) return;
      
      const w = wrap.clientWidth || 1;
      const h = wrap.clientHeight || 1;
      renderer.setSize(w, h, false);
      uniforms.uResolution.value.set(w, h);
    }, PERF_CONFIG.RESIZE_DEBOUNCE_MS),
    []
  );

  // Throttled pointer handlers
  const handlePointerMove = useMemo(
    () => createThrottledHandler((e: PointerEvent) => {
      const uniforms = uniformsRef.current;
      const renderer = rendererRef.current;
      if (!uniforms || !renderer) return;
      
      const rect = renderer.domElement.getBoundingClientRect();
      uniforms.uMouse.value.set(e.clientX - rect.left, e.clientY - rect.top);
    }),
    []
  );

  const handlePointerLeave = useCallback(() => {
    const uniforms = uniformsRef.current;
    if (uniforms) {
      uniforms.uMouse.value.set(-1, -1);
    }
  }, []);

  useEffect(() => {
    if (threeSetup.disposed) return;
    
    const wrap = wrapRef.current;
    if (!wrap) return;

    // Initialize Three.js components
    const renderer = new THREE.WebGLRenderer({
      antialias: !prefersReduced,
      alpha: true,
      powerPreference: "high-performance",
      premultipliedAlpha: false,
    });
    
    const dpr = Math.min(window.devicePixelRatio || 1, prefersReduced ? 1 : 2);
    renderer.setPixelRatio(dpr);
    renderer.setClearColor(0x000000, 0);
    renderer.info.autoReset = false; // Manual reset for performance
    
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
    
    const uniforms: Uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uMouse: { value: new THREE.Vector2(-1, -1) },
      uHexSize: { value: hexSize },
      uLineWidth: { value: lineWidth },
      uGlow: { value: glowStrength },
      uShimmer: { value: shimmer },
      uBreathe: { value: breatheSpeed },
      uParallax: { value: parallax },
      uRM: { value: prefersReduced ? 1 : 0 },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
      depthTest: false,
    });

    const mesh = new THREE.Mesh(threeSetup.geometry, material);
    scene.add(mesh);
    wrap.appendChild(renderer.domElement);

    // Store references
    rendererRef.current = renderer;
    sceneRef.current = scene;
    uniformsRef.current = uniforms;
    threeSetup.renderer = renderer;
    threeSetup.scene = scene;
    threeSetup.camera = camera;

    const clock = new THREE.Clock();
    clockRef.current = clock;

    // Event listeners
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(wrap);
    handleResize(); // Initial size

    wrap.addEventListener("pointermove", handlePointerMove, { passive: true });
    wrap.addEventListener("pointerleave", handlePointerLeave, { passive: true });

    // Performance optimizations
    const intersectionObserver = new IntersectionObserver((entries) => {
      intersectPausedRef.current = !entries[0].isIntersecting;
    }, { threshold: PERF_CONFIG.INTERSECTION_THRESHOLD });
    intersectionObserver.observe(wrap);

    const handleVisibilityChange = () => {
      visibilityPausedRef.current = document.visibilityState !== "visible";
    };
    document.addEventListener("visibilitychange", handleVisibilityChange, { passive: true });

    // Optimized render loop
    const tick = () => {
      rafRef.current = requestAnimationFrame(tick);
      
      const shouldPause = isPaused || prefersReduced || 
                         intersectPausedRef.current || visibilityPausedRef.current;
      
      if (!shouldPause && uniforms && renderer && scene && camera) {
        uniforms.uTime.value += clock.getDelta();
        renderer.render(scene, camera);
        
        // Periodic cleanup
        if (Math.random() < 0.001) { // ~0.1% chance per frame
          renderer.info.reset();
        }
      }
    };
    
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      threeSetup.disposed = true;
      
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      wrap.removeEventListener("pointermove", handlePointerMove);
      wrap.removeEventListener("pointerleave", handlePointerLeave);
      
      // Cleanup Three.js resources
      material.dispose();
      renderer.dispose();
      
      if (wrap.contains(renderer.domElement)) {
        wrap.removeChild(renderer.domElement);
      }
      
      // Clear references
      rendererRef.current = null;
      sceneRef.current = null;
      uniformsRef.current = null;
      clockRef.current = null;
    };
  }, []); // Empty dependency array - initialization only

  // Optimized prop updates without full re-initialization
  useEffect(() => { 
    const uniforms = uniformsRef.current;
    if (uniforms?.uHexSize) uniforms.uHexSize.value = hexSize; 
  }, [hexSize]);
  
  useEffect(() => { 
    const uniforms = uniformsRef.current;
    if (uniforms?.uLineWidth) uniforms.uLineWidth.value = clamp(lineWidth, 0.001, 0.5); 
  }, [lineWidth]);
  
  useEffect(() => { 
    const uniforms = uniformsRef.current;
    if (uniforms?.uGlow) uniforms.uGlow.value = Math.max(0, glowStrength); 
  }, [glowStrength]);
  
  useEffect(() => { 
    const uniforms = uniformsRef.current;
    if (uniforms?.uShimmer) uniforms.uShimmer.value = clamp(shimmer, 0, 1); 
  }, [shimmer]);
  
  useEffect(() => { 
    const uniforms = uniformsRef.current;
    if (uniforms?.uBreathe) uniforms.uBreathe.value = Math.max(0, breatheSpeed); 
  }, [breatheSpeed]);
  
  useEffect(() => { 
    const uniforms = uniformsRef.current;
    if (uniforms?.uParallax) uniforms.uParallax.value = clamp(parallax, 0, 1); 
  }, [parallax]);

  return <div ref={wrapRef} className={`absolute inset-0 ${className}`} aria-hidden="true" />;
};

export default HexGridNeura;