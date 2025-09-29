// Export all sidebar components to maintain the same API
export {
  Sidebar,
  SidebarProvider,
  SidebarInset,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  useSidebar,
  type SidebarContext,
} from "./SidebarRoot";

export {
  SidebarTrigger,
  SidebarRail,
} from "./SidebarToggle";

export {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarSeparator,
  SidebarInput,
} from "./SidebarSection";

export {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "./SidebarItem";

// Re-export configuration types and constants
export type {
  SidebarNavItem,
  SidebarNavSubItem,
  SidebarNavGroup,
  SidebarNavConfig,
} from "@/config/sidebar";

export {
  SIDEBAR_CONSTANTS,
  DEFAULT_SIDEBAR_NAV,
} from "@/config/sidebar";