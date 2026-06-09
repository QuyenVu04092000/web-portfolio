"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LangContext";

export const StickyCtaBar = () => {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 px-6 h-12 rounded-full font-semibold shadow-lg hover:opacity-90 transition-opacity"
      >
        <div className="bg-green-600 size-2 rounded-full" />
        {t.hero.hireMe}
      </button>
    </div>
  );
};
