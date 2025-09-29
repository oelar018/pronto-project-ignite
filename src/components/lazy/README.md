# Lazy Loading Components

This directory contains lazy-loaded versions of heavy components to optimize the initial bundle size.

## Components

### HexHeroNeura & HexGridNeura
- Three.js-based components with WebGL shaders
- Lazy loaded to reduce initial bundle size
- Include skeleton placeholders with hex patterns

### Chart Components
- Recharts-based chart components
- Lazy loaded for better performance when charts aren't immediately visible
- Includes skeleton with bar chart pattern

### Sidebar Components  
- Full sidebar system with provider, triggers, and menu components
- Lazy loaded to minimize initial bundle
- Includes realistic skeleton matching sidebar layout

## Usage

```tsx
// Instead of:
import { ChartContainer } from "@/components/ui/chart";

// Use:
import { LazyChartContainer } from "@/components/lazy";

// Component will show skeleton while loading, then render the actual chart
<LazyChartContainer config={chartConfig}>
  {/* Chart content */}
</LazyChartContainer>
```

## Benefits
- Reduced initial JavaScript bundle size
- Better first load performance  
- Graceful loading with skeleton placeholders
- Code splitting for better caching