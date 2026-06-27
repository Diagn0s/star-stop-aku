"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  size: number;
  delay: number;
  duration: number;
}

function generateSparkle(): Sparkle {
  return {
    id: Math.random().toString(36).substr(2, 9),
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 2,
    duration: Math.random() * 1.5 + 1,
  };
}

export function SparklesText({
  children,
  className,
  sparklesCount = 12,
}: {
  children: React.ReactNode;
  className?: string;
  sparklesCount?: number;
}) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const initial = Array.from({ length: sparklesCount }, () =>
      generateSparkle()
    );
    setSparkles(initial);

    const interval = setInterval(() => {
      setSparkles((prev) =>
        prev.map((s) => (Math.random() > 0.7 ? generateSparkle() : s))
      );
    }, 1500);

    return () => clearInterval(interval);
  }, [sparklesCount]);

  return (
    <span className={cn("relative inline-block", className)}>
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.span
            key={sparkle.id}
            className="pointer-events-none absolute z-10 block rounded-full bg-amber-400"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: sparkle.duration,
              delay: sparkle.delay,
              repeat: Infinity,
              repeatDelay: Math.random() * 2 + 1,
            }}
            style={{
              left: sparkle.x,
              top: sparkle.y,
              width: sparkle.size,
              height: sparkle.size,
              boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.size}px rgba(251, 191, 36, 0.6)`,
            }}
          />
        ))}
      </AnimatePresence>
      <span className="relative z-20">{children}</span>
    </span>
  );
}
