import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  FileUp,
  HeartPulse,
  ServerCog,
  LogIn,
  Settings,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { Sparkline } from "@/components/charts/sparkline";
import { VisitsChartCard } from "@/components/dashboard/visits-chart-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { analytics, recentActivity, visitsLast30Days, type ActivityType } from "@/lib/data";
import { formatNumber } from "@/lib/utils";

export const metadata: Metadata = { title: "داشبورد" };

const activityIcons: Record<ActivityType, LucideIcon> = {
  signup: UserPlus,
  upload: FileUp,
  signin: LogIn,
  settings: Settings,
  report: Activity,
};

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="داشبورد"
        description="نمای کلی فضای کاری تریدر اینسایت شما."
        actions={
          <Link
            href="/dashboard/analytics"
            className={buttonClasses({ variant: "secondary", size: "sm" })}
          >
            مشاهده تحلیل‌ها
            <ArrowLeft className="size-3.5" aria-hidden />
          </Link>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="کل کاربران"
          value={formatNumber(24)}
          icon={Users}
          delta="+۳ در این هفته"
          deltaTone="up"
          footnote="۱۷ فعال · ۵ دعوت‌شده · ۲ معلق"
        >
          <Sparkline data={[3, 4, 4, 6, 7, 9, 10, 12, 14, 18, 21, 24]} className="h-9 w-full" />
        </StatCard>
        <StatCard
          label="بازدیدهای وب‌سایت"
          value={formatNumber(analytics.totalVisits)}
          icon={Activity}
          delta={analytics.totalVisitsDelta}
          deltaTone="up"
          footnote={`${formatNumber(analytics.monthVisits)} در ۳۰ روز اخیر`}
        >
          <Sparkline data={visitsLast30Days} className="h-9 w-full" />
        </StatCard>
        <StatCard
          label="صورت‌حساب‌های بارگذاری‌شده"
          value={formatNumber(analytics.uploadedStatements)}
          icon={FileUp}
          delta="+۱۲ در این ماه"
          deltaTone="up"
          footnote="همه فایل‌ها با موفقیت پردازش شدند"
        >
          <Sparkline data={[2, 3, 5, 4, 8, 9, 12, 11, 14, 16, 19, 23]} className="h-9 w-full" />
        </StatCard>
        <StatCard
          label="وضعیت سیستم"
          value="عادی"
          icon={ServerCog}
          footnote={`آپتایم ${analytics.uptime} · API نسخه ۱٫۰`}
        >
          <div className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.02] px-3 py-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            <span className="flex items-center gap-1.5 text-xs text-zinc-400">
              <HeartPulse className="size-3.5 text-accent" aria-hidden />
              همه سرویس‌ها به‌طور عادی در حال اجرا هستند
            </span>
          </div>
        </StatCard>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <VisitsChartCard className="lg:col-span-2" />

        <Card>
          <CardHeader>
            <CardTitle>فعالیت‌های اخیر</CardTitle>
            <CardDescription>آخرین رویدادها در سراسر پلتفرم.</CardDescription>
          </CardHeader>
          <CardContent className="px-3 py-3">
            <ul className="flex flex-col">
              {recentActivity.map((item, index) => {
                const Icon = activityIcons[item.type];
                return (
                  <li
                    key={index}
                    className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/[0.03]"
                  >
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-zinc-400">
                      <Icon className="size-3.5" aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-zinc-200">{item.message}</p>
                      <p className="truncate text-xs text-zinc-600">
                        {item.detail}
                      </p>
                    </div>
                    <span className="shrink-0 text-[11px] text-zinc-600">
                      {item.time}
                    </span>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
