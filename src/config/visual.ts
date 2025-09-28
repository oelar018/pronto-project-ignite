export interface QualityConfig {
  contentVisibility: boolean;
  reduceMotion: boolean;
  simplifiedAnimations: boolean;
  animationDuration: number;
  useBackdropBlur: boolean;
  shadowLayers: number;
  glowIntensity: number;
}

export function getQualityConfig(): QualityConfig {
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

  // Check for low-end device indicators
  const isLowEndDevice = typeof navigator !== 'undefined' && 
    (navigator.hardwareConcurrency <= 2 || (navigator as any).deviceMemory <= 2);

  const baseAnimationDuration = prefersReducedMotion ? 0.2 : 0.6;

  return {
    contentVisibility: !isLowEndDevice,
    reduceMotion: prefersReducedMotion || false,
    simplifiedAnimations: prefersReducedMotion || isLowEndDevice || false,
    animationDuration: baseAnimationDuration,
    useBackdropBlur: !isLowEndDevice,
    shadowLayers: isLowEndDevice ? 1 : prefersReducedMotion ? 2 : 3,
    glowIntensity: isLowEndDevice ? 0.3 : prefersReducedMotion ? 0.6 : 1.0,
  };
}