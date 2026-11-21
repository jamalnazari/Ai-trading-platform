import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  FileUp,
  HeartPulse,
  LogIn,
  ServerCog,
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

export const metadata: Metadata = { title: "Dashboard" };

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
        title="Dashboard"
        description="Overview of your Trader Insight workspace."
        actions={
          <Link
            href="/dashboard/analytics"
            className={buttonClasses({ variant: "secondary", size: "sm" })}
          >
            View analytics
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Users"
          value={formatNumber(24)}
          icon={Users}
          delta="+3 this week"
          deltaTone="up"
          footnote="17 active · 5 invited · 2 suspended"
        >
          <Sparkline data={[3, 4, 4, 6, 7, 9, 10, 12, 14, 18, 21, 24]} className="h-9 w-full" />
        </StatCard>
        <StatCard
          label="Website Visits"
          value={formatNumber(analytics.totalVisits)}
          icon={Activity}
          delta={analytics.totalVisitsDelta}
          deltaTone="up"
          footnote={`${formatNumber(analytics.monthVisits)} in the last 30 days`}
        >
          <Sparkline data={visitsLast30Days} className="h-9 w-full" />
        </StatCard>
        <StatCard
          label="Uploaded Statements"
          value={formatNumber(analytics.uploadedStatements)}
          icon={FileUp}
          delta="+12 this month"
          deltaTone="up"
          footnote="All files parsed successfully"
        >
          <Sparkline data={[2, 3, 5, 4, 8, 9, 12, 11, 14, 16, 19, 23]} className="h-9 w-full" />
        </StatCard>
        <StatCard
          label="System Status"
          value="Operational"
          icon={ServerCog}
          footnote={`Uptime ${analytics.uptime} · API v1.0`}
        >
          <div className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.02] px-3 py-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            <span className="flex items-center gap-1.5 text-xs text-zinc-400">
              <HeartPulse className="size-3.5 text-accent" aria-hidden />
              All services running normally
            </span>
          </div>
        </StatCard>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <VisitsChartCard className="lg:col-span-2" />

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest events across the platform.</CardDescription>
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
