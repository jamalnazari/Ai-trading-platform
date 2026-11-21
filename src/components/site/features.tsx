import {
  Bell,
  BookOpen,
  Bot,
  FileUp,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Badge } from "@/components/ui/badge";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
}

const features: Feature[] = [
  {
    icon: BookOpen,
    title: "ژورنال معاملاتی",
    description:
      "ثبت هر معامله با نقطه ورود، خروج، حجم و یادداشت‌ها؛ سند ساختاریافته‌ای از هر تصمیم شما.",
  },
  {
    icon: TrendingUp,
    title: "تحلیل عملکرد",
    description:
      "نرخ برد، افت سرمایه، امید ریاضی و منحنی سرمایه — همان معیارهایی که حرفه‌ای‌ها دنبال می‌کنند.",
  },
  {
    icon: FileUp,
    title: "بارگذاری صورت‌حساب",
    description:
      "صورت‌حساب‌های کارگزاری را بارگذاری کنید؛ پلتفرم تاریخچه شما را به‌صورت خودکار مرتب می‌کند.",
  },
  {
    icon: Sparkles,
    title: "آمادهٔ هوش مصنوعی",
    description:
      "مدل داده و رابط کاربری از روز اول برای تحلیل هوش مصنوعی آماده است — بعداً هیچ بازطراحی‌ای لازم نیست.",
    badge: "به‌زودی",
  },
  {
    icon: Bell,
    title: "هشدار قیمت",
    description:
      "واچ‌لیست بسازید و وقتی نمادها به سطوح مهم پلن معاملاتی‌تان رسیدند مطلع شوید.",
    badge: "آینده",
  },
  {
    icon: Bot,
    title: "دستیار ایجنت",
    description:
      "ایجنتی که ژورنال شما را مرور می‌کند و پیشنهادهای بهبود می‌دهد — در نقشه راه رزرو شده است.",
    badge: "آینده",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-16 border-t border-white/6">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="امکانات"
          title="هر آنچه یک معامله‌گر جدی نیاز دارد"
          lede="نسخه ۱ با هسته ژورنال عرضه می‌شود. معماری از الان جای هوش مصنوعی، هشدارها و ایجنت‌ها را رزرو کرده — تا محصول بدون دردسر بزرگ شود."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col gap-4 rounded-2xl border border-white/8 bg-surface p-6 transition-colors hover:border-white/15"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-xl border border-white/8 bg-white/5 text-zinc-300 transition-colors group-hover:text-accent">
                  <feature.icon className="size-5" aria-hidden />
                </span>
                {feature.badge ? (
                  <Badge variant="soon">{feature.badge}</Badge>
                ) : null}
              </div>
              <div>
                <h3 className="text-base font-semibold text-zinc-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
