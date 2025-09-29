import { LucideIcon } from "lucide-react";

// Sidebar configuration constants
export const SIDEBAR_CONSTANTS = {
  COOKIE_NAME: "sidebar:state",
  COOKIE_MAX_AGE: 60 * 60 * 24 * 7, // 7 days
  WIDTH: "16rem",
  WIDTH_MOBILE: "18rem", 
  WIDTH_ICON: "3rem",
  KEYBOARD_SHORTCUT: "b",
} as const;

// Types for sidebar navigation structure
export interface SidebarNavItem {
  id: string;
  title: string;
  icon?: LucideIcon;
  href?: string;
  badge?: string | number;
  isActive?: boolean;
  disabled?: boolean;
  tooltip?: string;
  items?: SidebarNavSubItem[];
}

export interface SidebarNavSubItem {
  id: string;
  title: string;
  href: string;
  isActive?: boolean;
  disabled?: boolean;
}

export interface SidebarNavGroup {
  id: string;
  label?: string;
  items: SidebarNavItem[];
  collapsible?: boolean;
  defaultOpen?: boolean;
}

export interface SidebarNavConfig {
  groups: SidebarNavGroup[];
}

// Default sidebar navigation structure (example)
export const DEFAULT_SIDEBAR_NAV: SidebarNavConfig = {
  groups: [
    {
      id: "main",
      label: "Main Navigation",
      items: [
        {
          id: "home",
          title: "Home",
          href: "/",
          isActive: true,
        },
        {
          id: "dashboard", 
          title: "Dashboard",
          href: "/dashboard",
        },
      ],
    },
    {
      id: "content",
      label: "Content",
      items: [
        {
          id: "pages",
          title: "Pages",
          href: "/pages",
          items: [
            {
              id: "all-pages",
              title: "All Pages", 
              href: "/pages/all",
            },
            {
              id: "drafts",
              title: "Drafts",
              href: "/pages/drafts",
            },
          ],
        },
      ],
    },
  ],
};