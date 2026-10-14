"use client";

import { Card } from "@/components/Card";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { useLang } from "@/i18n/LangContext";

const RESUME_URL =
  "https://drive.google.com/file/d/1qryyyJZdzNRRNqnZsxYsPJTUDYhjcKWg/view?usp=drive_link";

const experiences = [
  {
    company: "Webcash Vietnam",
    role: "Senior Frontend Engineer",
    period: "03/2025 – Present",
    tech: "Next.js · TypeScript · React Query · Zustand · WebSocket · Java (collab)",
    highlights: [
      "Own the frontend architecture of WeTax (e-invoicing platform handling tens of millions of invoices) and WeHR (HR management), built with Next.js + TypeScript.",
      "Cut PDF invoice rendering time ~90% by moving generation from client-side to server-side (wkhtmltopdf on the Java backend) — worked closely with backend team on API design and pipeline integration.",
      "Optimised data-heavy invoice list views with React Query server-state caching, server-side pagination, and list virtualisation; added real-time invoice status notifications via WebSocket.",
      "Designed state architecture for WeHR's complex HR workflows (payroll, leave, timekeeping) using Zustand for global state and React Query for server state.",
    ],
  },
  {
    company: "MLTech Soft",
    role: "Frontend Engineer",
    period: "03/2021 – 03/2025 · Junior → Middle → Senior",
    tech: "React · React Native · Swift · Flutter · Next.js · TypeScript · Redux · Highcharts · Jest/Enzyme",
    highlights: [
      "Led frontend across 6+ client projects; owned code review process, mentored junior developers, and introduced structured branching and PR workflow across the team.",
      "Built PSA-CMS (React 16 + Redux + Highcharts + Jest/Enzyme) for PSA International — extended marine pilot licensing, audit workflow, and content management modules with new reporting dashboards and multi-stage progress timelines.",
      "Built LothaShop e-commerce (React + Redux) with full VNPay payment integration — implemented a server-side gateway signature flow, payment-state machine (7 states), and idempotent order submission to prevent double-charges.",
      "Built VDental.ai public site (Next.js + TypeScript) with a custom bilingual i18n layer (Vietnamese/English) — multi-step appointment booking flow and follow-up appointment flow pre-filling past visit data.",
      "Built SFA DigiSale mobile app (React Native + Expo + NativeWind) from scratch — distributor route management, client visit tracking, order and promotion management, OneSignal push notifications, deployed to App Store and Google Play.",
      "Maintained PSA International's MyDigitalPA iOS app (Swift + RxSwift + MVVM + Coordinator) and Pilot Audit iOS app (Swift + RxSwift + RealmSwift + Charts) — fixed MQTT reconnect issues and Realm sync race conditions.",
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
              <p className="text-white/25 text-xs mt-2 leading-relaxed">{exp.tech}</p>
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
