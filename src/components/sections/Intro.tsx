"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "../ui/FadeIn";

export default function Intro() {
  return (
    <section className="py-24 md:py-36 border-t border-border-custom bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <FadeIn>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted block sticky top-28">
                The Philosophy
              </span>
            </FadeIn>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-8">
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-serif leading-snug text-foreground max-w-3xl">
                I design and engineer web interfaces that remove business friction and establish immediate professional trust.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl font-light">
                A premium digital presence is not decorative; it is an active advocate for your craft. By pairing strict visual restraint, high-end typography scales, and modular frontend code, I build web experiences that command authority and convert interest into conversion.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="text-sm font-medium tracking-wide hover:text-accent transition-colors duration-300 flex items-center gap-1 group py-2 cursor-pointer"
                >
                  Learn More About Me
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
