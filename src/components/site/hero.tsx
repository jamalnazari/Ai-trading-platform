import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { DashboardPreview } from "./dashboard-preview";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden scroll-mt-16">
      {/* faint top glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-white/[0.04] to-transparent"
      />

      <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 md:pt-40">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-zinc-400">
            <Sparkles className="size-3.5 text-accent" aria-hidden />
            ژورنال معاملاتی آمادهٔ هوش مصنوعی · نسخه ۱
          </span>

          <h1 className="text-4xl font-semibold text-balance text-zinc-50 sm:text-5xl md:text-6xl md:leading-[1.15]">
            معاملات خود را{" "}
            <span className="bg-gradient-to-b from-zinc-50 to-zinc-500 bg-clip-text text-transparent">
              مثل یک حرفه‌ای تحلیل کنید
            </span>
          </h1>

          <p className="max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 md:text-lg">
            پلتفرم ژورنال معاملاتی شخصی، طراحی‌شده برای معامله‌گران. عملکرد
            خود را رصد کنید. اشتباهات خود را بفهمید. پیوسته بهتر شوید.
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/login"
              className={buttonClasses({ size: "lg" })}
            >
              شروع کنید
              <ArrowLeft className="size-4" aria-hidden />
            </Link>
            <Link
              href="/#features"
              className={buttonClasses({ variant: "outline", size: "lg" })}
            >
              مشاهده امکانات
            </Link>
          </div>

          <p className="text-xs text-zinc-600">
            نسخه ۱ روی ژورنال‌نویسی و تحلیل تمرکز دارد — ماژول‌های هوش مصنوعی
            در نقشه راه هستند.
          </p>
        </div>

        <DashboardPreview />
      </div>
    </section>
  );
}
