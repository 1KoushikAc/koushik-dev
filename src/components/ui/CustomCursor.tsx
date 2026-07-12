"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorType = useRef<"default" | "view" | "click">("default");
  const isVisibleRef = useRef(false);
  const isMobileRef = useRef(true);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const scale = useMotionValue(1);
  const opacity = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 400, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 28 });
  const springScale = useSpring(scale, { stiffness: 250, damping: 20 });
  const springOpacity = useSpring(opacity, { stiffness: 300, damping: 30 });

  const updateScale = useCallback((type: "default" | "view" | "click") => {
    cursorType.current = type;
    if (type === "view") {
      scale.set(5);
    } else if (type === "click") {
      scale.set(1.5);
    } else {
      scale.set(1);
    }
  }, [scale]);

  useEffect(() => {
    // Check for mobile on mount
    const checkMobile = () => {
      isMobileRef.current = window.innerWidth < 1024;
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        opacity.set(1);
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      opacity.set(0);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorAttr = target.closest("[data-cursor]");
      const isLinkOrButton = target.closest("a, button, [role='button'], input, textarea");

      if (cursorAttr) {
        const type = cursorAttr.getAttribute("data-cursor") as "view" | "click";
        updateScale(type);
      } else if (isLinkOrButton) {
        updateScale("click");
      } else {
        updateScale("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", checkMobile);
    };
  }, [mouseX, mouseY, opacity, updateScale]);

  // Hide on mobile via CSS to avoid hydration mismatch
  return (
    <motion.div
      style={{
        left: springX,
        top: springY,
        x: "-50%",
        y: "-50%",
        scale: springScale,
        opacity: springOpacity,
        pointerEvents: "none",
      }}
      className="fixed w-4 h-4 rounded-full bg-accent mix-blend-difference z-[9999] pointer-events-none items-center justify-center hidden lg:flex"
      aria-hidden="true"
    >
      <motion.span
        style={{
          opacity: springScale.get() > 3 ? 1 : 0,
        }}
        className="text-[3px] font-bold text-white uppercase tracking-widest leading-none select-none"
      >
        View
      </motion.span>
    </motion.div>
  );
}
