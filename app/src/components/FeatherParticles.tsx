// components/FeatherParticles.tsx
"use client";
import { motion } from "framer-motion";
import { useMemo, useRef } from "react";

// feather.png is black artwork on a transparent background.
// invert(1) turns it white; opacity controls how faint it looks.
const FEATHER_FILTER = "invert(1)";
const FEATHER_OPACITY = 0.7;

export default function FeatherParticles() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const feathers = useMemo(() => Array.from({ length: 22 }, () => ({
    delay: Math.random() * 8,
    duration: 14 + Math.random() * 12,
    startX: Math.random() * 100,
    size: 26 + Math.random() * 26,
    drift: Math.random() * 20 - 10,
    rotate: Math.random() * 360,
    spin: Math.random() * 60 - 30,
  })), []);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden">
      {feathers.map((f, i) => (
        <motion.div
          key={i}
          initial={{ y: -100, x: `${f.startX}vw`, opacity: 0, rotate: f.rotate }}
          animate={{
            y: "110vh",
            opacity: [0, 0.6, 0.2, 0],
            x: [`${f.startX}vw`, `${f.startX + f.drift}vw`],
            rotate: f.rotate + f.spin,
          }}
          transition={{ duration: f.duration, delay: f.delay, repeat: Infinity, ease: "easeOut" }}
          className="absolute"
        >
          <img
            src="/feather.png"
            alt=""
            style={{
              width: f.size,
              height: "auto",
              filter: FEATHER_FILTER,
              opacity: FEATHER_OPACITY,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
