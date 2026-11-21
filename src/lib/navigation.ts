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
  /** Reserved for a future module — rendered with a "به‌زودی" chip. */
  soon?: boolean;
  version?: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

/**
 * Sidebar navigation. The "ماژول‌های آینده" group is deliberately reserved
 * now so later releases (AI, agents, brokers) drop in without any
 * redesign — each item simply points at a "به‌زودی" page today.
 */
export const dashboardNav: NavGroup[] = [
  {
    label: "نمای کلی",
    items: [
      { href: "/dashboard", label: "داشبورد", icon: LayoutDashboard },
      { href: "/dashboard/users", label: "کاربران", icon: Users },
      { href: "/dashboard/analytics", label: "تحلیل وب‌سایت", icon: Activity },
    ],
  },
  {
    label: "مدیریت",
    items: [
      { href: "/dashboard/settings", label: "تنظیمات", icon: Settings },
    ],
  },
  {
    label: "ماژول‌های آینده",
    items: [
      { href: "/dashboard/ai-assistant", label: "دستیار هوش مصنوعی", icon: Sparkles, soon: true, version: "نسخه ۲" },
      { href: "/dashboard/trading-memory", label: "حافظه معاملاتی", icon: Brain, soon: true, version: "نسخه ۲" },
      { href: "/dashboard/price-alerts", label: "هشدار قیمت", icon: Bell, soon: true, version: "نسخه ۳" },
      { href: "/dashboard/trading-agent", label: "ایجنت معاملاتی", icon: Bot, soon: true, version: "نسخه ۴" },
      { href: "/dashboard/broker-connections", label: "اتصالات کارگزاری", icon: Plug, soon: true, version: "نسخه ۴" },
    ],
  },
];

const titles: Record<string, string> = {
  "/dashboard": "داشبورد",
  "/dashboard/users": "کاربران",
  "/dashboard/analytics": "تحلیل وب‌سایت",
  "/dashboard/settings": "تنظیمات",
  "/dashboard/ai-assistant": "دستیار هوش مصنوعی",
  "/dashboard/trading-memory": "حافظه معاملاتی",
  "/dashboard/price-alerts": "هشدار قیمت",
  "/dashboard/trading-agent": "ایجنت معاملاتی",
  "/dashboard/broker-connections": "اتصالات کارگزاری",
};

export function titleForPath(pathname: string): string {
  return titles[pathname] ?? "داشبورد";
}
