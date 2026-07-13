"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import FadeIn from "../ui/FadeIn";

const projects = [
  {
    id: "onji",
    title: "ONJI",
    category: "Creative Talent Marketplace",
    year: "2026",
    description:
      "A premium marketplace connecting customers with verified creative professionals. Built with a focus on trust, seamless discovery, and scalable product architecture, ONJI empowers creators to showcase their work, receive genuine inquiries, and grow their businesses through an intuitive digital experience.",
    link: "/work/onji",
    image: "/images/onji.png",
  },
  {
    id: "revelo",
    title: "revelo",
    category: "Custom Order Experience",
    year: "2026",
    description:
      "A premium platform that modernizes the process of ordering custom stone engravings. Designed around craftsmanship and simplicity, it enables customers to explore materials, view completed work, and request personalized engravings through an elegant, editorial-inspired experience.",
    link: "/work/revelo",
    image: "/images/revelo.png",
  },
];

export default function FeaturedWork() {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setActiveProject(null)}
      className="py-24 md:py-36 border-t border-border-custom bg-background relative overflow-visible"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted block mb-4">
                Featured Work
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground">
                Selected Creations
              </h2>
            </div>
            <Link
              href="/work"
              className="text-sm font-medium tracking-wide hover:text-accent transition-colors duration-300 flex items-center gap-1 group py-2 cursor-pointer"
            >
              Explore All Projects
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </FadeIn>

        <div className="flex flex-col border-t border-border-custom">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <Link
                href={project.link}
                onMouseEnter={() => setActiveProject(project)}
                onMouseLeave={() => setActiveProject(null)}
                onFocus={() => setActiveProject(project)}
                onBlur={() => setActiveProject(null)}
                data-cursor="view"
                className="group py-12 md:py-16 border-b border-border-custom flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 cursor-pointer relative z-10 focus:outline-none"
              >
                {/* Number and Title */}
                <div className="lg:col-span-6 flex items-start gap-6 md:gap-10">
                  <span className="text-sm text-muted font-mono font-medium mt-1.5 md:mt-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-4">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted font-semibold mt-1">
                      <span>{project.category}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="font-mono">{project.year}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
                  <p className="text-sm md:text-base text-muted font-light leading-relaxed max-w-xl group-hover:text-foreground transition-colors duration-300">
                    {project.description}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Floating Hover Image */}
      <motion.div
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
          pointerEvents: "none",
        }}
        animate={{
          opacity: activeProject ? 1 : 0,
          scale: activeProject ? 1 : 0.8,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute w-[320px] h-[200px] md:w-[460px] md:h-[290px] rounded-lg overflow-hidden border border-border-custom/50 shadow-2xl z-30 hidden lg:block"
      >
        {activeProject && (
          <div className="relative w-full h-full">
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              fill
              className="object-cover"
              sizes="460px"
              priority={false}
            />
          </div>
        )}
      </motion.div>
    </section>
  );
}

