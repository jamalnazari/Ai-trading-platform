import {
  Activity,
  Bell,
  Bot,
  Brain,
  LayoutDashboard,
  Plug,
  Settings,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  /** Reserved for a future module — rendered with a "Soon" chip. */
  soon?: boolean;
  version?: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

/**
 * Sidebar navigation. The "Future modules" group is deliberately reserved
 * now so later releases (AI, agents, brokers) drop in without any
 * redesign — each item simply points at a "Coming Soon" page today.
 */
export const dashboardNav: NavGroup[] = [
  {
    label: "Overview",
    items: [
      { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
      { href: "/dashboard/users", label: "Users", icon: Users },
      { href: "/dashboard/analytics", label: "Website Analytics", icon: Activity },
    ],
  },
  {
    label: "Management",
    items: [
      { href: "/dashboard/settings", label: "Settings", icon: Settings },
    ],
  },
  {
    label: "Future modules",
    items: [
      { href: "/dashboard/ai-assistant", label: "AI Assistant", icon: Sparkles, soon: true, version: "V2" },
      { href: "/dashboard/trading-memory", label: "Trading Memory", icon: Brain, soon: true, version: "V2" },
      { href: "/dashboard/price-alerts", label: "Price Alerts", icon: Bell, soon: true, version: "V3" },
      { href: "/dashboard/trading-agent", label: "Trading Agent", icon: Bot, soon: true, version: "V4" },
      { href: "/dashboard/broker-connections", label: "Broker Connections", icon: Plug, soon: true, version: "V4" },
    ],
  },
];

const titles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/dashboard/users": "Users",
  "/dashboard/analytics": "Website Analytics",
  "/dashboard/settings": "Settings",
  "/dashboard/ai-assistant": "AI Assistant",
  "/dashboard/trading-memory": "Trading Memory",
  "/dashboard/price-alerts": "Price Alerts",
  "/dashboard/trading-agent": "Trading Agent",
  "/dashboard/broker-connections": "Broker Connections",
};

export function titleForPath(pathname: string): string {
  return titles[pathname] ?? "Dashboard";
}
