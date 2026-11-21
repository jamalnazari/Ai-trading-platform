import Link from "next/link";
import { Check } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

interface Tier {
  name: string;
  price: string;
  period?: string;
  description: string;
  cta: { label: string; href: string; variant: "primary" | "outline" };
  featured?: boolean;
  items: string[];
}

const tiers: Tier[] = [
  {
    name: "استارتر",
    price: "$0",
    period: "برای همیشه",
    description: "برای معامله‌گرانی که عادت ژورنال‌نویسی را می‌سازند.",
    cta: { label: "شروع کنید", href: "/login", variant: "outline" },
    items: [
      "ژورنال معاملاتی",
      "تا ۱۰۰ معامله در ماه",
      "داشبورد عملکرد",
      "بارگذاری صورت‌حساب CSV",
    ],
  },
  {
    name: "حرفه‌ای",
    price: "$19",
    period: "ماهانه",
    description: "برای معامله‌گرانی که هر هفته مرور می‌کنند.",
    featured: true,
    cta: { label: "شروع کنید", href: "/login", variant: "primary" },
    items: [
      "همه امکانات استارتر",
      "معاملات نامحدود",
      "تحلیل و گزارش‌های پیشرفته",
      "پردازش صورت‌حساب",
      "پشتیبانی اولویت‌دار",
    ],
  },
  {
    name: "سازمانی",
    price: "سفارشی",
    description: "برای تیم‌ها و میزهای معاملاتی.",
    cta: { label: "تماس با ما", href: "/#contact", variant: "outline" },
    items: [
      "همه امکانات حرفه‌ای",
      "مدیریت چند حساب",
      "دسترسی API (به‌زودی)",
      "پشتیبانی اختصاصی",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-16 border-t border-white/6">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="تعرفه‌ها"
          title="تعرفه ساده، ابزارهای حرفه‌ای"
          lede="رایگان شروع کنید تا عادت ساختن ژورنال را تمرین کنید. وقتی داده‌ها بیشتر شد، ارتقا دهید."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-surface p-6",
                tier.featured
                  ? "border-accent/50 bg-gradient-to-b from-accent/[0.08] to-transparent"
                  : "border-white/8",
              )}
            >
              {tier.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[11px] font-medium text-white">
                  محبوب‌ترین
                </span>
              ) : null}

              <h3 className="text-sm font-medium text-zinc-400">{tier.name}</h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-zinc-50">
                  {tier.price}
                </span>
                {tier.period ? (
                  <span className="text-sm text-zinc-500">{tier.period}</span>
                ) : null}
              </div>
              <p className="mt-3 text-sm text-zinc-400">{tier.description}</p>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {tier.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-zinc-300"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={tier.cta.href}
                className={cn(
                  buttonClasses({
                    variant: tier.cta.variant,
                    size: "md",
                  }),
                  "mt-8 w-full",
                )}
              >
                {tier.cta.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
