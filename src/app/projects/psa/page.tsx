"use client";

import psa from "@/assets/images/psa_bg.png";
import { ProjectDetailLayout, type ProjectDetailData } from "@/components/ProjectDetailLayout";

const data: ProjectDetailData = {
  title: "PSA-CMS",
  company: "MLTech Soft",
  role: "Middle Frontend Developer",
  timeline: "2023",
  platform: "Web",
  summary: "Web admin system for PSA International's marine pilot operations — extended and maintained across licensing, auditing, and content management modules.",
  tech: "React 16 · JavaScript · Redux + redux-form · React Router 5 · Bootstrap · Highcharts",
  techChips: ["React", "JavaScript", "Redux", "Highcharts"],
  coverImage: psa,
  coverImageAlt: "PSA-CMS admin dashboard",
  client: "PSA International",
  myScope: "Extended & maintained",
  overview:
    "PSA-CMS is the web admin system used by PSA International to manage marine pilot licensing, operational audits, and content distributed to pilots via mobile apps. I joined an existing React 16 codebase and extended several modules with new reporting features and workflow screens, while maintaining and fixing bugs across the full system.",
  whatIBuilt: [
    "Extended the license upgrade workflow module: added progress reports, a completion-rate dashboard, and duration tracking with Highcharts charts.",
    "Extended the audit module: added pilot audit record listing, checklist editing, and per-audit report views.",
    "Maintained and extended CRUD modules for news, users, and vessels.",
    "Fixed bugs and extended reporting dashboards using Highcharts (line/bar charts for completion rates and duration distributions across pilot cohorts).",
  ],
  resultsNote: "Used internally by PSA International's operations team. Access is restricted, so there is no public link or screenshots of live data.",
  prevProject: { label: "VDental", href: "/web-portfolio/projects/vdental" },
  nextProject: { label: "SFA · DigiSale", href: "/web-portfolio/projects/sfa" },
};

export default function PSA() {
  return <ProjectDetailLayout data={data} />;
}
