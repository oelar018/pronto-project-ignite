import React from "react";
import { cn } from "@/lib/utils";

interface HexHeroStaticFallbackProps {
  className?: string;
  rings?: number;
  dotSize?: number;
}

// Static fallback component for users who prefer reduced motion
export const HexHeroStaticFallback: React.FC<HexHeroStaticFallbackProps> = ({
  className = "",
  rings = 8,
  dotSize = 2,
}) => {
  // Generate hex grid positions for static display
  const generateHexGrid = React.useMemo(() => {
    const dots: Array<{ x: number; y: number; ring: number }> = [];
    const spacing = 45;
    const centerX = 50;
    const centerY = 50;
    
    // Center dot
    dots.push({ x: centerX, y: centerY, ring: 0 });
    
    // Generate concentric rings
    for (let ring = 1; ring <= rings; ring++) {
      const numDots = 6 * ring;
      const radius = ring * spacing;
      
      for (let i = 0; i < numDots; i++) {
        const angle = (i / numDots) * 2 * Math.PI;
        const x = centerX + Math.cos(angle) * radius * 0.01; // Convert to percentage
        const y = centerY + Math.sin(angle) * radius * 0.01;
        
        // Only include dots that are within reasonable bounds
        if (x >= -10 && x <= 110 && y >= -10 && y <= 110) {
          dots.push({ x, y, ring });
        }
      }
    }
    
    return dots;
  }, [rings]);

  return (
    <div 
      className={cn("absolute inset-0 overflow-hidden", className)}
      role="img" 
      aria-label="Decorative hexagonal pattern"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full opacity-20"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="hexGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
          </radialGradient>
        </defs>
        
        {generateHexGrid.map((dot, index) => {
          const opacity = Math.max(0.1, 1 - (dot.ring / rings) * 0.8);
          return (
            <circle
              key={index}
              cx={`${dot.x}%`}
              cy={`${dot.y}%`}
              r={dotSize}
              fill="url(#hexGradient)"
              opacity={opacity}
            />
          );
        })}
      </svg>
    </div>
  );
};