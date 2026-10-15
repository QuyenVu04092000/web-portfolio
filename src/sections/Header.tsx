"use client";

import { useState } from "react";
import { useLang } from "@/i18n/LangContext";

export const Header = ({ activeId }: { activeId?: string }) => {
  const [activeSection] = useState(activeId ?? "");
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, locale, setLocale } = useLang();

  const navItems = [
    { id: "home", label: t.nav.home, href: "/web-portfolio/" },
    { id: "projects", label: t.nav.projects, href: "/web-portfolio/projects" },
    { id: "about", label: t.nav.about, href: "/web-portfolio/about" },
    {
      id: "resume",
      label: t.nav.resume,
      href: "https://drive.google.com/file/d/1TWGtoodo8mgchMXgbPqhY9QfHWRKqbZt/view?usp=sharing",
    },
  ];

  return (
    <div className="fixed top-3 left-0 right-0 z-10 px-4">
      {/* ── Desktop pill nav (md+) ───────────────────────────────────── */}
      <div className="hidden md:flex justify-center items-center gap-2">
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

      {/* ── Mobile top bar (< md) ────────────────────────────────────── */}
      <div className="md:hidden flex justify-between items-center">
        {/* Logo / name */}
        <div className="border border-white/15 rounded-full bg-white/10 backdrop-blur px-4 py-2">
          <span className="text-white text-sm font-semibold">Buck</span>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLocale(locale === "en" ? "vi" : "en")}
            className="flex items-center gap-1 px-3 py-2 rounded-full border border-white/15 bg-white/10 backdrop-blur text-sm font-medium text-white hover:bg-white/20 transition-all"
          >
            <span>{locale === "en" ? "🇺🇸" : "🇻🇳"}</span>
            <span className="text-xs">{locale === "en" ? "EN" : "VI"}</span>
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center justify-center size-10 rounded-full border border-white/15 bg-white/10 backdrop-blur text-white hover:bg-white/20 transition-all"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ──────────────────────────────────────────── */}
      {menuOpen && (
        <div className="md:hidden absolute top-14 left-4 right-4 border border-white/15 rounded-2xl bg-gray-900/95 backdrop-blur-lg overflow-hidden shadow-xl">
          {navItems.map(({ id, label, href }) => (
            <a
              key={id}
              href={href}
              target={id === "resume" ? "_blank" : undefined}
              rel={id === "resume" ? "noreferrer" : undefined}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center px-5 py-4 text-sm font-medium border-b border-white/5 last:border-0 transition-colors ${
                activeSection === id
                  ? "text-white bg-white/10"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
