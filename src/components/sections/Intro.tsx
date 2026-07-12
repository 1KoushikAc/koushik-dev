"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Intro() {
  return (
    <section className="py-24 md:py-36 border-t border-border-custom bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted block sticky top-28">
              The Philosophy
            </span>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-8">
            <h2 className="text-3xl md:text-5xl font-serif leading-snug text-foreground max-w-3xl">
              I don’t just build websites. I resolve business friction through design, technology, and strategic user experience.
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl font-light">
              Many developers code blindly from templates, and many designers create layouts that are pretty but fail to convert. I bridge that gap. By combining high-end typography, visual rhythm, and clean, modular engineering, I build digital assets that establish immediate trust with your prospective clients.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="text-sm font-medium tracking-wide hover:text-accent transition-colors duration-300 flex items-center gap-1 group py-2 cursor-pointer"
              >
                Learn More About Me
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
