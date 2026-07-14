import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "My Story & Philosophy — Koushik",
  description: "About Koushik: a designer-engineer hybrid crafting digital experiences that position brands as industry authorities.",
};

const values = [
  {
    title: "Craftsmanship",
    desc: "Every pixel, line of code, and typographic scale is chosen with intent. No template copy-pasting.",
  },
  {
    title: "Clarity over Decoration",
    desc: "If a design element doesn’t support the user flow or improve user trust, it doesn’t belong on the page.",
  },
  {
    title: "Integrity & Trust",
    desc: "I operate with extreme transparency. I partner directly with founders; there are no account managers or layers of communication.",
  },
  {
    title: "Engineering Speed",
    desc: "Performance is a feature. High speed builds instant subconscious trust and directly improves conversion rates.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-widest text-muted block mb-4">
              About Koushik
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-foreground mb-8">
              Obsessed with <span className="italic font-normal">details</span>, driven by business
              results.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted font-light leading-relaxed">
              I bridge the gap between design thinking and high-end frontend architecture. By
              operating as a single unit, I remove translation friction and deliver digital assets
              that perform.
            </p>
          </FadeIn>
        </div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32 border-t border-border-custom pt-16">
          <div className="lg:col-span-4">
            <FadeIn>
              <h2 className="text-2xl font-serif text-foreground font-semibold uppercase tracking-wider mb-4">
                My Mission
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <span className="text-xs font-mono text-muted uppercase tracking-widest block mb-6">
                Establishing Authority
              </span>
            </FadeIn>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-8">
            <FadeIn delay={0.15}>
              <h3 className="text-xl md:text-3xl font-serif text-foreground leading-snug">
                "A website shouldn't just exist. It must actively advocate for your business."
              </h3>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-muted leading-relaxed font-light">
                Most startup sites fail not because their product is bad, but because their website
                fails to establish immediate professional trust. An amateur layout, slow loading
                speeds, and disjointed visual rhythm signal an amateur product.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="text-muted leading-relaxed font-light">
                My mission is to help ambitious founders establish instant authority. I build digital
                spaces that reflect the same level of care, speed, and premium quality that you put
                into your own product or service.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* The Mindset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32 border-t border-border-custom pt-16">
          <div className="lg:col-span-4">
            <FadeIn>
              <h2 className="text-2xl font-serif text-foreground font-semibold uppercase tracking-wider mb-4">
                How I Think
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <span className="text-xs font-mono text-muted uppercase tracking-widest block mb-6">
                The Design-Engineer Hybrid
              </span>
            </FadeIn>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-6 text-muted font-light leading-relaxed">
            <FadeIn delay={0.15}>
              <p>
                I believe design and engineering should not live in isolation. When they do, designs
                get watered down in implementation, or developer constraints compromise visual elegance.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>
                As a designer-engineer, I design with a deep understanding of browser limitations,
                serverless APIs, and layout performance. I write code with a designer’s obsession for
                typography hierarchy, whitespace rhythms, and interactive motion micro-details.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32 border-t border-border-custom pt-16">
          <div className="lg:col-span-4">
            <FadeIn>
              <h2 className="text-2xl font-serif text-foreground font-semibold uppercase tracking-wider mb-4">
                Capabilities
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <span className="text-xs font-mono text-muted uppercase tracking-widest block mb-6">
                Core Disciplines
              </span>
            </FadeIn>
            
            {/* Cultural / Languages */}
            <div className="mt-8 border-t border-border-custom/50 pt-6 hidden lg:block">
              <FadeIn delay={0.2}>
                <span className="text-xs font-semibold uppercase tracking-widest text-muted block mb-3">
                  Languages
                </span>
                <p className="text-sm font-light text-muted leading-relaxed">
                  English, Kannada, Hindi, Tulu, Japanese (Learning)
                </p>
              </FadeIn>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn delay={0.15}>
                <div className="flex flex-col gap-4">
                  <h3 className="font-serif text-lg font-medium text-foreground border-b border-border-custom/50 pb-2">
                    Design & UX
                  </h3>
                  <ul className="text-muted text-sm font-light flex flex-col gap-2.5 leading-relaxed">
                    <li>Interface Systems Design</li>
                    <li>Interaction & Motion Design</li>
                    <li>Typography & Layout Easing</li>
                    <li>Responsive Spacing Systems</li>
                    <li>Information Architecture</li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="flex flex-col gap-4">
                  <h3 className="font-serif text-lg font-medium text-foreground border-b border-border-custom/50 pb-2">
                    Engineering
                  </h3>
                  <ul className="text-muted text-sm font-light flex flex-col gap-2.5 leading-relaxed">
                    <li>React & Next.js Architecture</li>
                    <li>TypeScript Component Design</li>
                    <li>Kinetic Micro-Interactions (Framer Motion)</li>
                    <li>Core Web Vitals Optimization</li>
                    <li>Secure API Integrations</li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.25}>
                <div className="flex flex-col gap-4">
                  <h3 className="font-serif text-lg font-medium text-foreground border-b border-border-custom/50 pb-2">
                    Product Strategy
                  </h3>
                  <ul className="text-muted text-sm font-light flex flex-col gap-2.5 leading-relaxed">
                    <li>Product MVP Prioritization</li>
                    <li>User Journey Mapping</li>
                    <li>Data & Conversion Cleaning (SQL)</li>
                    <li>Requirement Gathering & Docs</li>
                    <li>CRM & Client Relations</li>
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Mobile Languages */}
            <div className="mt-8 border-t border-border-custom/50 pt-6 block lg:hidden">
              <FadeIn>
                <span className="text-xs font-semibold uppercase tracking-widest text-muted block mb-2">
                  Languages
                </span>
                <p className="text-sm font-light text-muted">
                  English, Kannada, Hindi, Tulu, Japanese (Learning)
                </p>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="border-t border-border-custom pt-16 mb-32">
          <div className="max-w-2xl mb-16">
            <FadeIn>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted block mb-4">
                Operational Standards
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground">Core Values</h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, index) => (
              <FadeIn key={val.title} delay={index * 0.1}>
                <div
                  className="flex flex-col gap-3 p-6 bg-black/[0.01] border border-border-custom/50 rounded-xl h-full"
                >
                  <h3 className="font-serif text-xl font-medium text-foreground">{val.title}</h3>
                  <p className="text-muted text-sm font-light leading-relaxed">{val.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* About CTA Banner */}
        <FadeIn>
          <div className="bg-[#0B0B0B] text-[#F8F8F5] rounded-2xl p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tight mb-3">
                Want to see how this translates into practice?
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Explore my structured, eight-stage project pipeline. From discovery to continuous
                launch support, I make premium outcomes predictable.
              </p>
            </div>
            <Link href="/process" className="flex-shrink-0 block">
              <MagneticButton className="bg-[#F8F8F5] text-[#0B0B0B] hover:bg-[#E6E6DF] flex items-center gap-2 group cursor-pointer">
                Explore My Process
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
