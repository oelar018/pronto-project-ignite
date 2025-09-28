export interface QualityConfig {
  contentVisibility: boolean;
  reduceMotion: boolean;
  simplifiedAnimations: boolean;
  animationDuration: number;
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
  };
}