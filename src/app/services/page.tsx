import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Services & Capabilities — Koushik",
  description: "Solving business problems through design-engineer hybrid expertise. High-converting SaaS marketing sites, optimized landing pages, and premium redesigns.",
};

const services = [
  {
    id: "startup-websites",
    title: "Startup & SaaS Websites",
    desc: "Bespoke marketing engines built to explain complex software, engage prospective clients, and capture high-intent leads. We combine visual storytelling with modern engineering.",
    features: [
      "Custom UI/UX Design System",
      "Interactive Product Demonstrations",
      "SEO & Speed Optimization",
      "CMS Integration (Sanity / Storyblok)",
    ],
    outcome: "Increased user signups and immediate credibility with venture capital partners.",
  },
  {
    id: "landing-pages",
    title: "High-Converting Landing Pages",
    desc: "Single-minded, laser-focused promotional landing pages optimized for maximum Conversion Rate Optimization (CRO). Designed to turn cold traffic into warm leads.",
    features: [
      "Persuasive Copywriting Structure",
      "A/B Testing Integration",
      "Page Speed < 800ms Load Time",
      "Seamless Lead Form Integrations",
    ],
    outcome: "Lower Customer Acquisition Cost (CAC) and higher return on advertising spend.",
  },
  {
    id: "redesign",
    title: "Premium Website Redesigns",
    desc: "Analyze and rebuild underperforming, outdated web assets into brand-defining visual systems that command premium pricing.",
    features: [
      "Legacy Codebase Audit",
      "Modern Typography Hierarchy",
      "Performance & Mobile Optimization",
      "Responsive Fluid Layouts",
    ],
    outcome: "Reduced bounce rates, elevated brand value, and improved user engagement.",
  },
  {
    id: "maintenance",
    title: "Continuous Maintenance & Growth",
    desc: "On-demand visual and engineering updates, security monitoring, and regular conversion rate reviews to ensure your site continues to win.",
    features: [
      "Priority Engineering Hours",
      "Monthly Conversion Audits",
      "Security Patches & Backups",
      "Lighthouse Score Monitoring",
    ],
    outcome: "Zero downtime, continuous performance improvements, and peace of mind.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-widest text-muted block mb-4">
              Services
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-foreground mb-8">
              Solving business problems through <span className="italic font-normal">design</span> & code.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted font-light leading-relaxed">
              I don't just build pretty pages. I design and implement user experiences focused entirely on driving sales, building immediate trust, and positioning your company as an authority.
            </p>
          </FadeIn>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-16 md:gap-24 mb-32">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 border-t border-border-custom items-start"
            >
              <div className="lg:col-span-1 text-sm font-mono text-muted">
                <FadeIn delay={index * 0.1}>
                  {String(index + 1).padStart(2, "0")}
                </FadeIn>
              </div>
              <div className="lg:col-span-4">
                <FadeIn delay={index * 0.1 + 0.05}>
                  <h2 className="text-2xl md:text-3xl font-serif text-foreground font-medium mb-4">
                    {service.title}
                  </h2>
                </FadeIn>
                <FadeIn delay={index * 0.1 + 0.1}>
                  <p className="text-muted text-sm md:text-base leading-relaxed mb-6 font-light">
                    {service.desc}
                  </p>
                </FadeIn>
                <FadeIn delay={index * 0.1 + 0.15}>
                  <div className="bg-black/[0.02] border border-border-custom/50 rounded-lg p-5">
                    <span className="text-xs uppercase tracking-widest text-muted font-semibold block mb-1">
                      Primary Outcome
                    </span>
                    <p className="text-sm font-medium text-foreground">{service.outcome}</p>
                  </div>
                </FadeIn>
              </div>

              <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-6">
                <FadeIn delay={index * 0.1 + 0.2}>
                  <span className="text-xs uppercase tracking-widest text-muted font-semibold block">
                    What's Included
                  </span>
                </FadeIn>
                <FadeIn delay={index * 0.1 + 0.25}>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm text-foreground">
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="font-light">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>

        {/* Sales Pitch Banner */}
        <FadeIn>
          <div className="bg-[#0B0B0B] text-[#F8F8F5] rounded-2xl p-8 md:p-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-3">
                Direct Access
              </span>
              <h3 className="text-2xl md:text-4xl font-serif text-white tracking-tight mb-4">
                Need a completely custom engagement model?
              </h3>
              <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                If your requirements don’t fit clean boxes, let’s configure a tailored sprint layout or monthly advisory structure. I work directly with founders as a digital product partner.
              </p>
            </div>
            <Link href="/contact" className="flex-shrink-0 block">
              <MagneticButton className="bg-[#F8F8F5] text-[#0B0B0B] hover:bg-[#E6E6DF] cursor-pointer">
                Let's Discuss
              </MagneticButton>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
