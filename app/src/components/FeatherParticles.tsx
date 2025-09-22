// components/FeatherParticles.tsx
"use client";
import { motion } from "framer-motion";
import { useMemo, useRef } from "react";

export default function FeatherParticles() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const feathers = useMemo(() => Array.from({ length: 22 }, () => ({
    delay: Math.random() * 8,
    duration: 14 + Math.random() * 12,
    startX: Math.random() * 100,
    size: 6 + Math.random() * 14,
    drift: Math.random() * 20 - 10,
  })), []);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden">
      {feathers.map((f, i) => (
        <motion.div
          key={i}
          initial={{ y: -100, x: `${f.startX}vw`, opacity: 0 }}
          animate={{ y: "110vh", opacity: [0, 0.6, 0.2, 0], x: [`${f.startX}vw`, `${f.startX + f.drift}vw`] }}
          transition={{ duration: f.duration, delay: f.delay, repeat: Infinity, ease: "easeOut" }}
          className="absolute"
        >
          <div
            className="rotate-12"
            style={{
              width: f.size,
              height: f.size * 3,
              borderRadius: f.size,
              background: "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))",
              boxShadow: "0 0 12px rgba(255,255,255,0.06)",
              filter: "blur(0.2px)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
