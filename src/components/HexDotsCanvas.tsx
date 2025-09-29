import React, { useEffect, useRef, useMemo, useCallback } from "react";
import { prefersReducedMotion, usePrefersReducedMotion } from "@/lib/accessibility";
import { PERF_CONFIG, VISUAL_CONFIG, getPerfConfig, getResponsiveRings } from "@/lib/hexConfig";
import { 
  buildHexDotPositions, 
  distanceSquared, 
  smoothstep, 
  createThrottledHandler,
  findNearestPoints,
  calculateOptimalCanvasSize,
  createDebouncedHandler
} from "@/lib/hexMath";

type PerfMode = keyof typeof PERF_CONFIG.MODES | "auto";

type Props = {
  rings?: number;
  dotSize?: number;
  glowStrength?: number;
  idleSpeedDeg?: number;
  perfMode?: PerfMode;
  className?: string;
  shimmer?: number;
};

type Dot = { 
  x: number; 
  y: number; 
  r: number; 
  a: number; 
  ring: number;
};

export default function HexDotsCanvas({
  rings,
  dotSize = VISUAL_CONFIG.HEX.DEFAULT_SIZE,
  glowStrength = VISUAL_CONFIG.HEX.DEFAULT_GLOW_STRENGTH,
  idleSpeedDeg = VISUAL_CONFIG.HEX.DEFAULT_IDLE_SPEED_DEG,
  perfMode = "auto", 
  className = "",
  shimmer = VISUAL_CONFIG.HEX.DEFAULT_SHIMMER,
}: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const prefersReduced = usePrefersReducedMotion();
  
  // Memoized performance configuration
  const perfConfig = useMemo(() => {
    const mode = perfMode === "auto" ? 
      (window.innerWidth < PERF_CONFIG.MOBILE_WIDTH ? 'LOW' : 
       window.innerWidth < PERF_CONFIG.TABLET_WIDTH ? 'MEDIUM' : 'HIGH') : perfMode;
    return getPerfConfig(mode);
  }, [perfMode]);
  
  // Memoized dot positions - expensive calculation cached
  const { dots, spacing, finalRings } = useMemo(() => {
    const finalRings = getResponsiveRings(rings, perfMode === 'auto' ? 
      (window.innerWidth < PERF_CONFIG.MOBILE_WIDTH ? 'LOW' : 'MEDIUM') : perfMode as any);
    const spacing = perfConfig.spacing * Math.min(1, window.innerWidth / 1200);
    
    const positions = buildHexDotPositions(finalRings, spacing);
    const dots: Dot[] = positions.map(pos => ({
      x: pos.x,
      y: pos.y,
      r: dotSize + (1 - pos.ring / finalRings) * VISUAL_CONFIG.HEX.SIZE_VARIATION_FACTOR,
      a: VISUAL_CONFIG.COLORS.ALPHA_RANGE[1] - (pos.ring / finalRings) * 
         (VISUAL_CONFIG.COLORS.ALPHA_RANGE[1] - VISUAL_CONFIG.COLORS.ALPHA_RANGE[0]),
      ring: pos.ring
    }));
    
    return { dots, spacing, finalRings };
  }, [rings, dotSize, perfMode, perfConfig]);

  useEffect(() => {
    const wrap = wrapRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    
    let W = 0, H = 0, cx = 0, cy = 0;
    const pointer = { x: 0, y: 0, has: false };
    let paused = false;

    // Optimized canvas sizing
    const resize = createDebouncedHandler(() => {
      const { width, height, dpr } = calculateOptimalCanvasSize(
        wrap.clientWidth, 
        wrap.clientHeight, 
        perfConfig === PERF_CONFIG.MODES.LOW ? 1 : 2
      );
      
      W = width;
      H = height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.scale(dpr, dpr);
      
      cx = W / 2;
      cy = H / 2;
    }, PERF_CONFIG.RESIZE_DEBOUNCE_MS);

    // Throttled pointer handlers
    const handlePointerMove = createThrottledHandler((e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left - cx;
      pointer.y = e.clientY - rect.top - cy;
      pointer.has = true;
    });
    
    const handlePointerLeave = useCallback(() => { 
      pointer.has = false; 
    }, []);

    // Event listeners
    wrap.addEventListener("pointermove", handlePointerMove, { passive: true });
    wrap.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    window.addEventListener("resize", resize, { passive: true });

    // Intersection observer for performance
    const io = new IntersectionObserver((entries) => {
      paused = !entries[0].isIntersecting;
    }, { threshold: PERF_CONFIG.INTERSECTION_THRESHOLD });
    io.observe(wrap);

    // Page visibility optimization
    const handleVisibilityChange = () => {
      paused = document.visibilityState !== 'visible';
    };
    document.addEventListener("visibilitychange", handleVisibilityChange, { passive: true });

    resize();
    const startTime = performance.now();

    // Optimized render loop
    function draw() {
      rafRef.current = requestAnimationFrame(draw);
      if (paused || prefersReduced) return;

      const now = performance.now();
      const t = (now - startTime) / 1000;

      // Clear with cached background
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = VISUAL_CONFIG.COLORS.BACKGROUND;
      ctx.fillRect(0, 0, W, H);

      ctx.save();
      ctx.translate(cx, cy);

      // Optimized rotation calculations
      const idle = (idleSpeedDeg * Math.PI) / 180 * t;
      const tilt = VISUAL_CONFIG.P5.TILT_MAX_RADIANS;
      const px = pointer.has ? pointer.x / Math.max(220, W * 0.6) : 0;
      ctx.rotate(idle + px * tilt * 0.6);

      // Efficient nearest neighbor search
      const nearestPoints = pointer.has ? 
        findNearestPoints(dots, pointer.x, pointer.y, perfConfig.focusCount, perfConfig.sampleStep) :
        [];
      const focusSet = new Set(nearestPoints.map(np => dots.indexOf(np.point)));

      const glowRadius = spacing * VISUAL_CONFIG.HEX.GLOW_RADIUS_MULTIPLIER;

      // Optimized rendering with minimal state changes
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        let a = d.a;
        let r = d.r;

        // Efficient shimmer calculation
        if (shimmer > 0) {
          const shimmerValue = Math.sin(t * 0.9 + d.ring * 0.6) * shimmer;
          r += shimmerValue * 0.6;
          a += shimmerValue * 18;
        }

        // Focus glow with smooth falloff
        if (pointer.has && focusSet.has(i)) {
          const dist = Math.sqrt(distanceSquared(d.x, d.y, pointer.x, pointer.y));
          const glowFactor = smoothstep(glowRadius, 0, dist);
          a = Math.min(255, a + glowFactor * glowStrength * 170);
          r = r + glowFactor * 1.2;
        }

        // Optimized drawing
        const alpha = Math.max(0, Math.min(1, a / 255));
        if (alpha > 0.01) { // Skip nearly transparent dots
          ctx.fillStyle = `rgba(${VISUAL_CONFIG.COLORS.PRIMARY_HEX.join(',')},${alpha})`;
          ctx.beginPath();
          ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.restore();
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      io.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      wrap.removeEventListener("pointermove", handlePointerMove);
      wrap.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [dots, spacing, finalRings, dotSize, glowStrength, idleSpeedDeg, shimmer, perfConfig, prefersReduced]);

  return (
    <div ref={wrapRef} className={`absolute inset-0 ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
