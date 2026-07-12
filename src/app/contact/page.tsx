"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, ExternalLink } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const socials = [
    { label: "LinkedIn", url: "https://linkedin.com" },
    { label: "GitHub", url: "https://github.com" },
    { label: "WhatsApp", url: "https://wa.me/something" },
  ];

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Headline & Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-12">
            <div>
              <FadeIn>
                <span className="text-xs font-semibold uppercase tracking-widest text-muted block mb-4">
                  Get In Touch
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-foreground leading-[1.1] mb-8">
                  Let’s build something <span className="italic font-normal">together.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-muted text-sm md:text-base font-light leading-relaxed max-w-sm">
                  Have an idea, project, or want to discuss a potential partnership? Drop a message,
                  and I’ll get back to you within 24 hours.
                </p>
              </FadeIn>
            </div>

            <div className="flex flex-col gap-6">
              <FadeIn delay={0.25}>
                <div>
                  <span className="text-xs uppercase tracking-widest text-muted font-semibold block mb-2">
                    Direct Email
                  </span>
                  <a
                    href="mailto:hello@koushik.design"
                    className="text-lg md:text-xl font-serif font-medium text-foreground hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    hello@koushik.design
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -rotate-45" />
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div>
                  <span className="text-xs uppercase tracking-widest text-muted font-semibold block mb-3">
                    Social Channels
                  </span>
                  <div className="flex flex-col gap-2">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-muted hover:text-foreground transition-colors flex items-center gap-1.5 group"
                      >
                        {social.label}
                        <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-border-custom pt-12 lg:pt-0 lg:pl-16">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col gap-8"
                >
                  <div className="flex flex-col gap-2 relative">
                    <label
                      htmlFor="name"
                      className="text-xs uppercase tracking-widest text-muted font-semibold"
                    >
                      My name is
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-border-custom focus:border-accent py-3 text-lg md:text-xl font-serif text-foreground outline-none transition-colors placeholder:text-muted/45"
                    />
                  </div>

                  <div className="flex flex-col gap-2 relative">
                    <label
                      htmlFor="email"
                      className="text-xs uppercase tracking-widest text-muted font-semibold"
                    >
                      Reach me at
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-border-custom focus:border-accent py-3 text-lg md:text-xl font-serif text-foreground outline-none transition-colors placeholder:text-muted/45"
                    />
                  </div>

                  <div className="flex flex-col gap-2 relative">
                    <label
                      htmlFor="company"
                      className="text-xs uppercase tracking-widest text-muted font-semibold"
                    >
                      I work at
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Company Name (Optional)"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-border-custom focus:border-accent py-3 text-lg md:text-xl font-serif text-foreground outline-none transition-colors placeholder:text-muted/45"
                    />
                  </div>

                  <div className="flex flex-col gap-2 relative">
                    <label
                      htmlFor="message"
                      className="text-xs uppercase tracking-widest text-muted font-semibold"
                    >
                      Project Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      id="message"
                      name="message"
                      placeholder="Tell me about your business challenge..."
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-border-custom focus:border-accent py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted/45 resize-none font-light leading-relaxed"
                    />
                  </div>

                  <div className="pt-4">
                    <MagneticButton type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                      {isSubmitting ? "Sending..." : "Submit Message"}
                    </MagneticButton>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center justify-center text-center py-20 px-6 bg-black/[0.015] border border-border-custom rounded-2xl"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-foreground font-medium mb-3">
                    Message Received
                  </h3>
                  <p className="text-muted text-sm md:text-base font-light leading-relaxed max-w-sm mb-8">
                    Thanks for reaching out, {formState.name.split(" ")[0]}. I've received your
                    request and will review it shortly. Expect a response soon.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({ name: "", email: "", company: "", message: "" });
                    }}
                    className="text-xs font-semibold uppercase tracking-widest text-muted hover:text-foreground transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
