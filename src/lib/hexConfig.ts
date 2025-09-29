/**
 * Configuration constants for hex-based visual components
 * Centralized to avoid magic numbers and enable easy tweaking
 */

// Performance modes and thresholds  
export const PERF_CONFIG = {
  // Viewport breakpoints for automatic performance scaling
  MOBILE_WIDTH: 480,
  TABLET_WIDTH: 900,
  DESKTOP_WIDTH: 1200,
  
  // Performance mode settings
  MODES: {
    LOW: {
      rings: 7,
      dotSize: 2.5,
      spacing: 14,
      sampleStep: 3,
      focusCount: 35,
    },
    MEDIUM: {
      rings: 10,
      dotSize: 3.0,
      spacing: 18,
      sampleStep: 2,
      focusCount: 45,
    },
    HIGH: {
      rings: 13,
      dotSize: 3.5,
      spacing: 22,
      sampleStep: 1,
      focusCount: 60,
    },
  },
  
  // Animation timing (in milliseconds)
  THROTTLE_MS: 16, // ~60fps
  INTERSECTION_THRESHOLD: 0.01,
  RESIZE_DEBOUNCE_MS: 100,
} as const;

// Visual appearance constants
export const VISUAL_CONFIG = {
  // Color values (HSL)
  COLORS: {
    BACKGROUND: "#0A0A0A",
    PRIMARY_HEX: [130, 255, 250] as const, // Cyan/teal
    GLOW_FALLOFF: 0.95,
    ALPHA_RANGE: [70, 230] as const,
  },
  
  // Hex grid properties
  HEX: {
    // Axial coordinate directions for building hex rings
    AXIAL_DIRECTIONS: [
      [1, 0], [1, -1], [0, -1],
      [-1, 0], [-1, 1], [0, 1]
    ] as const,
    
    // Mathematical constants
    SQRT3: Math.sqrt(3),
    SQRT3_HALF: Math.sqrt(3) / 2,
    
    // Default sizing
    DEFAULT_SIZE: 0.9,
    DEFAULT_LINE_WIDTH: 0.06,
    DEFAULT_GLOW_STRENGTH: 1.2,
    
    // Ratios and scaling
    HOLLOW_RATIO: 0.18, // Inner hollow as percentage of total radius
    SIZE_VARIATION_FACTOR: 0.7,
    GLOW_RADIUS_MULTIPLIER: 5.5,
    
    // Animation parameters
    DEFAULT_SHIMMER: 0.15,
    DEFAULT_BREATHE_SPEED: 0.6,
    DEFAULT_PARALLAX: 0.28,
    DEFAULT_IDLE_SPEED_DEG: 0.18,
    
    // WebGL shader precision
    SHADER_PRECISION: 'mediump',
  },
  
  // P5.js specific settings
  P5: {
    PIXEL_DENSITY: 1,
    RENDERER: 'P2D' as const,
    BLEND_MODE: 'ADD' as const,
    DEFAULT_FOCUS_COUNT: 60,
    DEFAULT_NOISE_AMOUNT: 0.15,
    TILT_MAX_RADIANS: 0.10, // ~6 degrees
  },
  
} as const;

// Utility functions for performance mode selection
export function getPerformanceMode(width: number = window.innerWidth): keyof typeof PERF_CONFIG.MODES {
  if (width < PERF_CONFIG.MOBILE_WIDTH) return 'LOW';
  if (width < PERF_CONFIG.TABLET_WIDTH) return 'MEDIUM';
  return 'HIGH';
}

export function getPerfConfig(mode: keyof typeof PERF_CONFIG.MODES | 'auto' = 'auto') {
  if (mode === 'auto') {
    mode = getPerformanceMode();
  }
  return PERF_CONFIG.MODES[mode];
}

// Responsive scaling utilities
export function getResponsiveRings(userRings?: number, perfMode: keyof typeof PERF_CONFIG.MODES = 'HIGH'): number {
  if (typeof userRings === 'number') return userRings;
  
  const config = PERF_CONFIG.MODES[perfMode];
  const width = Math.min(window.innerWidth, PERF_CONFIG.DESKTOP_WIDTH);
  
  // Fine-tune based on viewport even within perf mode
  if (perfMode === 'HIGH') {
    return width > PERF_CONFIG.DESKTOP_WIDTH ? config.rings + 2 : config.rings;
  }
  
  return config.rings;
}

// Device capabilities detection
export const DEVICE_CAPS = {
  IS_HIGH_DPI: () => (window.devicePixelRatio || 1) > 1.5,
  IS_MOBILE: () => window.innerWidth < PERF_CONFIG.MOBILE_WIDTH,
  IS_LOW_MEMORY: () => (navigator as any).deviceMemory && (navigator as any).deviceMemory <= 2,
  IS_SLOW_CPU: () => navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2,
  
  // Combined capability check
  SHOULD_USE_LOW_PERF: () => 
    DEVICE_CAPS.IS_LOW_MEMORY() || 
    DEVICE_CAPS.IS_SLOW_CPU() || 
    DEVICE_CAPS.IS_MOBILE(),
} as const;