"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useLang } from "@/i18n/LangContext";
import { ScrollReveal } from "@/components/ScrollReveal";

const stats = [
  { end: 5, suffix: "+", key: "experience" },
  { end: 10, suffix: "+", key: "projects" },
  { end: 8, suffix: "+", key: "clients" },
  { end: 80, suffix: "%", key: "performance" },
] as const;

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = 16;
    const increment = end / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref} className="font-serif text-4xl md:text-5xl bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent tabular-nums">
      {end === 80 ? "~" : ""}{count}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  const { t } = useLang();
  return (
    <div className="py-10 border-y border-white/10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
          {stats.map(({ end, suffix, key }, i) => (
            <ScrollReveal key={key} delay={i * 0.1} className="flex flex-col items-center text-center px-4">
              <Counter end={end} suffix={suffix} />
              <span className="text-white/50 text-sm mt-1">{t.stats[key]}</span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};
