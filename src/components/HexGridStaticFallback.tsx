import React from "react";
import { cn } from "@/lib/utils";

interface HexGridStaticFallbackProps {
  className?: string;
  hexSize?: number;
  lineWidth?: number;
}

// Static fallback component for hex grid with reduced motion
export const HexGridStaticFallback: React.FC<HexGridStaticFallbackProps> = ({
  className = "",
  hexSize = 40,
  lineWidth = 1,
}) => {
  // Generate static hex grid pattern
  const generateHexPattern = React.useMemo(() => {
    const hexes: Array<{ x: number; y: number; size: number }> = [];
    const cols = 15;
    const rows = 12;
    const hexWidth = hexSize;
    const hexHeight = hexSize * 0.866; // Height of equilateral triangle
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * hexWidth * 0.75;
        const y = row * hexHeight + (col % 2) * hexHeight * 0.5;
        
        // Add some size variation for visual interest
        const sizeVariation = 0.8 + Math.sin(col * 0.5 + row * 0.3) * 0.2;
        
        hexes.push({
          x: x + hexWidth * 0.1, // Small offset
          y: y + hexHeight * 0.1,
          size: hexSize * sizeVariation,
        });
      }
    }
    
    return hexes;
  }, [hexSize]);

  // Create hex path
  const createHexPath = (x: number, y: number, size: number) => {
    const points: Array<[number, number]> = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3;
      const px = x + Math.cos(angle) * size;
      const py = y + Math.sin(angle) * size;
      points.push([px, py]);
    }
    
    return `M ${points.map(([px, py]) => `${px},${py}`).join(' L ')} Z`;
  };

  return (
    <div 
      className={cn("absolute inset-0 overflow-hidden", className)}
      role="img"
      aria-label="Decorative hexagonal grid pattern"
    >
      <svg
        viewBox="0 0 600 400"
        className="w-full h-full opacity-10"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hexLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {generateHexPattern.map((hex, index) => (
          <path
            key={index}
            d={createHexPath(hex.x, hex.y, hex.size)}
            fill="none"
            stroke="url(#hexLineGradient)"
            strokeWidth={lineWidth}
            opacity={0.3 + Math.sin(index * 0.1) * 0.2}
          />
        ))}
      </svg>
    </div>
  );
};