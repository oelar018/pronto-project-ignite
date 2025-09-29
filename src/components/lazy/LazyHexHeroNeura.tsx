import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const HexHeroNeura = React.lazy(() => import("@/components/HexHeroNeura"));

const HexHeroNeuraSkeleton = () => (
  <div className="absolute inset-0 bg-background/10">
    <Skeleton className="w-full h-full bg-gradient-to-br from-primary/5 to-purple-500/5 animate-pulse" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex space-x-2">
        <Skeleton className="w-4 h-4 rounded-full bg-primary/20" />
        <Skeleton className="w-4 h-4 rounded-full bg-primary/20 animate-pulse delay-100" />
        <Skeleton className="w-4 h-4 rounded-full bg-primary/20 animate-pulse delay-200" />
      </div>
    </div>
  </div>
);

interface LazyHexHeroNeuraProps {
  className?: string;
  [key: string]: any;
}

export const LazyHexHeroNeura: React.FC<LazyHexHeroNeuraProps> = (props) => (
  <Suspense fallback={<HexHeroNeuraSkeleton />}>
    <HexHeroNeura {...props} />
  </Suspense>
);

export default LazyHexHeroNeura;