"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useLang } from "@/i18n/LangContext";
import { ScrollReveal } from "@/components/ScrollReveal";

const stats = [
  { type: "counter", end: 5, suffix: "+", key: "experience" },
  { type: "counter", end: 90, suffix: "%", prefix: "~", key: "performance" },
  { type: "text", value: "Tens of M", key: "invoices" },
  { type: "text", value: "J → S", key: "promotion" },
] as const;

const Counter = ({ end, suffix, prefix }: { end: number; suffix: string; prefix?: string }) => {
  const [count, setCount] = useState(end); // pre-render real number for SSR/crawlers
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!isInView) return;
    let start = 0;
    setCount(0);
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
    <span
      ref={ref}
      className="font-serif text-4xl md:text-5xl bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent tabular-nums"
    >
      {prefix}{count}{suffix}
    </span>
  );
};

const TextStat = ({ value }: { value: string }) => (
  <span className="font-serif text-3xl md:text-4xl bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent leading-tight">
    {value}
  </span>
);

export const StatsSection = () => {
  const { t } = useLang();
  return (
    <div className="py-10 border-y border-white/10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.key} delay={i * 0.1} className="flex flex-col items-center text-center px-4">
              {stat.type === "counter" ? (
                <Counter end={stat.end} suffix={stat.suffix} prefix={"prefix" in stat ? stat.prefix : undefined} />
              ) : (
                <TextStat value={stat.value} />
              )}
              <span className="text-white/50 text-sm mt-1">{t.stats[stat.key]}</span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};
