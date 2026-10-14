"use client";

import { Card } from "@/components/Card";
import { useLang } from "@/i18n/LangContext";

const experiences = [
  {
    company: "Webcash Vietnam",
    role: "Senior Frontend Developer",
    period: "03/2025 – Present",
    highlights: [
      "Own the frontend architecture of WeTax (e-invoicing, tens of millions of invoices) and WeHR, built with Next.js + TypeScript, React Query for server state and Zustand for global state.",
      "Cut PDF invoice rendering time by ~90% by moving generation from client-side to server-side (wkhtmltopdf on the Java backend), working closely with the backend team.",
      // TODO(Buck): add concrete before/after for the invoice editor refactor, e.g. "a 3,000-line file → N components + M hooks"
      "Refactored a large monolithic invoice editor into modular components and custom hooks. TODO(Buck): concrete before/after, e.g. 'a 3,000-line file → N components + M hooks'.",
      "Made data-heavy invoice lists fast with React Query caching, server-side pagination and list virtualization.",
      "Built real-time notifications and system updates over WebSocket.",
      "Worked with Java backend engineers to debug production issues and optimise APIs for high-volume transactions.",
    ],
  },
  {
    company: "MLTech Soft",
    role: "Senior Frontend Developer",
    period: "03/2024 – 03/2025",
    highlights: [
      "Led frontend across multiple client outsourcing projects, with code review, mentoring junior developers and improving team workflow.",
      // TODO(Buck): specify what "70% UI performance / 80% data load speed" was measured with (Lighthouse, Chrome DevTools, custom benchmark, etc.)
      "Led the major rebuild of DigiSale (Distributor Management System) with a custom in-house component library (no external UI kit). TODO(Buck): what '70% UI performance / 80% data load' was measured with.",
      "Architected high-performance, reusable React components with Redux, Zustand, and Context API.",
      "Reduced re-renders using React.memo, useCallback, and useMemo; minimised bundle size with tree shaking and dynamic imports.",
    ],
  },
  {
    company: "MLTech Soft",
    role: "Middle Frontend Developer",
    period: "03/2022 – 03/2024",
    highlights: [
      // TODO(Buck): name the payment gateways used and how pending/failed/retry/duplicate-submit states were handled
      "Led frontend for a high-traffic e-commerce platform, including third-party payment and shipping integration. TODO(Buck): payment gateways used + how pending/failed/retry/duplicate-submit states were handled.",
      "Performance work: code splitting, lazy loading, memoisation, tree shaking — improved Lighthouse and Core Web Vitals scores.",
      "Collaborated in Agile team of 8 across sprint planning, daily stand-ups, code reviews, and retrospectives.",
    ],
  },
  {
    company: "MLTech Soft",
    role: "Junior Frontend Developer",
    period: "03/2021 – 03/2022",
    highlights: [
      "Built reusable React components and complex flows (auth, gamified quiz features) for a DMS with thousands of users.",
      "Integrated RESTful and GraphQL APIs, handling data fetching, caching, and real-time updates.",
      "Translated UI/UX designs into modular React components with Redux, Zustand, and Context API.",
    ],
  },
];

export const WorkExperience = () => {
  const { t } = useLang();
  return (
    <Card className="px-8 flex-1 flex flex-col">
      <h2 className="font-serif text-2xl md:text-3xl text-left mt-8 tracking-wide">
        {t.workExperience.title}
      </h2>
      <div className="mt-6 mb-8 flex flex-col gap-10">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="lg:grid lg:grid-cols-3 gap-8 border-t border-white/10 pt-8 first:border-0 first:pt-0"
          >
            <div className="col-span-1 mb-4 lg:mb-0">
              <p className="font-semibold text-white text-base">{exp.company}</p>
              <p className="text-emerald-300 text-sm mt-1">{exp.role}</p>
              <p className="text-white/40 text-sm mt-1">{exp.period}</p>
            </div>
            <div className="col-span-2">
              <ul className="flex flex-col gap-2">
                {exp.highlights.map((point, j) => (
                  <li key={j} className="flex gap-2 text-sm">
                    <span className="text-emerald-300 mt-0.5 shrink-0">–</span>
                    <span className={point.includes("TODO(Buck)") ? "text-amber-300/60" : "text-white/60"}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
