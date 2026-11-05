"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div initial={false} whileInView={reduced ? undefined : { opacity: [0.65, 1], y: [16, 0] }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.55, delay }} className={className}>{children}</motion.div>;
}
