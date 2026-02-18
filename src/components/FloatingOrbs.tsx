"use client";

import { motion } from "framer-motion";

interface OrbProps {
  className?: string;
  count?: number;
}

const orbConfigs = [
  {
    size: "h-[350px] w-[350px]",
    color: "bg-orange-400/15",
    position: "left-[10%] top-[20%]",
    duration: 18,
    delay: 0,
  },
  {
    size: "h-[250px] w-[250px]",
    color: "bg-orange-500/10",
    position: "right-[15%] top-[40%]",
    duration: 22,
    delay: 3,
  },
  {
    size: "h-[300px] w-[300px]",
    color: "bg-orange-300/12",
    position: "left-[40%] bottom-[10%]",
    duration: 20,
    delay: 6,
  },
  {
    size: "h-[200px] w-[200px]",
    color: "bg-orange-600/8",
    position: "right-[30%] top-[15%]",
    duration: 16,
    delay: 2,
  },
  {
    size: "h-[280px] w-[280px]",
    color: "bg-orange-400/10",
    position: "left-[60%] top-[60%]",
    duration: 24,
    delay: 4,
  },
];

export function FloatingOrbs({ className = "", count = 3 }: OrbProps) {
  const orbs = orbConfigs.slice(0, count);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[100px] ${orb.size} ${orb.color} ${orb.position}`}
          animate={{
            y: [0, -30, 15, -20, 0],
            x: [0, 20, -15, 10, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
            opacity: [0.6, 1, 0.7, 0.9, 0.6],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
