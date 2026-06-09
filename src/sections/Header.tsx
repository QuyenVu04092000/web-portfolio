"use client";

import { useState } from "react";
import { useLang } from "@/i18n/LangContext";

export const Header = ({ activeId }: { activeId?: string }) => {
  const [activeSection] = useState(activeId ?? "");
  const { t, locale, setLocale } = useLang();

  const navItems = [
    { id: "home", label: t.nav.home, href: "/web-portfolio/" },
    { id: "projects", label: t.nav.projects, href: "/web-portfolio/projects" },
    { id: "about", label: t.nav.about, href: "/web-portfolio/about" },
    {
      id: "resume",
      label: t.nav.resume,
      href: "https://drive.google.com/file/d/1qryyyJZdzNRRNqnZsxYsPJTUDYhjcKWg/view?usp=drive_link",
    },
  ];

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10 mx-auto max-w-[1440px] px-4">
      <div className="flex items-center gap-2">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          {navItems.map(({ id, label, href }) => (
            <a
              key={id}
              href={href}
              target={id === "resume" ? "_blank" : undefined}
              rel={id === "resume" ? "noreferrer" : undefined}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeSection === id
                  ? "bg-white text-gray-900 font-semibold"
                  : "text-white hover:bg-white/20"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setLocale(locale === "en" ? "vi" : "en")}
          className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-white/15 bg-white/10 backdrop-blur text-sm font-medium text-white hover:bg-white/20 transition-all"
        >
          <span>{locale === "en" ? "🇺🇸" : "🇻🇳"}</span>
          <span>{locale === "en" ? "EN" : "VI"}</span>
        </button>
      </div>
    </div>
  );
};
