import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { focusRingClasses, usePrefersReducedMotion, handleArrowNavigation } from "@/lib/accessibility";
import { useSidebar } from "./SidebarRoot";

// Menu container with keyboard navigation
export const SidebarMenu = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(({ className, ...props }, ref) => (
  <ul 
    ref={ref} 
    data-sidebar="menu" 
    className={cn("flex w-full min-w-0 flex-col gap-1", className)} 
    role="menu"
    {...props} 
  />
));
SidebarMenu.displayName = "SidebarMenu";

// Individual menu item with proper ARIA roles
export const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li 
    ref={ref} 
    data-sidebar="menu-item" 
    className={cn("group/menu-item relative", className)} 
    role="none"
    {...props} 
  />
));
SidebarMenuItem.displayName = "SidebarMenuItem";

// Menu button variants with accessibility enhancements
const sidebarMenuButtonVariants = cva(
  [
    "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm",
    "transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
    "active:bg-sidebar-accent active:text-sidebar-accent-foreground",
    "disabled:pointer-events-none disabled:opacity-50",
    "group-has-[[data-sidebar=menu-action]]/menu-item:pr-8",
    "aria-disabled:pointer-events-none aria-disabled:opacity-50",
    "data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground",
    "data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground",
    "group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2",
    "[&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
    focusRingClasses
  ].join(" "),
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

// Enhanced menu button with full accessibility support
export const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, onKeyDown, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    // Handle space key for button activation
    if (event.key === " " && !asChild) {
      event.preventDefault();
      event.currentTarget.click();
    }
    onKeyDown?.(event);
  };

  const button = (
    <Comp
      ref={ref}
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      role={asChild ? undefined : "menuitem"}
      tabIndex={asChild ? undefined : 0}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        sidebarMenuButtonVariants({ variant, size }), 
        prefersReducedMotion && "transition-none",
        className
      )}
      onKeyDown={handleKeyDown}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent 
        side="right" 
        align="center" 
        hidden={state !== "collapsed" || isMobile} 
        {...tooltip} 
      />
    </Tooltip>
  );
});
SidebarMenuButton.displayName = "SidebarMenuButton";

// Menu action component with enhanced accessibility
export const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
  }
>(({ className, asChild = false, showOnHover = false, onKeyDown, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === " " && !asChild) {
      event.preventDefault();
      event.currentTarget.click();
    }
    onKeyDown?.(event);
  };

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      tabIndex={0}
      role={asChild ? undefined : "button"}
      aria-label="Menu action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        "transition-transform [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        focusRingClasses,
        prefersReducedMotion && "transition-none",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className,
      )}
      onKeyDown={handleKeyDown}
      {...props}
    />
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";

// Menu badge with proper ARIA labels
export const SidebarMenuBadge = React.forwardRef<HTMLDivElement, React.ComponentProps<"div"> & {
  count?: number;
}>(({ className, count, children, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    role="status"
    aria-label={count ? `${count} items` : undefined}
    className={cn(
      "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      className,
    )}
    {...props}
  >
    {children ?? count}
  </div>
));
SidebarMenuBadge.displayName = "SidebarMenuBadge";

// Skeleton loading component with accessibility
export const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean;
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      role="status"
      aria-label="Loading menu item"
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="h-4 max-w-[--skeleton-width] flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

// Sub-menu components with keyboard navigation
export const SidebarMenuSub = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu-sub"
      role="group"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuSub.displayName = "SidebarMenuSub";

export const SidebarMenuSubItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ ...props }, ref) => (
  <li ref={ref} role="none" {...props} />
));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

export const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
  }
>(({ asChild = false, size = "md", isActive, className, onKeyDown, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    // Handle Enter key for link activation
    if (event.key === "Enter" && !asChild) {
      event.currentTarget.click();
    }
    onKeyDown?.(event);
  };

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      role={asChild ? undefined : "menuitem"}
      tabIndex={0}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground",
        "aria-disabled:pointer-events-none aria-disabled:opacity-50",
        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        "active:bg-sidebar-accent active:text-sidebar-accent-foreground",
        "disabled:pointer-events-none disabled:opacity-50",
        "[&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        "transition-colors",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        focusRingClasses,
        prefersReducedMotion && "transition-none",
        className,
      )}
      onKeyDown={handleKeyDown}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";