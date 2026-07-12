"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<"default" | "view" | "click">("default");
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 400, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for elements with cursor attributes or interactive elements
      const cursorAttr = target.closest("[data-cursor]");
      const isLinkOrButton = target.closest("a, button, [role='button'], input, textarea");

      if (cursorAttr) {
        const type = cursorAttr.getAttribute("data-cursor") as any;
        setCursorType(type);
      } else if (isLinkOrButton) {
        setCursorType("click");
      } else {
        setCursorType("default");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  // Disable custom cursor on mobile
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      style={{
        left: springX,
        top: springY,
        x: "-50%",
        y: "-50%",
        pointerEvents: "none",
      }}
      animate={{
        scale: cursorType === "view" ? 4.5 : cursorType === "click" ? 1.5 : 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="fixed w-4 h-4 rounded-full bg-accent mix-blend-difference z-50 pointer-events-none flex items-center justify-center text-[3px] font-bold text-white uppercase tracking-widest"
    >
      {cursorType === "view" && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[2px] leading-none"
        >
          View
        </motion.span>
      )}
    </motion.div>
  );
}
