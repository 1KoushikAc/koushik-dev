import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import StoneCustomizer from "@/components/ui/StoneCustomizer";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Stone Engraving Case Study — Koushik",
  description: "Stone Engraving Order Platform: Modernizing the process of ordering custom stone engravings.",
};

export default function StoneCaseStudy() {
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
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
              Custom Order Experience
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif tracking-tight text-foreground mb-8">
              Stone Engraving: Modernizing a timeless craft.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted font-light leading-relaxed">
              A premium digital platform designed to elevate the traditional process of ordering custom stone engravings. Pairing minimal layout composition with a real-time typographic stone customizer.
            </p>
          </FadeIn>
        </div>

        {/* Project Meta Table */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border-custom mb-20 text-sm">
          <div>
            <span className="text-muted block mb-1">Role</span>
            <span className="font-medium text-foreground">Lead Product Designer & Frontend Architect</span>
          </div>
          <div>
            <span className="text-muted block mb-1">Timeline</span>
            <span className="font-medium text-foreground">3 Months (2026)</span>
          </div>
          <div>
            <span className="text-muted block mb-1">Tech Stack</span>
            <span className="font-medium text-foreground">Next.js, Tailwind, CSS Shadows, Framer Motion</span>
          </div>
          <div>
            <span className="text-muted block mb-1">Client</span>
            <span className="font-medium text-foreground">Timeless Stone Crafts</span>
          </div>
        </div>

        {/* Big Mockup Showcase */}
        <FadeIn>
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border-custom bg-black/[0.02] shadow-2xl mb-24">
            <Image
              src="/images/stone.png"
              alt="Stone Engraving Mockup"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </FadeIn>

        {/* Case Study Editorial Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24">
          
          {/* Left Column: Anchor */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <FadeIn>
              <h2 className="text-2xl font-serif text-foreground mb-2">01 / Concept</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-6">
                Problem & Research
              </span>
            </FadeIn>
          </div>

          {/* Right Column: Copy */}
          <div className="lg:col-span-8 flex flex-col gap-6 text-muted font-light leading-relaxed">
            <FadeIn delay={0.15}>
              <h3 className="text-2xl font-serif text-foreground mb-2 font-medium">Overcoming Craft Complexity</h3>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>
                Custom stone engraving has traditionally been a highly manual, analog process. Customers struggle to visualize different stone textures (Carrara marble, Absolute Black granite, Welsh slate), understand how fonts look carved into stone, and confidently preview layout proportions in real time.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p>
                Research showed that 89% of customers felt hesitant to order online due to a lack of immediate visual previews of their custom inscriptions on real stone materials. The strategy was to remove this anxiety by designing an elegant, interactive editor that acts as a real-time typographic stone customizer.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24 border-t border-border-custom pt-16">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <FadeIn>
              <h2 className="text-2xl font-serif text-foreground mb-2">02 / Architecture</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-6">
                Strategy & Wireframes
              </span>
            </FadeIn>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6 text-muted font-light leading-relaxed">
            <FadeIn delay={0.15}>
              <h3 className="text-2xl font-serif text-foreground mb-2 font-medium">The Customizer Flow</h3>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>
                We designed a guided step-by-step customizer. Instead of overwhelming users with an endless panel of settings, we structured the flow logically: "Select Material" → "Choose Typography & Style" → "Input Custom Inscription" → "Preview Depth Render".
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p>
                The layout uses huge margins and soft editorial proportions, echoing the patience and quality of stone masonry. The editor card is integrated inline, acting as a live demonstration of the frontend's capability.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Section 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24 border-t border-border-custom pt-16">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <FadeIn>
              <h2 className="text-2xl font-serif text-foreground mb-2">03 / Implementation</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-6">
                UI Design & Dev
              </span>
            </FadeIn>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6 text-muted font-light leading-relaxed">
            <FadeIn delay={0.15}>
              <h3 className="text-2xl font-serif text-foreground mb-2 font-medium">Building the Live Preview</h3>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>
                For design, we used a warm neutral palette (soft sand beiges, slate greys, and deep charcoal) combined with elegant typography. The customizer required high performance to render shadow-based depth effects smoothly on text changes.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p>
                I engineered a custom real-time canvas configuration widget in React. Using responsive CSS box-shadows and inner inset borders, we emulated natural light falling onto carved granite and marble grooves, giving customers a tactile sense of depth without WebGL overhead.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <StoneCustomizer />
            </FadeIn>
          </div>
        </div>

        {/* Section 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32 border-t border-border-custom pt-16">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <FadeIn>
              <h2 className="text-2xl font-serif text-foreground mb-2">04 / Impact</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-6">
                Outcome & Success
              </span>
            </FadeIn>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-8">
            <FadeIn delay={0.15}>
              <h3 className="text-2xl font-serif text-foreground font-medium">Operational Efficiency</h3>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-muted font-light leading-relaxed">
                The customizer transformed Timeless Stone Crafts' customer pipeline. Online order requests increased by 65% within the first month. In addition, the shop floor reported saving 15 hours per week previously spent on manual design revisions and typographic layout approvals.
              </p>
            </FadeIn>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <FadeIn delay={0.25} className="w-full">
                <div className="border border-border-custom bg-black/[0.01] rounded-xl p-6 h-full">
                  <span className="text-4xl md:text-5xl font-serif font-bold text-foreground block mb-1">+65%</span>
                  <span className="text-xs text-muted uppercase tracking-widest">Online Orders</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.3} className="w-full">
                <div className="border border-border-custom bg-black/[0.01] rounded-xl p-6 h-full">
                  <span className="text-4xl md:text-5xl font-serif font-bold text-foreground block mb-1">15 hrs</span>
                  <span className="text-xs text-muted uppercase tracking-widest">Weekly Design Intake Saved</span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Action Panel */}
        <FadeIn>
          <div className="border border-border-custom bg-black/[0.01] rounded-2xl p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-serif text-foreground tracking-tight mb-3">
                Explore the implementation
              </h3>
              <p className="text-sm text-muted font-light leading-relaxed">
                Review the design system guidelines or check the live practice stone customizer prototype.
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
        </FadeIn>
      </div>
    </div>
  );
}
