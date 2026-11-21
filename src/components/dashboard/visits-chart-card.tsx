"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LineChart } from "@/components/charts/line-chart";
import { visitsLast30Days } from "@/lib/data";
import { cn } from "@/lib/utils";

const ranges = [
  { key: "7d", label: "7 days" },
  { key: "30d", label: "30 days" },
] as const;

export function VisitsChartCard({ className }: { className?: string }) {
  const [range, setRange] = useState<(typeof ranges)[number]["key"]>("30d");
  const data =
    range === "7d" ? visitsLast30Days.slice(-7) : visitsLast30Days;

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <CardTitle>Website Visits</CardTitle>
            <CardDescription>
              {range === "7d" ? "Last 7 days" : "Last 30 days"} · daily unique
              visits
            </CardDescription>
          </div>
          <div
            className="flex rounded-lg border border-white/10 bg-white/5 p-0.5"
            role="tablist"
            aria-label="Chart range"
          >
            {ranges.map((option) => (
              <button
                key={option.key}
                type="button"
                role="tab"
                aria-selected={range === option.key}
                onClick={() => setRange(option.key)}
                className={cn(
                  "rounded-md px-3 py-1 text-xs font-medium transition-colors",
                  range === option.key
                    ? "bg-white/10 text-white"
                    : "text-zinc-500 hover:text-zinc-300",
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <LineChart data={data} className="h-60 w-full" />
      </CardContent>
    </Card>
  );
}
