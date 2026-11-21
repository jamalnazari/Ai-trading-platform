import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { GithubIcon, LinkedInIcon, XIcon } from "@/components/ui/brand-icons";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Roadmap", href: "/#roadmap" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Login", href: "/login" },
      { label: "Dashboard", href: "/dashboard" },
    ],
  },
];

const socials = [
  { label: "GitHub", icon: GithubIcon, href: "https://github.com" },
  { label: "X (Twitter)", icon: XIcon, href: "https://x.com" },
  { label: "LinkedIn", icon: LinkedInIcon, href: "https://linkedin.com" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/6">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_auto]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-sm text-sm text-zinc-500">
              A personal trading journal platform designed for traders. Track
              your performance. Understand your mistakes. Improve consistently.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex size-8 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-colors hover:border-white/25 hover:text-white"
                >
                  <social.icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-medium tracking-wider text-zinc-500 uppercase">
                  {column.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/6 pt-8 sm:flex-row">
          <p className="text-xs text-zinc-600">
            © 2026 Trader Insight. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Built for disciplined traders.
          </p>
        </div>
      </div>
    </footer>
  );
}
