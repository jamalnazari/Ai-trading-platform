import type { Metadata } from "next";
import { CalendarDays, CalendarRange, CalendarCheck, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { Sparkline } from "@/components/charts/sparkline";
import { BarChart } from "@/components/charts/bar-chart";
import { Table, Td, Th, Tr } from "@/components/ui/table";
import { VisitsChartCard } from "@/components/dashboard/visits-chart-card";
import { PageHeader } from "@/components/dashboard/page-header";
import {
  analytics,
  recentVisitors,
  topPages,
  visitsByWeekday,
  visitsLast30Days,
} from "@/lib/data";
import { formatNumber } from "@/lib/utils";

export const metadata: Metadata = { title: "تحلیل وب‌سایت" };

export default function AnalyticsPage() {
  return (
    <>
      <PageHeader
        title="تحلیل وب‌سایت"
        description="ترافیک وب‌سایت عمومی تریدر اینسایت."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="کل بازدیدها"
          value={formatNumber(analytics.totalVisits)}
          icon={Globe}
          delta={analytics.totalVisitsDelta}
          deltaTone="up"
        >
          <Sparkline data={visitsLast30Days} className="h-9 w-full" />
        </StatCard>
        <StatCard
          label="بازدیدهای امروز"
          value={formatNumber(analytics.todayVisits)}
          icon={CalendarCheck}
          delta="+۹ نسبت به دیروز"
          deltaTone="up"
        >
          <Sparkline data={visitsLast30Days.slice(-7)} className="h-9 w-full" />
        </StatCard>
        <StatCard
          label="این هفته"
          value={formatNumber(analytics.weekVisits)}
          icon={CalendarDays}
          delta="+۱۸٫۲٪"
          deltaTone="up"
        >
          <Sparkline data={[96, 105, 96, 201, 214, 226, 218]} className="h-9 w-full" />
        </StatCard>
        <StatCard
          label="این ماه"
          value={formatNumber(analytics.monthVisits)}
          icon={CalendarRange}
          delta="+۳۱٫۵٪"
          deltaTone="up"
        >
          <Sparkline data={visitsLast30Days} className="h-9 w-full" />
        </StatCard>
      </div>

      <div className="mt-4">
        <VisitsChartCard />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>بازدید بر اساس روز هفته</CardTitle>
            <CardDescription>هفته کامل گذشته · شنبه تا جمعه</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart data={visitsByWeekday} className="h-44 w-full" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>پربازدیدترین صفحات</CardTitle>
            <CardDescription>پربازدیدترین صفحات در این ماه</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {topPages.map((page) => {
              const max = topPages[0]!.visits;
              const width = Math.round((page.visits / max) * 100);
              return (
                <div key={page.path} className="flex items-center gap-3">
                  <span dir="ltr" className="w-28 shrink-0 text-left font-mono text-xs text-zinc-400">
                    {page.path}
                  </span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                  <span className="w-14 shrink-0 text-left text-xs text-zinc-400 tabular-nums">
                    {formatNumber(page.visits)}
                  </span>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      <Card className="mt-4 overflow-hidden">
        <CardHeader>
          <CardTitle>بازدیدکنندگان اخیر</CardTitle>
          <CardDescription>
            آخرین نشست‌ها · بخشی از آدرس IP برای حفظ حریم خصوصی پنهان شده است
          </CardDescription>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <Table>
            <thead>
              <tr>
                <Th className="ps-6">آدرس IP</Th>
                <Th>مکان</Th>
                <Th>صفحه</Th>
                <Th>مرورگر</Th>
                <Th className="pe-6 text-end">زمان</Th>
              </tr>
            </thead>
            <tbody>
              {recentVisitors.map((visitor) => (
                <Tr key={`${visitor.ip}-${visitor.time}`}>
                  <Td dir="ltr" className="ps-6 text-left font-mono text-xs text-zinc-400">
                    {visitor.ip}
                  </Td>
                  <Td className="text-zinc-300">
                    {visitor.city}
                    <span className="ms-1.5 text-zinc-600">{visitor.country}</span>
                  </Td>
                  <Td dir="ltr" className="text-left font-mono text-xs text-zinc-400">
                    {visitor.path}
                  </Td>
                  <Td dir="ltr" className="text-right text-zinc-400">
                    {visitor.browser}
                  </Td>
                  <Td className="pe-6 text-end text-zinc-500">
                    {visitor.time}
                  </Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
