"use client";

import { Card } from "@/components/Card";
import { useLang } from "@/i18n/LangContext";

const experiences = [
  {
    company: "Webcash Vietnam",
    role: "Senior Front-End Developer",
    period: "03/2025 – Present",
    highlights: [
      "Developed and maintained HR (WeHR) and high-scale e-invoicing (WeTax) platforms supporting tens of millions of invoices and enterprise clients.",
      "Improved PDF invoice rendering performance by ~90% by migrating client-side generation to server-side processing using wkhtmltopdf.",
      "Refactored a large monolithic invoice editor into modular components and custom hooks, reducing complexity by ~90%.",
      "Improved data-heavy listing pages with React Query caching, server-side pagination, and virtualization.",
      "Built scalable frontend architecture using Next.js, TypeScript, React Query, and Zustand.",
      "Implemented real-time features using WebSocket for notifications and system updates.",
    ],
  },
  {
    company: "MLTech Soft",
    role: "Senior Front-End Developer",
    period: "03/2024 – 03/2025",
    highlights: [
      "Led front-end development for multiple outsourcing projects; managed a team through code reviews and mentoring.",
      "Led major update of DigiSale (Distributor Management System) — custom UI/UX without external libraries, improving UI performance by 70% and data load speed by 80%.",
      "Architected high-performance, reusable React components with Redux, Zustand, and Context API.",
      "Reduced re-renders using React.memo, useCallback, and useMemo; minimized bundle size with tree shaking and dynamic imports.",
      "Built pixel-style designs, complex animations, and gamified features ensuring cross-browser/device compatibility.",
    ],
  },
  {
    company: "MLTech Soft",
    role: "Middle Front-End Developer",
    period: "03/2022 – 03/2024",
    highlights: [
      "Led development of a high-traffic e-commerce platform with third-party payments, shipping, and scalable UI.",
      "Optimized performance with Zustand, Redux, Webpack, and Vite.",
      "Collaborated in Agile team of 8 across sprint planning, daily stand-ups, code reviews, and retrospectives.",
      "Implemented lazy loading, memoization, and code splitting; achieved higher Lighthouse and Core Web Vitals scores.",
    ],
  },
  {
    company: "MLTech Soft",
    role: "Junior Front-End Developer",
    period: "03/2021 – 03/2022",
    highlights: [
      "Led frontend development for prominent client projects involving high-traffic web applications.",
      "Integrated RESTful and GraphQL APIs, handling data fetching, caching, and real-time updates.",
      "Translated UI/UX designs into reusable, modular React components with Redux, Zustand, and Context API.",
      "Developed and maintained scalable Distributor Management System (DMS) software with thousands of users.",
    ],
  },
];

export const WorkExperience = () => {
  const { t } = useLang();
  return (
    <div className="px-7">
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
                <p className="font-semibold text-white text-base">
                  {exp.company}
                </p>
                <p className="text-emerald-300 text-sm mt-1">{exp.role}</p>
                <p className="text-white/40 text-sm mt-1">{exp.period}</p>
              </div>
              <div className="col-span-2">
                <ul className="flex flex-col gap-2">
                  {exp.highlights.map((point, j) => (
                    <li key={j} className="flex gap-2 text-white/60 text-sm">
                      <span className="text-emerald-300 mt-1 shrink-0">–</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
