"use client";

import Link from "next/link";
import MagneticButton from "../ui/MagneticButton";
import FadeIn from "../ui/FadeIn";

export default function CTA() {
  return (
    <section className="py-32 md:py-48 border-t border-border-custom bg-background flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-widest text-muted">
              Have a project in mind?
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-serif tracking-tight leading-[1.05] text-foreground">
              Let’s build something <span className="italic font-normal">unforgettable.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base md:text-lg text-muted max-w-xl font-light leading-relaxed mb-6">
              Currently accepting select projects. Get in touch to discuss how we can position your business as a market leader.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link href="/contact">
              <MagneticButton className="px-10 py-5 text-base">Get in Touch</MagneticButton>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
