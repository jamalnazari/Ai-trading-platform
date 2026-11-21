"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/ui/logo";
import { buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "خانه", href: "/#home" },
  { label: "امکانات", href: "/#features" },
  { label: "تعرفه‌ها", href: "/#pricing" },
  { label: "نقشه راه", href: "/#roadmap" },
  { label: "درباره ما", href: "/#about" },
  { label: "تماس", href: "/#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/6 bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Logo href="/#home" />

        <nav className="hidden items-center gap-7 md:flex" aria-label="منوی اصلی">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/login" className={buttonClasses({ variant: "secondary", size: "sm" })}>
            ورود
          </Link>
          <button
            type="button"
            className="inline-flex size-8 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/5 hover:text-white md:hidden"
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="border-t border-white/6 bg-canvas px-6 py-4 md:hidden"
          aria-label="منوی موبایل"
        >
          <ul className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 border-t border-white/6 pt-3">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className={cn(buttonClasses({ variant: "primary", size: "md" }), "w-full")}
              >
                ورود
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
