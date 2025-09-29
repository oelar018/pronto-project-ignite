// Lazy loading exports for optimized bundle splitting
export { default as LazyHexHeroNeura } from "./LazyHexHeroNeura";
export { default as LazyHexGridNeura } from "./LazyHexGridNeura";

// Chart components
export {
  LazyChartContainer,
  LazyChartTooltip,
  LazyChartTooltipContent,
  LazyChartLegend,
  LazyChartLegendContent,
  type ChartConfig,
} from "./LazyChart";

// Sidebar components
export {
  LazySidebar,
  LazySidebarProvider,
  LazySidebarTrigger,
  LazySidebarContent,
  LazySidebarMenu,
  LazySidebarMenuItem,
  LazySidebarMenuButton,
  useSidebar,
} from "./LazySidebar";

// Usage examples:
// import { LazyHexHeroNeura } from "@/components/lazy";
// import { LazyChartContainer } from "@/components/lazy";
// import { LazySidebar } from "@/components/lazy";