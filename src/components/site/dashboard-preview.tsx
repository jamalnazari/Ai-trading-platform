import { LogoMark } from "@/components/ui/logo";

/**
 * Static, hand-built miniature of the admin dashboard used inside the
 * hero. Pure markup + SVG — no screenshots, no external images.
 */

const miniNav = ["داشبورد", "کاربران", "تحلیل‌ها", "تنظیمات"];

const miniStats = [
  { label: "کاربران", value: "۲۴" },
  { label: "بازدیدها", value: "۱٬۲۴۹" },
  { label: "صورت‌حساب‌ها", value: "۳۴۲" },
];

const miniRows = [
  { name: "Kenji Watanabe", detail: "kenji.watanabe", status: "فعال" },
  { name: "Priya Sharma", detail: "priya.sharma", status: "فعال" },
  { name: "Sofia Rossi", detail: "sofia.rossi", status: "دعوت‌شده" },
  { name: "Emma Johnson", detail: "emma.johnson", status: "معلق" },
];

export function DashboardPreview() {
  return (
    <div className="relative mx-auto mt-16 max-w-5xl md:mt-20">
      {/* soft accent glow behind the window */}
      <div
        aria-hidden
        className="absolute -inset-x-6 -top-10 h-56 rounded-full bg-accent/12 blur-3xl"
      />

      <div className="relative [mask-image:linear-gradient(to_bottom,black_58%,transparent_97%)]">
        <div className="rounded-xl border border-white/10 bg-surface shadow-[0_40px_80px_-24px_rgba(0,0,0,0.9)]">
          {/* window chrome */}
          <div className="flex items-center gap-3 border-b border-white/6 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-white/10" />
              <span className="size-2.5 rounded-full bg-white/10" />
              <span className="size-2.5 rounded-full bg-white/10" />
            </div>
            <span
              dir="ltr"
              className="mx-auto rounded-md border border-white/8 bg-white/5 px-3 py-1 font-mono text-[11px] text-zinc-500"
            >
              traderinsight.app/dashboard
            </span>
            <span className="w-12" />
          </div>

          <div className="grid sm:grid-cols-[170px_1fr]">
            {/* sidebar */}
            <div className="hidden flex-col gap-1 border-e border-white/6 p-3 sm:flex">
              <div className="mb-3 flex items-center gap-2 px-1">
                <LogoMark className="size-5" />
                <span className="text-[11px] font-semibold text-zinc-300">
                  تریدر اینسایت
                </span>
              </div>
              {miniNav.map((item, index) => (
                <div
                  key={item}
                  className={
                    index === 0
                      ? "rounded-md bg-white/8 px-2 py-1.5 text-[11px] text-zinc-200"
                      : "rounded-md px-2 py-1.5 text-[11px] text-zinc-500"
                  }
                >
                  {item}
                </div>
              ))}
              <div className="mt-auto rounded-md border border-dashed border-white/12 px-2 py-1.5 text-[10px] text-zinc-600">
                دستیار هوش مصنوعی · به‌زودی
              </div>
            </div>

            {/* main panel */}
            <div className="space-y-3 p-4">
              <div className="grid grid-cols-3 gap-3">
                {miniStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-white/6 bg-white/[0.02] p-3"
                  >
                    <p className="text-[10px] text-zinc-500">{stat.label}</p>
                    <p className="mt-1 text-sm font-semibold text-zinc-100 tabular-nums">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* mini chart */}
              <div className="rounded-lg border border-white/6 bg-white/[0.02] p-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[10px] text-zinc-500">
                    بازدیدها · ۳۰ روز اخیر
                  </span>
                  <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[9px] text-blue-300">
                    +۱۲٫۴٪
                  </span>
                </div>
                <svg viewBox="0 0 600 120" className="h-28 w-full" aria-hidden>
                  <defs>
                    <linearGradient id="hero-spark" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(59,130,246,0.35)" />
                      <stop offset="100%" stopColor="rgba(59,130,246,0)" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="0,100 0,78 60,72 120,76 180,60 240,64 300,44 360,50 420,30 480,36 540,18 600,22 600,100"
                    fill="url(#hero-spark)"
                  />
                  <polyline
                    points="0,78 60,72 120,76 180,60 240,64 300,44 360,50 420,30 480,36 540,18 600,22"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* mini table */}
              <div className="space-y-1.5">
                {miniRows.map((row) => (
                  <div
                    key={row.name}
                    className="flex items-center justify-between rounded-md px-2 py-1.5 text-[11px]"
                  >
                    <span className="text-zinc-300">{row.name}</span>
                    <span dir="ltr" className="hidden font-mono text-zinc-600 sm:inline">
                      {row.detail}
                    </span>
                    <span className="rounded-full bg-white/8 px-2 py-0.5 text-[9px] text-zinc-400">
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
