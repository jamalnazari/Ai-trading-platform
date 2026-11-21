import { ShieldCheck, Target, Compass } from "lucide-react";
import { SectionHeading } from "./section-heading";

const principles = [
  {
    icon: Target,
    title: "اول ژورنال",
    description:
      "هر امکان از ژورنال معاملاتی شروع می‌شود — منبع یگانه حقیقت برای تصمیم‌های شما.",
  },
  {
    icon: ShieldCheck,
    title: "داده‌های تو، برد تو",
    description:
      "تاریخچه معاملات و یادداشت‌های شما متعلق به خودتان است. حریم خصوصی یک امکان است، نه یک تنظیمات.",
  },
  {
    icon: Compass,
    title: "مبتنی بر نقشه راه",
    description:
      "نسخه‌های متمرکز عرضه می‌کنیم. هوش مصنوعی، هشدارها و ایجنت‌ها به‌صورت ماژول بومی می‌آیند، نه چسب‌واند.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-white/6">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <SectionHeading
            align="left"
            eyebrow="درباره ما"
            title="ساخته‌شده توسط معامله‌گران، برای معامله‌گران"
            lede="تریدر اینسایت به این دلیل وجود دارد که بیشتر معامله‌گران مشکل عملکرد ندارند — مشکل مرور و بازبینی ندارند. نسخه ۱ به شما فضای کاری آرام و متمرکز می‌دهد: یک ژورنال، صورت‌حساب‌هایتان، و تحلیل صادقانه."
          />

          <ul className="flex flex-col gap-4">
            {principles.map((principle) => (
              <li
                key={principle.title}
                className="flex gap-4 rounded-2xl border border-white/8 bg-surface p-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-white/5 text-zinc-300">
                  <principle.icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {principle.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                    {principle.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
