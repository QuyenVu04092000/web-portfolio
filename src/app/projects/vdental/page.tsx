"use client";

import vdental from "@/assets/images/vdental.png";
import { ProjectDetailLayout, type ProjectDetailData } from "@/components/ProjectDetailLayout";

const data: ProjectDetailData = {
  title: "VDental",
  company: "MLTech Soft",
  role: "Senior Frontend Developer",
  timeline: "2024",
  platform: "Web",
  summary: "Dental booking platform connecting U.S.-based patients with clinics in Vietnam.",
  tech: "Next.js · TypeScript · Tailwind CSS · i18n",
  techChips: ["Next.js", "TypeScript", "Tailwind CSS"],
  coverImage: vdental,
  coverImageAlt: "VDental clinic website",
  liveUrl: "https://vdental.ai/vi",
  overview:
    "VDental is a dental booking platform connecting U.S.-based patients with clinics in Vietnam. I built the site with Next.js and TypeScript, implementing multilingual support for Vietnamese and English.",
  whatIBuilt: [
    "Built the full site structure with Next.js — appointment booking flow.",
    "Implemented multilingual routing and content switching (Vietnamese / English).",
    "Built a responsive layout with Tailwind CSS targeting mobile, tablet, and desktop viewports.",
  ],
  technicalHighlights: [
    {
      title: "Multi-step appointment booking",
      problem: "Booking spans several steps, and users move back and forth between them without losing what they entered.",
      problemLabel: "Challenge",
      approach: "The multi-step booking flow. All step data lives in one shared React state for the whole flow, so going back keeps previous answers, and each step is validated before moving on.",
      approachLabel: "What I built",
    },
    {
      title: "Follow-up (re-examination) appointment flow",
      problem: "A follow-up visit belongs to an earlier appointment — the patient should not have to re-enter all details.",
      problemLabel: "Challenge",
      approach: "The follow-up flow, which starts from a past appointment and pre-fills the same doctor and service, so the patient only picks a new date and time.",
      approachLabel: "What I built",
    },
  ],
  resultsNote: "Shipped to production at vdental.ai.",
  prevProject: { label: "Lothashop", href: "/web-portfolio/projects/lothashop" },
  nextProject: { label: "PSA-CMS", href: "/web-portfolio/projects/psa" },
};

export default function VDental() {
  return <ProjectDetailLayout data={data} />;
}
