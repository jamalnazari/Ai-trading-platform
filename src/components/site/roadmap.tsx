import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

interface RoadmapVersion {
  version: string;
  status: string;
  statusVariant: "accent" | "outline" | "soon";
  title: string;
  items: string[];
  live?: boolean;
}

const versions: RoadmapVersion[] = [
  {
    version: "Version 1",
    status: "Live now",
    statusVariant: "accent",
    title: "Foundations",
    live: true,
    items: ["Trading Journal", "Statement Upload", "Dashboard"],
  },
  {
    version: "Version 2",
    status: "Planned",
    statusVariant: "outline",
    title: "AI Analysis",
    items: ["Trade pattern detection", "Bias & risk review"],
  },
  {
    version: "Version 3",
    status: "Planned",
    statusVariant: "outline",
    title: "Price Monitoring",
    items: ["Price charts", "Custom alerts"],
  },
  {
    version: "Version 4",
    status: "Exploring",
    statusVariant: "soon",
    title: "Trading Agent",
    items: ["Autonomous review agent", "Broker connections"],
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="scroll-mt-16 border-t border-white/6">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Roadmap"
          title="Built in the open, version by version"
          lede="Each release stands on its own and is useful on day one. Nothing is redesigned to add what comes next."
        />

        <div className="relative mt-16">
          {/* connector line (desktop) */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-[5px] hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block"
          />

          <ol className="grid gap-10 md:grid-cols-4 md:gap-4">
            {versions.map((entry) => (
              <li key={entry.version} className="relative">
                <span
                  aria-hidden
                  className={cn(
                    "mb-6 block size-3 rounded-full",
                    entry.live ? "bg-accent" : "bg-white/25",
                  )}
                />
                <div
                  className={cn(
                    "flex h-full flex-col gap-4 rounded-2xl border p-6",
                    entry.live
                      ? "border-accent/40 bg-surface"
                      : "border-white/8 bg-surface",
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-medium tracking-wider text-zinc-500 uppercase">
                      {entry.version}
                    </span>
                    <Badge variant={entry.statusVariant}>{entry.status}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-100">
                    {entry.title}
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {entry.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-zinc-400"
                      >
                        <Check
                          className={cn(
                            "mt-0.5 size-4 shrink-0",
                            entry.live ? "text-accent" : "text-zinc-600",
                          )}
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
