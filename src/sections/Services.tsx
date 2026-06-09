"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { useLang } from "@/i18n/LangContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TiltCard } from "@/components/TiltCard";

const services = [
  {
    title: "Landing Page Development",
    description:
      "High-converting, responsive landing pages built for speed and clarity. Pixel-perfect from your Figma designs or from scratch.",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ),
  },
  {
    title: "Web App Development",
    description:
      "Full-featured web applications with React & Next.js. From dashboards to e-commerce, I handle the frontend end-to-end.",
    tags: ["React", "Next.js", "TypeScript"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "UI / Design Implementation",
    description:
      "Turn your Figma, Adobe XD, or any design into a polished, interactive UI with smooth animations and attention to detail.",
    tags: ["Figma to Code", "Framer Motion", "CSS"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: "Performance & Optimization",
    description:
      "Audit and improve your existing site — faster load times, better Core Web Vitals, and a smoother user experience.",
    tags: ["Core Web Vitals", "SEO", "Accessibility"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m13 2-2 2.5h3L12 7" />
        <path d="M10 14v-3" />
        <path d="M14 14v-1" />
        <path d="M12 14v-2" />
        <path d="M5 22h14" />
        <path d="M5 22V8l7-6 7 6v14" />
      </svg>
    ),
  },
];

export const ServicesSection = () => {
  const { t } = useLang();
  return (
    <div className="py-16 lg:py-24" id="services">
      <div className="container">
        <SectionHeader
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
            <TiltCard>
            <Card className="px-6 py-6">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex p-2 rounded-lg text-gray-900 mb-4">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl text-white mb-2">
                {t.services.items[i].title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {t.services.items[i].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.services.items[i].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
            </TiltCard>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 px-8 h-12 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            {t.services.cta}
          </button>
        </div>
      </div>
    </div>
  );
};
