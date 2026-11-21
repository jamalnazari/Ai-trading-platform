import { ShieldCheck, Target, Compass } from "lucide-react";
import { SectionHeading } from "./section-heading";

const principles = [
  {
    icon: Target,
    title: "Journal first",
    description:
      "Every feature starts from the trading journal — the single source of truth for your decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Your data, your edge",
    description:
      "Your trade history and notes belong to you. Privacy is a feature, not a setting.",
  },
  {
    icon: Compass,
    title: "Roadmap driven",
    description:
      "We ship focused versions. AI, alerts and agents arrive as native modules, not bolt-ons.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-white/6">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <SectionHeading
            align="left"
            eyebrow="About"
            title="Built by traders, for traders"
            lede="Trader Insight exists because most traders don't have a performance problem — they have a review problem. Version 1 gives you the quiet, focused workspace to fix that: a journal, your statements, and honest analytics."
          />

          <ul className="flex flex-col gap-4">
            {principles.map((principle) => (
              <li
                key={principle.title}
                className="flex gap-4 rounded-2xl border border-white/8 bg-surface p-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-white/5 text-zinc-300">
                  <principle.icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {principle.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                    {principle.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
