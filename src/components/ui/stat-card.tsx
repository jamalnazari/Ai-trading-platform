import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "./card";

export interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  delta?: string;
  deltaTone?: "up" | "down" | "neutral";
  footnote?: string;
  /** Optional trailing visual, e.g. a sparkline. */
  children?: React.ReactNode;
  className?: string;
}

export function StatCard({
  label,
  value,
  icon: Icon,
  delta,
  deltaTone = "neutral",
  footnote,
  children,
  className,
}: StatCardProps) {
  return (
    <Card className={cn("flex flex-col gap-4 p-5", className)}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-zinc-400">
            <Icon className="size-4.5" aria-hidden />
          </span>
          <span className="text-sm font-medium text-zinc-400">{label}</span>
        </div>
        {delta ? (
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-[11px] font-medium tabular-nums",
              deltaTone === "up" && "bg-accent/15 text-blue-300",
              deltaTone === "down" && "bg-white/8 text-zinc-400",
              deltaTone === "neutral" && "bg-white/8 text-zinc-400",
            )}
          >
            {delta}
          </span>
        ) : null}
      </div>
      <div className="text-3xl font-semibold tracking-tight text-zinc-50 tabular-nums">
        {value}
      </div>
      {footnote ? (
        <p className="text-xs text-zinc-600">{footnote}</p>
      ) : null}
      {children ? <div className="mt-auto">{children}</div> : null}
    </Card>
  );
}
