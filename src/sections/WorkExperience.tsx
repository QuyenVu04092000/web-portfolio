"use client";

import { Card } from "@/components/Card";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { useLang } from "@/i18n/LangContext";

const RESUME_URL =
  "https://drive.google.com/file/d/1qryyyJZdzNRRNqnZsxYsPJTUDYhjcKWg/view?usp=drive_link";

const experiences = [
  {
    company: "Webcash Vietnam",
    role: "Senior Frontend Developer",
    period: "03/2025 – Present",
    highlights: [
      "Own the frontend architecture of WeTax (e-invoicing, tens of millions of invoices) and WeHR, built with Next.js + TypeScript, React Query for server state and Zustand for global state.",
      "Cut PDF invoice rendering time by ~90% less by moving generation from client-side to server-side (wkhtmltopdf on the Java backend), working closely with the backend team.",
      "Made data-heavy invoice lists fast with React Query caching, server-side pagination, and list virtualization; built real-time notifications via WebSocket.",
    ],
  },
  {
    company: "MLTech Soft",
    role: "Frontend Developer",
    period: "03/2021 – 03/2025 · Junior → Middle → Senior",
    highlights: [
      "Led frontend across multiple client projects, including code review, mentoring junior developers, and improving team workflow.",
      "Led the rebuild of DigiSale (Distributor Management System) with a custom in-house component library; reduced re-renders with React.memo, useCallback, and useMemo; minimized bundle size with tree shaking and dynamic imports.",
      "Built reusable React components and complex flows for high-traffic e-commerce and DMS products; improved Core Web Vitals with code splitting, lazy loading, and tree shaking; integrated REST and GraphQL APIs.",
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
      <div className="mt-6 mb-4 flex flex-col gap-10">
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
                    <span className="text-white/60">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="pb-8 pt-4 border-t border-white/10 mt-2">
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-emerald-300 font-medium text-sm hover:text-emerald-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 rounded"
        >
          Full resume
          <ArrowUpRightIcon className="size-3.5" />
        </a>
      </div>
    </Card>
  );
};
