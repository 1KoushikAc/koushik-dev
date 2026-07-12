"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navItems = [
  { label: "Work", path: "/work" },
  { label: "Services", path: "/services" },
  { label: "Process", path: "/process" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-border-custom bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-20 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-1">
          <span className="text-xl font-bold tracking-tight text-foreground transition-colors duration-300">
            KOUSHIK<span className="text-accent group-hover:animate-pulse">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => {
            const isActive = pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  color: isActive ? "var(--foreground)" : "var(--muted)",
                }}
              >
                <span className="relative z-10">{item.label}</span>
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="navHover"
                    className="absolute inset-0 bg-black/[0.03] rounded-md -z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {isActive && (
                  <motion.span
                    layoutId="navActive"
                    className="absolute bottom-1 left-4 right-4 h-[2px] bg-accent rounded-full -z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu trigger */}
        <MobileMenu />
      </div>
    </header>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="relative z-50 p-2 text-foreground focus:outline-none"
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-[2px] bg-foreground rounded"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-full h-[2px] bg-foreground rounded"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-[2px] bg-foreground rounded"
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-background z-40 pt-28 px-8 flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, index) => {
                const isActive = pathname.startsWith(item.path);
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <Link
                      href={item.path}
                      onClick={toggleMenu}
                      className="text-4xl font-serif font-medium tracking-tight block hover:text-accent transition-colors"
                      style={{
                        color: isActive ? "var(--accent)" : "var(--foreground)",
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 border-t border-border-custom pt-8">
              <span className="text-xs uppercase tracking-widest text-muted">Get in touch</span>
              <a
                href="mailto:koushik@example.com"
                className="text-lg font-medium hover:text-accent transition-colors"
              >
                hello@koushik.design
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
