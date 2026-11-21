import { Mail } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { GithubIcon, LinkedInIcon, XIcon } from "@/components/ui/brand-icons";
import { SectionHeading } from "./section-heading";

const socials = [
  { label: "GitHub", icon: GithubIcon, href: "https://github.com" },
  { label: "X (Twitter)", icon: XIcon, href: "https://x.com" },
  { label: "LinkedIn", icon: LinkedInIcon, href: "https://linkedin.com" },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-white/6">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Contact"
          title="Talk to us"
          lede="Questions about the roadmap, the journal, or early access? We read everything."
        />

        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-white/8 bg-surface p-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-sm text-zinc-400">
              Reach the team directly — typical response within one business
              day.
            </p>
            <a
              href="mailto:hello@traderinsight.app"
              className={buttonClasses({ variant: "primary", size: "md" })}
            >
              <Mail className="size-4" aria-hidden />
              hello@traderinsight.app
            </a>
            <div className="flex items-center gap-3 pt-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-white/25 hover:text-white"
                >
                  <social.icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
