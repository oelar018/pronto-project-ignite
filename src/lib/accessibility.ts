import * as React from "react";

/**
 * Accessibility utilities for consistent reduced motion and a11y features
 */

// Centralized reduced motion detection
let cachedPrefersReducedMotion: boolean | null = null;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  
  // Cache the result to avoid repeated media query checks
  if (cachedPrefersReducedMotion === null) {
    cachedPrefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }
  
  return cachedPrefersReducedMotion;
}

// React hook for reduced motion
export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = React.useState(() => prefersReducedMotion());
  
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => {
      cachedPrefersReducedMotion = mediaQuery.matches;
      setPrefersReduced(mediaQuery.matches);
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  
  return prefersReduced;
}

// Focus ring utility classes
export const focusRingClasses = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

// Keyboard navigation helpers
export function handleArrowNavigation(
  event: React.KeyboardEvent,
  items: HTMLElement[],
  currentIndex: number,
  onIndexChange: (index: number) => void,
  options?: {
    loop?: boolean;
    orientation?: "horizontal" | "vertical" | "both";
  }
) {
  const { loop = true, orientation = "both" } = options || {};
  
  let newIndex = currentIndex;
  
  switch (event.key) {
    case "ArrowDown":
      if (orientation === "horizontal") return;
      event.preventDefault();
      newIndex = loop ? (currentIndex + 1) % items.length : Math.min(currentIndex + 1, items.length - 1);
      break;
    case "ArrowUp":
      if (orientation === "horizontal") return;
      event.preventDefault();
      newIndex = loop ? (currentIndex - 1 + items.length) % items.length : Math.max(currentIndex - 1, 0);
      break;
    case "ArrowRight":
      if (orientation === "vertical") return;
      event.preventDefault();
      newIndex = loop ? (currentIndex + 1) % items.length : Math.min(currentIndex + 1, items.length - 1);
      break;
    case "ArrowLeft":
      if (orientation === "vertical") return;
      event.preventDefault();
      newIndex = loop ? (currentIndex - 1 + items.length) % items.length : Math.max(currentIndex - 1, 0);
      break;
    case "Home":
      event.preventDefault();
      newIndex = 0;
      break;
    case "End":
      event.preventDefault();
      newIndex = items.length - 1;
      break;
    default:
      return;
  }
  
  if (newIndex !== currentIndex) {
    onIndexChange(newIndex);
    items[newIndex]?.focus();
  }
}

// ARIA live region for announcements
export function announceToScreenReader(message: string, priority: "polite" | "assertive" = "polite") {
  if (typeof window === "undefined") return;
  
  const announcement = document.createElement("div");
  announcement.setAttribute("aria-live", priority);
  announcement.setAttribute("aria-atomic", "true");
  announcement.className = "sr-only";
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// Skip to content link component
export const SkipToContent: React.FC = () => (
  React.createElement('a', {
    href: "#main-content",
    className: "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-background border border-border rounded px-3 py-2 text-sm font-medium z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
  }, "Skip to main content")
);

// Enhanced button with proper focus and keyboard support
interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  onKeyDown,
  ...props
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    // Ensure Space key activates button (Enter is handled by default)
    if (event.key === " ") {
      event.preventDefault();
      event.currentTarget.click();
    }
    onKeyDown?.(event);
  };
  
  return React.createElement('button', {
    className: `${focusRingClasses} transition-colors ${className || ""}`,
    onKeyDown: handleKeyDown,
    ...props
  }, children);
};

// High contrast mode detection
export function usePrefersHighContrast(): boolean {
  const [prefersHighContrast, setPrefersHighContrast] = React.useState(false);
  
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    
    const mediaQuery = window.matchMedia("(prefers-contrast: high)");
    const handleChange = () => setPrefersHighContrast(mediaQuery.matches);
    
    setPrefersHighContrast(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  
  return prefersHighContrast;
}