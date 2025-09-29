import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import type { ChartConfig } from "@/components/ui/chart";

interface ChartContainerProps {
  config: ChartConfig;
  children: React.ReactElement;
  className?: string;
}

const ChartSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div className={`w-full ${height} p-4 space-y-4`}>
    <div className="flex justify-between items-center">
      <Skeleton className="h-6 w-32" />
      <Skeleton className="h-6 w-24" />
    </div>
    <div className="flex items-end space-x-2 h-40">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton 
          key={i}
          className="flex-1 bg-primary/10 animate-pulse"
          style={{ 
            height: `${Math.random() * 80 + 20}%`,
            animationDelay: `${i * 100}ms`
          }}
        />
      ))}
    </div>
    <div className="flex justify-center space-x-4">
      <Skeleton className="h-4 w-16" />
      <Skeleton className="h-4 w-16" />
      <Skeleton className="h-4 w-16" />
    </div>
  </div>
);

// Create individual lazy components
const LazyChartContainerComponent = React.lazy(() => 
  import("@/components/ui/chart").then(module => ({ 
    default: module.ChartContainer 
  }))
);

const LazyChartTooltipComponent = React.lazy(() => 
  import("@/components/ui/chart").then(module => ({ 
    default: module.ChartTooltip 
  }))
);

const LazyChartTooltipContentComponent = React.lazy(() => 
  import("@/components/ui/chart").then(module => ({ 
    default: module.ChartTooltipContent 
  }))
);

const LazyChartLegendComponent = React.lazy(() => 
  import("@/components/ui/chart").then(module => ({ 
    default: module.ChartLegend 
  }))
);

const LazyChartLegendContentComponent = React.lazy(() => 
  import("@/components/ui/chart").then(module => ({ 
    default: module.ChartLegendContent 
  }))
);

// Export wrapped components  
export const LazyChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>((props, ref) => (
  <Suspense fallback={<ChartSkeleton />}>
    <LazyChartContainerComponent ref={ref} {...props} />
  </Suspense>
));

export const LazyChartTooltip = (props: any) => (
  <Suspense fallback={null}>
    <LazyChartTooltipComponent {...props} />
  </Suspense>
);

export const LazyChartTooltipContent = React.forwardRef<any, any>((props, ref) => (
  <Suspense fallback={null}>
    <LazyChartTooltipContentComponent ref={ref} {...props} />
  </Suspense>
));

export const LazyChartLegend = (props: any) => (
  <Suspense fallback={null}>
    <LazyChartLegendComponent {...props} />
  </Suspense>
);

export const LazyChartLegendContent = React.forwardRef<any, any>((props, ref) => (
  <Suspense fallback={null}>
    <LazyChartLegendContentComponent ref={ref} {...props} />
  </Suspense>
));

// Re-export types and utilities that don't need lazy loading
export type { ChartConfig } from "@/components/ui/chart";

LazyChartContainer.displayName = "LazyChartContainer";
LazyChartTooltipContent.displayName = "LazyChartTooltipContent";
LazyChartLegendContent.displayName = "LazyChartLegendContent";