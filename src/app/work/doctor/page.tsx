"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import SchedulerMockup from "@/components/ui/SchedulerMockup";

export default function DoctorCaseStudy() {
  return (
    <div className="bg-background text-foreground min-h-screen pt-32 pb-24 selection:bg-accent selection:text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-12 group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Work
        </Link>

        {/* Hero Header */}
        <div className="max-w-4xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
            Healthcare & Medical
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif tracking-tight text-foreground mb-8">
            Dr. Callaway: Cultivating instant patient trust.
          </h1>
          <p className="text-lg md:text-xl text-muted font-light leading-relaxed">
            A premium editorial digital profile and scheduling platform designed to replace cold clinical portals with warmth, professionalism, and seamless booking.
          </p>
        </div>

        {/* Project Meta Table */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border-custom mb-20 text-sm">
          <div>
            <span className="text-muted block mb-1">Role</span>
            <span className="font-medium text-foreground">UI/UX Designer & Frontend Engineer</span>
          </div>
          <div>
            <span className="text-muted block mb-1">Timeline</span>
            <span className="font-medium text-foreground">3 Months (2025)</span>
          </div>
          <div>
            <span className="text-muted block mb-1">Tech Stack</span>
            <span className="font-medium text-foreground">Next.js, Tailwind, Date-fns, Framer Motion</span>
          </div>
          <div>
            <span className="text-muted block mb-1">Client</span>
            <span className="font-medium text-foreground">Dr. Callaway Practice Ltd.</span>
          </div>
        </div>

        {/* Big Mockup Showcase */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border-custom bg-black/[0.02] shadow-2xl mb-24">
          <Image
            src="/images/doctor.png"
            alt="Doctor Portal Mockup"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Case Study Editorial Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24">
          
          {/* Left Column: Anchor */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <h2 className="text-2xl font-serif text-foreground mb-2">01 / Concept</h2>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-6">
              Problem & Research
            </span>
          </div>

          {/* Right Column: Copy */}
          <div className="lg:col-span-8 flex flex-col gap-6 text-muted font-light leading-relaxed">
            <h3 className="text-2xl font-serif text-foreground mb-2 font-medium">Overcoming Clinical Anxiety</h3>
            <p>
              Most healthcare platforms are functional but feel cold and impersonal. They treat patients as catalog entries rather than people seeking care. When a patient visits a medical site, they are often already stressed or anxious; a clunky interface compounds this friction.
            </p>
            <p>
              Research showed that 84% of patients research a practitioner's online bio, reviews, and clinical philosophy before booking. However, standard healthcare landing pages bury this bio content beneath cluttered navigation and stock photography.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24 border-t border-border-custom pt-16">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <h2 className="text-2xl font-serif text-foreground mb-2">02 / Architecture</h2>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-6">
              Strategy & Wireframes
            </span>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6 text-muted font-light leading-relaxed">
            <h3 className="text-2xl font-serif text-foreground mb-2 font-medium">Warm Editorial Layouts</h3>
            <p>
              The strategy was to build a warm, minimalist digital portrait. We paired premium editorial serif typography with a soft off-white background to emulate high-end print design.
            </p>
            <p>
              The layout flow puts the doctor’s philosophy and credentials front-and-center, using huge whitespace to set a calm, respectful tone. The booking scheduler is integrated inline, appearing naturally as the next step after the patient reads the profile.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24 border-t border-border-custom pt-16">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <h2 className="text-2xl font-serif text-foreground mb-2">03 / Implementation</h2>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-6">
              UI Design & Dev
            </span>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6 text-muted font-light leading-relaxed">
            <h3 className="text-2xl font-serif text-foreground mb-2 font-medium">Building an Accessible Scheduler</h3>
            <p>
              For design, we used a warm palette (soft linen beige and dark ink charcoal) combined with elegant serif typography. The patient scheduling system required custom development: it had to feel responsive, fast, and fully accessible to older users.
            </p>
            <p>
              I engineered a custom state-based calendar scheduler in React, powered by `date-fns` for robust date math. The scheduling component communicates asynchronously with booking APIs, rendering slot selections and animations smoothly while maintaining keyboard navigate focus states.
            </p>
            <SchedulerMockup />
          </div>
        </div>

        {/* Section 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32 border-t border-border-custom pt-16">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <h2 className="text-2xl font-serif text-foreground mb-2">04 / Impact</h2>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-6">
              Outcome & Success
            </span>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-8">
            <h3 className="text-2xl font-serif text-foreground font-medium">Operational Efficiency</h3>
            <p className="text-muted font-light leading-relaxed">
              The redesigned website transformed Dr. Callaway’s client pipeline. Online patient bookings increased by 60% within the first month. Administrative staff reported saving 20 hours per week in patient intake phone calls.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="border border-border-custom bg-black/[0.01] rounded-xl p-6">
                <span className="text-4xl md:text-5xl font-serif font-bold text-foreground block mb-1">+60%</span>
                <span className="text-xs text-muted uppercase tracking-widest">Online Bookings</span>
              </div>
              <div className="border border-border-custom bg-black/[0.01] rounded-xl p-6">
                <span className="text-4xl md:text-5xl font-serif font-bold text-foreground block mb-1">20 hrs</span>
                <span className="text-xs text-muted uppercase tracking-widest">Weekly Staff Time Saved</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Panel */}
        <div className="border border-border-custom bg-black/[0.01] rounded-2xl p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-serif text-foreground tracking-tight mb-3">
              Explore the implementation
            </h3>
            <p className="text-sm text-muted font-light leading-relaxed">
              Review the design structure or check the live practice scheduling portal.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <MagneticButton className="flex items-center gap-2 group cursor-pointer">
                Live Demo
                <ExternalLink className="w-4 h-4" />
              </MagneticButton>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium tracking-wide hover:text-foreground text-muted transition-colors duration-300 flex items-center gap-1.5 py-2 group cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
