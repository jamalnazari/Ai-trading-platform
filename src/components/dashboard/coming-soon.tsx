import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonClasses } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export interface ComingSoonProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  version: string;
  description: string;
  capabilities: string[];
}

/**
 * Shared placeholder for reserved future modules (AI Assistant, Trading
 * Memory, Price Alerts, Trading Agent, Broker Connections). When a module
 * ships, replace the import in its page file with the real page — the
 * route, navigation item and layout need no changes.
 */
export function ComingSoon({
  title,
  icon: Icon,
  version,
  description,
  capabilities,
}: ComingSoonProps) {
  return (
    <div className="flex justify-center px-4 py-12 md:py-20">
      <Card className="flex w-full max-w-xl flex-col items-center gap-6 p-8 text-center md:p-12">
        <span className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <Icon className="size-6 text-zinc-400" aria-hidden />
        </span>

        <div className="flex flex-col items-center gap-3">
          <Badge variant="soon">
            {version} · On the roadmap
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50">
            Coming Soon
          </h2>
          <p className="text-sm text-zinc-500">{title}</p>
        </div>

        <p className="max-w-md text-pretty text-sm leading-relaxed text-zinc-400">
          {description}
        </p>

        <ul className="w-full flex flex-col gap-2.5 text-left">
          {capabilities.map((capability) => (
            <li
              key={capability}
              className="flex items-start gap-3 rounded-xl border border-white/6 bg-white/[0.02] px-4 py-3 text-sm text-zinc-300"
            >
              <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
              {capability}
            </li>
          ))}
        </ul>

        <Link
          href="/#roadmap"
          className={buttonClasses({ variant: "outline", size: "md" })}
        >
          View the roadmap
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </Card>
    </div>
  );
}
