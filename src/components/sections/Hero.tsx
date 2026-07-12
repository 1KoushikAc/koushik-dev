"use client";

import MagneticButton from "../ui/MagneticButton";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted mb-6 block">
            Creative Director & Designer-Engineer
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif tracking-tight leading-[1.05] text-foreground mb-8">
            I craft digital systems that turn <span className="italic font-normal">ambition</span> into authority.
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-12 font-light">
            My name is Koushik. I design and build premium web experiences for startups, founders, and high-growth companies. No templates. Just performance-driven craftsmanship.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/contact">
              <MagneticButton>Start a Project</MagneticButton>
            </Link>
            <Link
              href="/work"
              className="text-sm font-medium tracking-wide hover:text-accent transition-colors duration-300 flex items-center gap-1 group py-2 cursor-pointer"
            >
              View Selected Work
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
