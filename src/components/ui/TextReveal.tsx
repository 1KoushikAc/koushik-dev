"use client";

import { motion } from "framer-motion";

export default function TextReveal({
  text,
  className = "",
  tag = "p",
  delay = 0,
}: {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}) {
  const words = text.split(" ");
  const Tag = tag;

  const containerVars = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const childVars = {
    hidden: {
      y: "110%",
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <Tag className={`${className}`}>
      <motion.span
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="inline-flex flex-wrap"
      >
        {words.map((word, index) => (
          <span
            key={index}
            className="relative overflow-hidden inline-flex mr-[0.25em] py-0.5"
          >
            <motion.span variants={childVars} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
