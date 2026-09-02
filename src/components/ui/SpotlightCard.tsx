"use client";

import { MouseEvent, useRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface SpotlightCardProps extends HTMLMotionProps<"article"> {
  children: React.ReactNode;
  className?: string;
}

export default function SpotlightCard({ children, className = "", ...props }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`bento-card spotlight-wrapper ${className}`}
      {...props}
    >
      {children}
    </motion.article>
  );
}
