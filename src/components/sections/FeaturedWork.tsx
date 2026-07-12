"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: "onji",
    title: "ONJI",
    category: "Fintech Platform",
    year: "2026",
    link: "/work/onji",
    image: "/images/onji.png",
  },
  {
    id: "doctor",
    title: "Dr. Callaway",
    category: "Healthcare Platform",
    year: "2025",
    link: "/work/doctor",
    image: "/images/doctor.png",
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

        <div className="flex flex-col border-t border-border-custom">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={project.link}
              onMouseEnter={() => setActiveProject(project)}
              data-cursor="view"
              className="group py-8 md:py-12 border-b border-border-custom flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer relative z-10"
            >
              <div className="flex items-baseline gap-6 md:gap-12">
                <span className="text-sm text-muted font-mono font-medium">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-4">
                  {project.title}
                </h3>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-12 text-sm text-muted">
                <span className="font-light">{project.category}</span>
                <span className="font-mono">{project.year}</span>
              </div>
            </Link>
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
              priority
            />
          </div>
        )}
      </motion.div>
    </section>
  );
}
