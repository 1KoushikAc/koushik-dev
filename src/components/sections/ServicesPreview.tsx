"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "../ui/FadeIn";

const services = [
  {
    num: "01",
    title: "Startup Websites",
    desc: "Bespoke marketing engines designed to explain complex tech products and establish immediate credibility.",
  },
  {
    num: "02",
    title: "Landing Pages",
    desc: "High-converting single pages crafted for product launches, marketing campaigns, or direct response sales funnels.",
  },
  {
    num: "03",
    title: "Website Redesigns",
    desc: "Transforming outdated or underperforming legacy platforms into modern, premium visual experiences that convert.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-36 border-t border-border-custom bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <FadeIn>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-muted block mb-4">
                  Services Overview
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">
                  How I Help Businesses Grow
                </h2>
              </div>
            </FadeIn>
            <div className="hidden lg:block">
              <FadeIn delay={0.15}>
                <Link
                  href="/services"
                  className="text-sm font-medium tracking-wide hover:text-accent transition-colors duration-300 flex items-center gap-1 group py-2 cursor-pointer"
                >
                  View Services Detail
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </FadeIn>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex flex-col border-t border-border-custom">
              {services.map((service, index) => (
                <FadeIn key={service.num} delay={index * 0.1}>
                  <div
                    className="py-8 border-b border-border-custom grid grid-cols-1 md:grid-cols-12 gap-4 items-start group/row transition-all duration-300 hover:pl-4 hover:border-accent/30"
                  >
                    <div className="md:col-span-1 text-sm font-mono text-muted group-hover/row:text-accent transition-colors duration-300">{service.num}</div>
                    <div className="md:col-span-4 font-serif text-xl md:text-2xl text-foreground font-medium group-hover/row:text-accent transition-colors duration-300">
                      {service.title}
                    </div>
                    <div className="md:col-span-7 text-muted text-sm md:text-base font-light leading-relaxed group-hover/row:text-foreground transition-colors duration-300">
                      {service.desc}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="block lg:hidden mt-4">
              <FadeIn>
                <Link
                  href="/services"
                  className="text-sm font-medium tracking-wide hover:text-accent transition-colors duration-300 flex items-center gap-1 group py-2 cursor-pointer"
                >
                  View Services Detail
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
