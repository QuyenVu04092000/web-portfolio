"use client";

import vdental from "@/assets/images/vdental.png";
import { ProjectDetailLayout, type ProjectDetailData } from "@/components/ProjectDetailLayout";

const data: ProjectDetailData = {
  title: "VDental",
  company: "MLTech Soft",
  role: "Middle Frontend Engineer",
  timeline: "2024",
  platform: "Web",
  summary: "Public-facing website for a Vietnamese dental clinic group, with multilingual support and a responsive layout.",
  tech: "Next.js · TypeScript · Tailwind CSS · i18n",
  techChips: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
  coverImage: vdental,
  coverImageAlt: "VDental clinic website",
  myScope: "Built from scratch",
  liveUrl: "https://vdental.ai/vi",
  overview:
    "VDental is the public website for a dental clinic group operating in Vietnam. I built the site with Next.js and TypeScript, implementing a custom i18n layer to serve both Vietnamese and English content from a single codebase.",
  whatIBuilt: [
    "Built the full site structure with Next.js App Router — service pages, clinic location pages, doctor profiles, and appointment booking.",
    "Implemented multilingual routing and content switching (Vietnamese / English) using a custom i18n context.",
    "Built a responsive layout with Tailwind CSS targeting mobile, tablet, and desktop viewports.",
    "Integrated a contact and appointment booking form with client-side validation.",
  ],
  resultsNote: "Shipped to production at vdental.ai.",
  prevProject: { label: "Lothashop", href: "/web-portfolio/projects/lothashop" },
  nextProject: { label: "PSA-CMS", href: "/web-portfolio/projects/psa" },
};

export default function VDental() {
  return <ProjectDetailLayout data={data} />;
}
