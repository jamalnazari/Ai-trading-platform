import { cn } from "@/lib/utils";

/** Avatar with deterministic initials — no images required. */
export function Avatar({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const label = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join("");
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/8 text-[11px] font-medium text-zinc-300 select-none",
        className,
      )}
    >
      {label}
    </span>
  );
}
