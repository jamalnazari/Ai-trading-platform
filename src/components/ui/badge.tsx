import { cn } from "@/lib/utils";

export type BadgeVariant = "neutral" | "accent" | "outline" | "soon";

const variantClasses: Record<BadgeVariant, string> = {
  neutral: "bg-white/8 text-zinc-300",
  accent: "bg-accent/15 text-blue-300",
  outline: "border border-white/12 text-zinc-400",
  soon:
    "border border-dashed border-white/15 text-zinc-500 bg-transparent",
};

export function Badge({
  variant = "neutral",
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium whitespace-nowrap",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}

const statusStyles: Record<string, { label: string; variant: BadgeVariant }> = {
  active: { label: "Active", variant: "accent" },
  invited: { label: "Invited", variant: "outline" },
  suspended: { label: "Suspended", variant: "neutral" },
};

export function StatusBadge({ status }: { status: string }) {
  const config = statusStyles[status] ?? { label: status, variant: "outline" as BadgeVariant };
  return <Badge variant={config.variant}>{config.label}</Badge>;
}
