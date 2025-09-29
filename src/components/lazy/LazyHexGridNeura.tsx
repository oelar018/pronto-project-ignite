import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const HexGridNeura = React.lazy(() => import("@/components/HexGridNeura"));

const HexGridNeuraSkeleton = () => (
  <div className="absolute inset-0 bg-background/5">
    <Skeleton className="w-full h-full bg-gradient-to-br from-primary/3 to-cyan-500/3 animate-pulse" />
    <div className="absolute inset-0 opacity-30">
      <div className="grid grid-cols-12 gap-2 h-full p-4">
        {Array.from({ length: 48 }).map((_, i) => (
          <Skeleton 
            key={i}
            className="w-full aspect-square rounded-full bg-primary/10 animate-pulse"
            style={{ animationDelay: `${i * 50}ms` }}
          />
        ))}
      </div>
    </div>
  </div>
);

interface LazyHexGridNeuraProps {
  className?: string;
  [key: string]: any;
}

export const LazyHexGridNeura: React.FC<LazyHexGridNeuraProps> = (props) => (
  <Suspense fallback={<HexGridNeuraSkeleton />}>
    <HexGridNeura {...props} />
  </Suspense>
);

export default LazyHexGridNeura;