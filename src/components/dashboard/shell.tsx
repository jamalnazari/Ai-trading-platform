"use client";

import { ExternalLink, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SidebarContent } from "./sidebar";
import { titleForPath } from "@/lib/navigation";

export function DashboardShell({
  username,
  children,
}: {
  username: string;
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile drawer whenever navigation happens.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-canvas">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 start-0 z-30 hidden w-64 border-e border-white/6 bg-surface lg:block">
        <SidebarContent username={username} />
      </aside>

      {/* Mobile drawer */}
      {mobileOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            aria-hidden
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 start-0 w-72 border-e border-white/10 bg-surface shadow-2xl">
            <div className="flex justify-end p-2">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="بستن منو"
                className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-white/5 hover:text-white"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="h-[calc(100%-44px)]">
              <SidebarContent username={username} />
            </div>
          </div>
        </div>
      ) : null}

      <div className="lg:ps-64">
        {/* Topbar */}
        <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-white/6 bg-canvas/80 px-4 backdrop-blur-md sm:px-6">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="باز کردن منو"
            className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white lg:hidden"
          >
            <Menu className="size-5" />
          </button>

          <h1 className="text-sm font-medium text-zinc-300">
            {titleForPath(pathname)}
          </h1>

          <div className="ms-auto flex items-center gap-3">
            <div className="hidden md:block">
              <div className="relative">
                <Search
                  className="pointer-events-none absolute top-1/2 start-2.5 size-3.5 -translate-y-1/2 text-zinc-600"
                  aria-hidden
                />
                <input
                  type="search"
                  placeholder="جستجو"
                  aria-label="جستجو"
                  className="h-8 w-56 rounded-lg border border-white/10 bg-white/5 pe-10 ps-8 text-xs text-zinc-300 placeholder:text-zinc-600 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
                <kbd className="absolute top-1/2 end-2 -translate-y-1/2 rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-zinc-600">
                  ⌘K
                </kbd>
              </div>
            </div>

            <Link
              href="/"
              className="hidden items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs text-zinc-400 transition-colors hover:bg-white/5 hover:text-white sm:inline-flex"
            >
              <ExternalLink className="size-3.5" aria-hidden />
              مشاهده وب‌سایت
            </Link>
          </div>
        </header>

        <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
