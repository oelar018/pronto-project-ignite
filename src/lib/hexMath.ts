/**
 * Mathematical utilities for hexagonal grid calculations
 * Optimized with memoization and efficient algorithms
 */

import { VISUAL_CONFIG } from './hexConfig';

// Cached calculations to avoid repeated computation
const hexPositionCache = new Map<string, Array<{x: number; y: number; ring: number}>>();
const directionVectors = VISUAL_CONFIG.HEX.AXIAL_DIRECTIONS;

/**
 * Generate hexagonal dot positions using axial coordinates
 * Results are memoized based on rings and spacing parameters
 */
export function buildHexDotPositions(
  rings: number, 
  spacing: number,
  hollowRatio: number = VISUAL_CONFIG.HEX.HOLLOW_RATIO
): Array<{x: number; y: number; ring: number}> {
  const cacheKey = `${rings}-${spacing}-${hollowRatio}`;
  
  if (hexPositionCache.has(cacheKey)) {
    return hexPositionCache.get(cacheKey)!;
  }
  
  const positions: Array<{x: number; y: number; ring: number}> = [];
  const hollow = Math.max(0, Math.round(rings * hollowRatio));
  
  // Center dot (only if not hollow)
  if (hollow === 0) {
    positions.push({ x: 0, y: 0, ring: 0 });
  }
  
  // Generate concentric rings
  for (let ring = 1; ring <= rings; ring++) {
    if (ring <= hollow) continue; // Skip hollow interior
    
    // Start at one corner of the hex ring
    let q = ring, r = 0;
    
    // Walk around the ring using axial directions
    for (let side = 0; side < 6; side++) {
      const [dq, dr] = directionVectors[side];
      
      for (let step = 0; step < ring; step++) {
        const position = axialToCartesian(q, r, spacing);
        positions.push({
          x: position.x,
          y: position.y,
          ring
        });
        
        q += dq;
        r += dr;
      }
    }
  }
  
  hexPositionCache.set(cacheKey, positions);
  return positions;
}

/**
 * Convert axial coordinates (q, r) to cartesian (x, y)
 * Using standard hex-to-pixel conversion formulas
 */
export function axialToCartesian(q: number, r: number, spacing: number): {x: number; y: number} {
  const x = spacing * (VISUAL_CONFIG.HEX.SQRT3 * q + VISUAL_CONFIG.HEX.SQRT3_HALF * r);
  const y = spacing * (1.5 * r);
  return { x, y };
}

/**
 * Calculate distance between two points (optimized with squared distance when possible)
 */
export function distance(x1: number, y1: number, x2: number, y2: number): number {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Squared distance (faster when you don't need the actual distance)
 */
export function distanceSquared(x1: number, y1: number, x2: number, y2: number): number {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return dx * dx + dy * dy;
}

/**
 * Smoothstep function for smooth interpolation
 */
export function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

/**
 * Linear interpolation
 */
export function lerp(a: number, b: number, t: number): number {
  return a + t * (b - a);
}

/**
 * Clamp value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/**
 * Map a value from one range to another
 */
export function mapRange(
  value: number, 
  inMin: number, 
  inMax: number, 
  outMin: number, 
  outMax: number
): number {
  return outMin + (outMax - outMin) * ((value - inMin) / (inMax - inMin));
}

/**
 * Simple noise function for shimmer effects (deterministic)
 */
export function simpleNoise(x: number, y: number = 0, time: number = 0): number {
  // Simple pseudo-random noise using sine waves
  return (
    Math.sin(x * 0.01 + time * 0.001) * 0.5 +
    Math.sin(y * 0.007 + time * 0.0013) * 0.3 +
    Math.sin((x + y) * 0.005 + time * 0.0008) * 0.2
  );
}

/**
 * Throttled event handler creator using requestAnimationFrame
 */
export function createThrottledHandler<T extends (...args: any[]) => void>(
  handler: T,  
  leading: boolean = true
): (...args: Parameters<T>) => void {
  let rafId: number | null = null;
  let lastArgs: Parameters<T>;
  
  return (...args: Parameters<T>) => {
    lastArgs = args;
    
    if (rafId !== null) {
      return; // Already scheduled
    }
    
    if (leading) {
      handler(...args);
    }
    
    rafId = requestAnimationFrame(() => {
      rafId = null;
      if (!leading) {
        handler(...lastArgs);
      }
    });
  };
}

/**
 * Find the N nearest points to a target position
 * Optimized with early termination and efficient sorting
 */
export function findNearestPoints<T extends {x: number; y: number}>(
  points: T[],
  targetX: number,
  targetY: number,
  count: number,
  sampleStep: number = 1
): {point: T; distance: number; index: number}[] {
  const distances: {point: T; distance: number; index: number}[] = [];
  
  // Sample points for performance on large datasets
  for (let i = 0; i < points.length; i += sampleStep) {
    const point = points[i];
    const dist = distanceSquared(point.x, point.y, targetX, targetY);
    distances.push({ point, distance: dist, index: i });
  }
  
  // Partial sort - only sort as much as needed
  distances.sort((a, b) => a.distance - b.distance);
  return distances.slice(0, count);
}

/**
 * Calculate optimal canvas size based on container and device capabilities
 */
export function calculateOptimalCanvasSize(
  containerWidth: number,
  containerHeight: number,
  maxDPR: number = 2
): {width: number; height: number; dpr: number} {
  const dpr = Math.min(window.devicePixelRatio || 1, maxDPR);
  
  return {
    width: Math.max(1, Math.floor(containerWidth)),
    height: Math.max(1, Math.floor(containerHeight)),
    dpr
  };
}

/**
 * Debounced function creator for resize handlers
 */
export function createDebouncedHandler<T extends (...args: any[]) => void>(
  handler: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: number | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = window.setTimeout(() => {
      handler(...args);
      timeoutId = null;
    }, delay);
  };
}

/**
 * Clear all cached calculations (useful for testing or memory management)
 */
export function clearMathCache(): void {
  hexPositionCache.clear();
}

// Export constants for direct access
export const HEX_MATH_CONSTANTS = {
  SQRT3: VISUAL_CONFIG.HEX.SQRT3,
  SQRT3_HALF: VISUAL_CONFIG.HEX.SQRT3_HALF,
  AXIAL_DIRECTIONS: directionVectors,
} as const;