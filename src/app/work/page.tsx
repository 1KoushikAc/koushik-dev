"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "onji",
    title: "ONJI",
    category: "Fintech Platform",
    year: "2026",
    link: "/work/onji",
    image: "/images/onji.png",
    gridClass: "lg:col-span-8 lg:col-start-1",
  },
  {
    id: "doctor",
    title: "Dr. Callaway",
    category: "Healthcare Platform",
    year: "2025",
    link: "/work/doctor",
    image: "/images/doctor.png",
    gridClass: "lg:col-span-6 lg:col-start-7 lg:mt-32",
  },
];

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted block mb-4">
            Case Studies
          </span>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-foreground mb-8">
            Selected <span className="italic font-normal">Work</span>
          </h1>
          <p className="text-lg md:text-xl text-muted font-light leading-relaxed">
            A curated showcase of premium digital experiences designed and engineered to solve
            complex business constraints.
          </p>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12 items-start mb-32">
          {projects.map((project) => (
            <div key={project.id} className={`${project.gridClass} group flex flex-col gap-6`}>
              <Link href={project.link} className="cursor-pointer">
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-border-custom bg-black/[0.02] shadow-sm transition-shadow duration-500 group-hover:shadow-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-[#0B0B0B]/0 group-hover:bg-[#0B0B0B]/5 transition-colors duration-500" />
                </div>
              </Link>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm text-muted">
                  <span className="font-light">{project.category}</span>
                  <span className="font-mono">{project.year}</span>
                </div>
                <Link
                  href={project.link}
                  className="flex items-center justify-between text-2xl font-serif text-foreground group-hover:text-accent transition-colors duration-300 cursor-pointer"
                >
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
