import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";import { buttonClasses } from "@/components/ui/button";
import { DashboardPreview } from "./dashboard-preview";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden scroll-mt-16">
      {/* faint top glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-white/[0.04] to-transparent"
      />

      <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 md:pt-40">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-zinc-400">
            <Sparkles className="size-3.5 text-accent" aria-hidden />
            AI-ready trading journal · Version 1
          </span>

          <h1 className="text-4xl font-semibold tracking-tighter text-balance text-zinc-50 sm:text-5xl md:text-6xl">
            Analyze Your Trading{" "}
            <span className="bg-gradient-to-b from-zinc-50 to-zinc-500 bg-clip-text text-transparent">
              Like a Professional
            </span>
          </h1>

          <p className="max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 md:text-lg">
            A personal trading journal platform designed for traders. Track
            your performance. Understand your mistakes. Improve consistently.
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/login"
              className={buttonClasses({ size: "lg" })}
            >
              Get Started
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href="/#features"
              className={buttonClasses({ variant: "outline", size: "lg" })}
            >
              Explore features
            </Link>
          </div>

          <p className="text-xs text-zinc-600">
            Version 1 focuses on journaling &amp; analytics — AI modules are
            on the roadmap.
          </p>
        </div>

        <DashboardPreview />
      </div>
    </section>
  );
}
