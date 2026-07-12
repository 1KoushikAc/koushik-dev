"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: "LinkedIn", url: "https://linkedin.com" },
    { label: "GitHub", url: "https://github.com" },
    { label: "WhatsApp", url: "https://wa.me/something" },
  ];

  return (
    <footer className="w-full border-t border-border-custom bg-background pt-20 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
              KOUSHIK<span className="text-accent">.</span>
            </Link>
            <p className="text-muted text-sm max-w-sm leading-relaxed">
              Premium web design and development for startups, founders, and ambitious businesses looking to build trust and authority online.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted font-bold mb-4">Sitemap</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/work"
                  className="text-sm text-foreground hover:text-accent transition-colors font-medium"
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-foreground hover:text-accent transition-colors font-medium"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="text-sm text-foreground hover:text-accent transition-colors font-medium"
                >
                  My Process
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-foreground hover:text-accent transition-colors font-medium"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted font-bold mb-4">Connect</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="mailto:hello@koushik.design"
                  className="text-sm text-foreground hover:text-accent transition-colors font-medium flex items-center gap-1 group"
                >
                  hello@koushik.design
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground hover:text-accent transition-colors font-medium flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-border-custom pt-8 gap-4 text-xs text-muted">
          <p>© {currentYear} Koushik. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-default">Privacy Policy</span>
            <span className="cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
