"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

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
          <span className="text-xs font-semibold uppercase tracking-widest text-muted block mb-4">
            About Koushik
          </span>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-foreground mb-8">
            Obsessed with <span className="italic font-normal">details</span>, driven by business
            results.
          </h1>
          <p className="text-lg md:text-xl text-muted font-light leading-relaxed">
            I bridge the gap between design thinking and high-end frontend architecture. By
            operating as a single unit, I remove translation friction and deliver digital assets
            that perform.
          </p>
        </div>

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32 border-t border-border-custom pt-16">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-serif text-foreground font-semibold uppercase tracking-wider mb-4">
              My Mission
            </h2>
            <span className="text-xs font-mono text-muted uppercase tracking-widest block mb-6">
              Establishing Authority
            </span>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-8">
            <h3 className="text-xl md:text-3xl font-serif text-foreground leading-snug">
              "A website shouldn't just exist. It must actively advocate for your business."
            </h3>
            <p className="text-muted leading-relaxed font-light">
              Most startup sites fail not because their product is bad, but because their website
              fails to establish immediate professional trust. An amateur layout, slow loading
              speeds, and disjointed visual rhythm signal an amateur product.
            </p>
            <p className="text-muted leading-relaxed font-light">
              My mission is to help ambitious founders establish instant authority. I build digital
              spaces that reflect the same level of care, speed, and premium quality that you put
              into your own product or service.
            </p>
          </div>
        </div>

        {/* The Mindset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32 border-t border-border-custom pt-16">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-serif text-foreground font-semibold uppercase tracking-wider mb-4">
              How I Think
            </h2>
            <span className="text-xs font-mono text-muted uppercase tracking-widest block mb-6">
              The Design-Engineer Hybrid
            </span>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-6 text-muted font-light leading-relaxed">
            <p>
              I believe design and engineering should not live in isolation. When they do, designs
              get watered down in implementation, or developer constraints compromise visual elegance.
            </p>
            <p>
              As a designer-engineer, I design with a deep understanding of browser limitations,
              serverless APIs, and layout performance. I write code with a designer’s obsession for
              typography hierarchy, whitespace rhythms, and interactive motion micro-details.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="border-t border-border-custom pt-16 mb-32">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted block mb-4">
              Operational Standards
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val) => (
              <div
                key={val.title}
                className="flex flex-col gap-3 p-6 bg-black/[0.01] border border-border-custom/50 rounded-xl"
              >
                <h3 className="font-serif text-xl font-medium text-foreground">{val.title}</h3>
                <p className="text-muted text-sm font-light leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About CTA Banner */}
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
          <Link href="/process" className="flex-shrink-0">
            <MagneticButton className="bg-[#F8F8F5] text-[#0B0B0B] hover:bg-[#E6E6DF] flex items-center gap-2 group cursor-pointer">
              Explore My Process
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
