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

export const metadata: Metadata = { title: "Website Analytics" };

export default function AnalyticsPage() {
  return (
    <>
      <PageHeader
        title="Website Analytics"
        description="Traffic to the public Trader Insight website."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Visits"
          value={formatNumber(analytics.totalVisits)}
          icon={Globe}
          delta={analytics.totalVisitsDelta}
          deltaTone="up"
        >
          <Sparkline data={visitsLast30Days} className="h-9 w-full" />
        </StatCard>
        <StatCard
          label="Today's Visits"
          value={formatNumber(analytics.todayVisits)}
          icon={CalendarCheck}
          delta="+9 vs yesterday"
          deltaTone="up"
        >
          <Sparkline data={visitsLast30Days.slice(-7)} className="h-9 w-full" />
        </StatCard>
        <StatCard
          label="This Week"
          value={formatNumber(analytics.weekVisits)}
          icon={CalendarDays}
          delta="+18.2%"
          deltaTone="up"
        >
          <Sparkline data={[96, 105, 96, 201, 214, 226, 218]} className="h-9 w-full" />
        </StatCard>
        <StatCard
          label="This Month"
          value={formatNumber(analytics.monthVisits)}
          icon={CalendarRange}
          delta="+31.5%"
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
            <CardTitle>Visits by weekday</CardTitle>
            <CardDescription>Last full week · Monday to Sunday</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart data={visitsByWeekday} className="h-44 w-full" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top pages</CardTitle>
            <CardDescription>Most visited pages this month</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {topPages.map((page) => {
              const max = topPages[0]!.visits;
              const width = Math.round((page.visits / max) * 100);
              return (
                <div key={page.path} className="flex items-center gap-3">
                  <span className="w-28 shrink-0 font-mono text-xs text-zinc-400">
                    {page.path}
                  </span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${width}%` }}
                    />
                  </div>
                  <span className="w-14 shrink-0 text-right text-xs text-zinc-400 tabular-nums">
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
          <CardTitle>Recent visitors</CardTitle>
          <CardDescription>
            Latest sessions · IP addresses partially masked for privacy
          </CardDescription>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <Table>
            <thead>
              <tr>
                <Th className="pl-6">IP Address</Th>
                <Th>Location</Th>
                <Th>Page</Th>
                <Th>Browser</Th>
                <Th className="pr-6 text-right">When</Th>
              </tr>
            </thead>
            <tbody>
              {recentVisitors.map((visitor) => (
                <Tr key={`${visitor.ip}-${visitor.time}`}>
                  <Td className="pl-6 font-mono text-xs text-zinc-400">
                    {visitor.ip}
                  </Td>
                  <Td className="text-zinc-300">
                    {visitor.city}
                    <span className="ml-1.5 text-zinc-600">{visitor.country}</span>
                  </Td>
                  <Td className="font-mono text-xs text-zinc-400">
                    {visitor.path}
                  </Td>
                  <Td className="text-zinc-400">{visitor.browser}</Td>
                  <Td className="pr-6 text-right text-zinc-500">
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
