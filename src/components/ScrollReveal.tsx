"use client";

import { motion, useReducedMotion } from "framer-motion";
import { createElement, type ReactNode } from "react";

type RevealTag =
  | "div"
  | "section"
  | "article"
  | "header"
  | "footer"
  | "h1"
  | "h2"
  | "p"
  | "ul"
  | "ol";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  intensity?: "soft" | "hero";
  as?: RevealTag;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  intensity = "soft",
  as = "div",
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  // `data-reveal` is the hook the no-JS stylesheet in the root layout uses to
  // force content visible. Without it the SSR output would stay at opacity 0.
  if (reduceMotion) {
    return createElement(as, { className, "data-reveal": "" }, children);
  }

  const isHero = intensity === "hero";
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      data-reveal=""
      initial={
        isHero
          ? { opacity: 0, y: 28, scale: 0.965, filter: "blur(16px)" }
          : { opacity: 0, y: 14 }
      }
      whileInView={
        isHero
          ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
          : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: isHero ? 0.8 : 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </Component>
  );
}
