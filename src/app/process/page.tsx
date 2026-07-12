"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import FadeIn from "@/components/ui/FadeIn";

const processSteps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Understanding the core business challenges, user target personas, competitive landscape, and key metrics. We establish the goal: what does a successful launch accomplish?",
    deliverables: "Discovery brief, project objectives checklist, defined success metrics.",
  },
  {
    num: "02",
    title: "Research",
    desc: "Deep analysis of market trends, reference benchmarks, and user psychology. We study what high-end founders expect and how to differentiate your brand.",
    deliverables: "Design inspiration board, UX structure references, benchmark report.",
  },
  {
    num: "03",
    title: "Planning",
    desc: "Structuring the page architecture, layout rhythm, and user flow maps. We define every single page and content section to maximize sales funnel conversion.",
    deliverables: "Sitemap diagram, user flow chart, content hierarchy blueprint.",
  },
  {
    num: "04",
    title: "Design",
    desc: "Crafting beautiful high-fidelity mockups. Focus is on elite typography, custom visuals, dynamic animations concept, and premium editorial layout compositions.",
    deliverables: "Interactive Figma prototype, design system tokens, assets library.",
  },
  {
    num: "05",
    title: "Development",
    desc: "Engineering the custom layout in Next.js, React, and Tailwind CSS. Clean, semantic code built with absolute precision. Responsive, pixel-perfect translation of designs.",
    deliverables: "Next.js codebase repository, clean responsive layouts, micro-animations.",
  },
  {
    num: "06",
    title: "Testing",
    desc: "Validating across all screen sizes, browsers, and platforms. Performance checks are run to ensure 95+ Lighthouse scores, fast load speeds, and clean console logs.",
    deliverables: "Performance audit report, cross-browser compatibility checklist.",
  },
  {
    num: "07",
    title: "Launch",
    desc: "Deploying the production build on premium serverless hosting (Vercel / Netlify). Setting up custom domains, SSL certificates, analytics tracking, and basic SEO meta tags.",
    deliverables: "Live production website, search engine index submission, Vercel setup.",
  },
  {
    num: "08",
    title: "Support",
    desc: "Monitoring site metrics post-launch and providing regular conversion checks. Iterative design changes and support packages to ensure long-term stability and growth.",
    deliverables: "Analytics report, ongoing optimization advice, priority support.",
  },
];

export default function ProcessPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 22 });

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-widest text-muted block mb-4">
              My Process
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-foreground mb-8">
              The Blueprint: <span className="italic font-normal">How</span> we get there.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted font-light leading-relaxed">
              Premium websites are not made by accident. I follow a rigorous, eight-stage methodology that combines deep strategic research, editorial design craftsmanship, and modular software engineering.
            </p>
          </FadeIn>
        </div>

        {/* Timeline List */}
        <div ref={containerRef} className="flex flex-col gap-12 mb-32 relative">
          {/* Vertical line indicator */}
          <div className="absolute left-[17px] top-4 bottom-4 w-[1px] bg-border-custom hidden lg:block" />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-[17px] top-4 bottom-4 w-[1px] bg-accent hidden lg:block"
          />

          {processSteps.map((step, index) => (
            <FadeIn key={step.num} delay={index * 0.05}>
              <div
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative pl-0 lg:pl-16 group py-8 border-b border-border-custom/40 last:border-b-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-3 top-[38px] w-2.5 h-2.5 rounded-full border border-accent bg-background group-hover:bg-accent transition-colors duration-300 hidden lg:block z-10" />

                <div className="lg:col-span-1 text-sm font-mono text-muted flex items-center gap-2">
                  <span>{step.num}</span>
                  <span className="h-[1px] w-6 bg-border-custom lg:hidden" />
                </div>

                <div className="lg:col-span-4">
                  <h2 className="text-2xl font-serif text-foreground font-medium mb-3">
                    {step.title}
                  </h2>
                  <p className="text-muted text-sm md:text-base leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="lg:col-span-6 lg:col-start-7 bg-black/[0.015] border border-border-custom/50 rounded-xl p-6">
                  <span className="text-xs uppercase tracking-widest text-muted font-semibold block mb-2">
                    Key Output
                  </span>
                  <p className="text-sm font-medium text-foreground leading-relaxed">
                    {step.deliverables}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Process CTA Banner */}
        <div className="border border-border-custom rounded-2xl p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-serif text-foreground tracking-tight mb-3">
              Ready to begin the discovery phase?
            </h3>
            <p className="text-sm text-muted font-light leading-relaxed">
              We begin every project with a 30-minute discovery call to map out goals, target audience expectation, and align on scope. No obligation, pure value.
            </p>
          </div>
          <Link href="/contact" className="flex-shrink-0">
            <MagneticButton className="cursor-pointer">Book a Discovery Call</MagneticButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
