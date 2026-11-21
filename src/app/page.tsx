import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { Features } from "@/components/site/features";
import { Pricing } from "@/components/site/pricing";
import { Roadmap } from "@/components/site/roadmap";
import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/site-footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Features />
        <Pricing />
        <Roadmap />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
