import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SidebarSkeleton = () => (
  <div className="w-60 h-full bg-card/20 backdrop-blur border-r border-border/20 p-4 space-y-4">
    <Skeleton className="h-8 w-32 mb-6" />
    <div className="space-y-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex items-center space-x-3 p-2">
          <Skeleton className="w-5 h-5 rounded" />
          <Skeleton className="h-4 flex-1" />
        </div>
      ))}
    </div>
    <div className="mt-8 space-y-2">
      <Skeleton className="h-6 w-24 mb-3" />
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex items-center space-x-3 p-2">
          <Skeleton className="w-4 h-4 rounded" />
          <Skeleton className="h-3 flex-1" />
        </div>
      ))}
    </div>
  </div>
);

// Create individual lazy components
const LazySidebarComponent = React.lazy(() => 
  import("@/components/ui/sidebar").then(module => ({ 
    default: module.Sidebar 
  }))
);

const LazySidebarProviderComponent = React.lazy(() => 
  import("@/components/ui/sidebar").then(module => ({ 
    default: module.SidebarProvider 
  }))
);

const LazySidebarTriggerComponent = React.lazy(() => 
  import("@/components/ui/sidebar").then(module => ({ 
    default: module.SidebarTrigger 
  }))
);

const LazySidebarContentComponent = React.lazy(() => 
  import("@/components/ui/sidebar").then(module => ({ 
    default: module.SidebarContent 
  }))
);

const LazySidebarMenuComponent = React.lazy(() => 
  import("@/components/ui/sidebar").then(module => ({ 
    default: module.SidebarMenu 
  }))
);

const LazySidebarMenuItemComponent = React.lazy(() => 
  import("@/components/ui/sidebar").then(module => ({ 
    default: module.SidebarMenuItem 
  }))
);

const LazySidebarMenuButtonComponent = React.lazy(() => 
  import("@/components/ui/sidebar").then(module => ({ 
    default: module.SidebarMenuButton 
  }))
);

// Export wrapped components
export const LazySidebar = React.forwardRef<any, any>((props, ref) => (
  <Suspense fallback={<SidebarSkeleton />}>
    <LazySidebarComponent ref={ref} {...props} />
  </Suspense>
));

export const LazySidebarProvider = ({ children, ...props }: any) => (
  <Suspense fallback={children}>
    <LazySidebarProviderComponent {...props}>
      {children}
    </LazySidebarProviderComponent>
  </Suspense>
);

export const LazySidebarTrigger = React.forwardRef<any, any>((props, ref) => (
  <Suspense fallback={<Skeleton className="w-10 h-10 rounded" />}>
    <LazySidebarTriggerComponent ref={ref} {...props} />
  </Suspense>
));

export const LazySidebarContent = React.forwardRef<any, any>((props, ref) => (
  <Suspense fallback={<div className="flex-1 p-4"><Skeleton className="w-full h-64" /></div>}>
    <LazySidebarContentComponent ref={ref} {...props} />
  </Suspense>
));

export const LazySidebarMenu = React.forwardRef<any, any>((props, ref) => (
  <Suspense fallback={<div className="space-y-2">{Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-8 w-full" />)}</div>}>
    <LazySidebarMenuComponent ref={ref} {...props} />
  </Suspense>
));

export const LazySidebarMenuItem = React.forwardRef<any, any>((props, ref) => (
  <Suspense fallback={<Skeleton className="h-8 w-full" />}>
    <LazySidebarMenuItemComponent ref={ref} {...props} />
  </Suspense>
));

export const LazySidebarMenuButton = React.forwardRef<any, any>((props, ref) => (
  <Suspense fallback={<Skeleton className="h-8 w-full" />}>
    <LazySidebarMenuButtonComponent ref={ref} {...props} />
  </Suspense>
));

// Hook that loads the actual useSidebar when needed
export const useSidebar = () => {
  const [sidebarModule, setSidebarModule] = React.useState<any>(null);
  
  React.useEffect(() => {
    import("@/components/ui/sidebar").then(module => {
      setSidebarModule(module);
    });
  }, []);
  
  if (sidebarModule?.useSidebar) {
    return sidebarModule.useSidebar();
  }
  
  // Return default state while loading
  return {
    state: 'expanded' as const,
    open: true,
    setOpen: () => {},
    openMobile: false,
    setOpenMobile: () => {},
    isMobile: false,
    toggleSidebar: () => {},
  };
};

LazySidebar.displayName = "LazySidebar";
LazySidebarTrigger.displayName = "LazySidebarTrigger";
LazySidebarContent.displayName = "LazySidebarContent";
LazySidebarMenu.displayName = "LazySidebarMenu";
LazySidebarMenuItem.displayName = "LazySidebarMenuItem";
LazySidebarMenuButton.displayName = "LazySidebarMenuButton";