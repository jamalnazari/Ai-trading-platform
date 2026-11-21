import {
  Bell,
  BookOpen,
  Bot,
  FileUp,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Badge } from "@/components/ui/badge";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
}

const features: Feature[] = [
  {
    icon: BookOpen,
    title: "Trading Journal",
    description:
      "Log every trade with entries, exits, size and notes. A structured record of every decision you make.",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description:
      "Win rate, drawdown, expectancy and equity curve — the metrics professionals actually watch.",
  },
  {
    icon: FileUp,
    title: "Statement Upload",
    description:
      "Drop in your broker statements and let the platform organize your history automatically.",
  },
  {
    icon: Sparkles,
    title: "AI Ready",
    description:
      "The data model and UI are prepared for AI analysis from day one — no redesign needed later.",
    badge: "Coming soon",
  },
  {
    icon: Bell,
    title: "Price Alerts",
    description:
      "Set watchlists and get notified when instruments hit the levels that matter to your plan.",
    badge: "Future",
  },
  {
    icon: Bot,
    title: "Agent Assistant",
    description:
      "A trading agent that reviews your journal and suggests improvements — reserved on the roadmap.",
    badge: "Future",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-16 border-t border-white/6">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Features"
          title="Everything a serious trader needs"
          lede="Version 1 ships with the journal core. The architecture already reserves space for AI, alerts and agents — so the product grows without growing pains."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col gap-4 rounded-2xl border border-white/8 bg-surface p-6 transition-colors hover:border-white/15"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-xl border border-white/8 bg-white/5 text-zinc-300 transition-colors group-hover:text-accent">
                  <feature.icon className="size-5" aria-hidden />
                </span>
                {feature.badge ? (
                  <Badge variant="soon">{feature.badge}</Badge>
                ) : null}
              </div>
              <div>
                <h3 className="text-base font-semibold text-zinc-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
