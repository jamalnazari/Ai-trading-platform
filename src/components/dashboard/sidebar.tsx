"use client";

import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { Avatar } from "@/components/ui/avatar";
import { dashboardNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

function NavItem({
  href,
  label,
  icon: Icon,
  soon,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  soon?: boolean;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
        active
          ? "bg-white/8 font-medium text-white"
          : "text-zinc-400 hover:bg-white/5 hover:text-white",
        soon && "opacity-80",
      )}
    >
      <Icon
        className={cn(
          "size-4 shrink-0",
          active ? "text-accent" : "text-zinc-500 group-hover:text-zinc-300",
        )}
        aria-hidden
      />
      <span className="truncate">{label}</span>
      {soon ? (
        <span className="ms-auto shrink-0 rounded-full border border-white/10 px-1.5 py-px text-[10px] font-medium text-zinc-600">
          به‌زودی
        </span>
      ) : null}
    </Link>
  );
}

export function SidebarContent({ username }: { username: string }) {
  return (
    <div className="flex h-full flex-col">
      <div className="px-4 pt-5 pb-6">
        <Logo href="/dashboard" />
      </div>

      <nav
        className="flex-1 space-y-6 overflow-y-auto px-3 pb-6"
        aria-label="داشبورد"
      >
        {dashboardNav.map((group) => (
          <div key={group.label}>
            <p className="mb-2 px-3 text-[11px] font-medium text-zinc-600">
              {group.label}
            </p>
            <div className="flex flex-col gap-0.5">
              {group.items.map((item) => (
                <NavItem key={item.href} {...item} />
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-white/6 p-3">
        <div className="flex items-center gap-3 rounded-lg px-2 py-2">
          <Avatar name="مدیر" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-zinc-200">
              مدیر
            </p>
            <p dir="ltr" className="truncate text-right text-xs text-zinc-600">
              {username}@traderinsight.app
            </p>
          </div>
          <form action="/api/auth/logout" method="post">
            <button
              type="submit"
              aria-label="خروج"
              title="خروج"
              className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-white/5 hover:text-white"
            >
              <LogOut className="size-4" aria-hidden />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
