"use client";

import { SimpleProjectLayout } from "@/components/SimpleProjectLayout";

export default function VDental() {
  return (
    <SimpleProjectLayout
      data={{
        title: "VDental",
        company: "MLTech Soft",
        role: "Middle Frontend Engineer",
        timeline: "2024",
        platform: "Web",
        tech: "Next.js · TypeScript · Tailwind CSS · i18n",
        overview:
          "Web platform connecting U.S.-based patients with dental clinics in Vietnam. Supports bilingual (EN/VI) appointment booking, clinic browsing, and appointment management.",
        whatIBuilt: [
          "Built the multi-step appointment booking flow with client-side validation and step navigation",
          "Implemented EN/VI internationalization across all pages and dynamic content",
          "Built clinic listing, search, and detail pages",
          "Built patient account screens: appointment history, profile management, and booking status",
        ],
        outcome: "Shipped to production at vdental.ai.",
        liveUrl: "https://vdental.ai/vi",
        nextProject: { label: "PSA-CMS", href: "/web-portfolio/projects/psa" },
      }}
    />
  );
}
