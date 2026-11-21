import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      <span className="text-xs font-medium tracking-widest text-accent uppercase">
        {eyebrow}
      </span>
      <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance text-zinc-50 md:text-4xl">
        {title}
      </h2>
      {lede ? (
        <p className={cn("max-w-2xl text-base text-zinc-400 md:text-lg", align === "center" && "text-pretty")}>
          {lede}
        </p>
      ) : null}
    </div>
  );
}
