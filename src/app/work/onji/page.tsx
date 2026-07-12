"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function OnjiCaseStudy() {
  return (
    <div className="bg-[#0B0B0B] text-[#F8F8F5] min-h-screen pt-32 pb-24 selection:bg-accent selection:text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-12 group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Work
        </Link>

        {/* Hero Header */}
        <div className="max-w-4xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
            Fintech & Payments
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif tracking-tight text-white mb-8">
            ONJI: Reimagining the friction of peer-to-peer transfers.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            A high-fidelity payment interface designed to bring transparency, ease of use, and modern visual delight to cross-border fiat and digital asset transactions.
          </p>
        </div>

        {/* Project Meta Table */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-800 mb-20 text-sm">
          <div>
            <span className="text-gray-500 block mb-1">Role</span>
            <span className="font-medium text-white">Lead Product Designer & Frontend Architect</span>
          </div>
          <div>
            <span className="text-gray-500 block mb-1">Timeline</span>
            <span className="font-medium text-white">4 Months (2026)</span>
          </div>
          <div>
            <span className="text-gray-500 block mb-1">Tech Stack</span>
            <span className="font-medium text-white">Next.js, Tailwind, Framer Motion</span>
          </div>
          <div>
            <span className="text-gray-500 block mb-1">Client</span>
            <span className="font-medium text-white">ONJI Labs Inc.</span>
          </div>
        </div>

        {/* Big Mockup Showcase */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl mb-24">
          <Image
            src="/images/onji.png"
            alt="ONJI Dashboard Mockup"
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
            <h2 className="text-2xl font-serif text-white mb-2">01 / Concept</h2>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-6">
              Problem & Research
            </span>
          </div>

          {/* Right Column: Copy */}
          <div className="lg:col-span-8 flex flex-col gap-6 text-gray-300 font-light leading-relaxed">
            <h3 className="text-2xl font-serif text-white mb-2 font-medium">The Friction in Payments</h3>
            <p>
              Traditional cross-border payments feel like a black box. Users are forced to navigate complex forms, deal with hidden exchange rates, and wait hours without status feedback. In digital assets, this anxiety is multiplied tenfold by cryptic wallet hashes and high-risk interfaces.
            </p>
            <p>
              Research showed that 72% of digital transfer users experienced anxiety due to lack of immediate, conversational visual validation. The strategy was to remove this anxiety by designing a unified transfer flow that updates with interactive spring states.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24 border-t border-gray-900 pt-16">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <h2 className="text-2xl font-serif text-white mb-2">02 / Architecture</h2>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-6">
              Strategy & Wireframes
            </span>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6 text-gray-300 font-light leading-relaxed">
            <h3 className="text-2xl font-serif text-white mb-2 font-medium">The Conversational Ledger</h3>
            <p>
              We abandoned standard grid dashboards. Instead, we designed a unified conversational ledger. Users initiate transactions inside an interactive terminal that guides them using natural language.
            </p>
            <p>
              The wireframing process focused on reducing cognitive load. Instead of showing fifty input fields, the app prompts the user step-by-step: "Who do you want to pay?" → "How much?" → "Select speed."
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24 border-t border-gray-900 pt-16">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <h2 className="text-2xl font-serif text-white mb-2">03 / Implementation</h2>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-6">
              UI Design & Dev
            </span>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6 text-gray-300 font-light leading-relaxed">
            <h3 className="text-2xl font-serif text-white mb-2 font-medium">Glassmorphism & GPU Performance</h3>
            <p>
              For the UI, we used a sleek dark theme featuring frosted-glass containers (glassmorphism) that float above a dynamic, blurred backdrop gradient. This creates a sense of depth and luxury.
            </p>
            <p>
              Developing this required extreme optimization. Blur filters are notoriously intensive for browser render engines. I solved this by animating elements using GPU-accelerated CSS transforms and using Framer Motion's hardware-acceleration overrides, achieving a locked 60fps on mobile Safari.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32 border-t border-gray-900 pt-16">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <h2 className="text-2xl font-serif text-white mb-2">04 / Impact</h2>
            <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-6">
              Outcome & Success
            </span>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-8">
            <h3 className="text-2xl font-serif text-white font-medium">Elite Conversions</h3>
            <p className="text-gray-300 font-light leading-relaxed">
              By removing friction points, the redesigned payment funnel resulted in a 40% increase in transaction completion rates. Cognitive drop-off was reduced to under 3%, and the interface was highly praised by seed investors.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="border border-gray-800 bg-white/[0.01] rounded-xl p-6">
                <span className="text-4xl md:text-5xl font-serif font-bold text-white block mb-1">+40%</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">Transaction Completion</span>
              </div>
              <div className="border border-gray-800 bg-white/[0.01] rounded-xl p-6">
                <span className="text-4xl md:text-5xl font-serif font-bold text-white block mb-1">-97%</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">Form Drop-off Rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Panel */}
        <div className="border border-gray-800 bg-[#121212] rounded-2xl p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tight mb-3">
              Explore the implementation
            </h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Review the design structure or check the live dashboard prototype.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <MagneticButton className="bg-[#F8F8F5] text-[#0B0B0B] hover:bg-white flex items-center gap-2 group cursor-pointer">
                Live Demo
                <ExternalLink className="w-4 h-4" />
              </MagneticButton>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium tracking-wide hover:text-white text-gray-300 transition-colors duration-300 flex items-center gap-1.5 py-2 group cursor-pointer"
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
