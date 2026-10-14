"use client";

import pilot_audit from "@/assets/images/pilot_audit.png";
import { ProjectDetailLayout, type ProjectDetailData } from "@/components/ProjectDetailLayout";

const data: ProjectDetailData = {
  title: "Pilot Audit",
  company: "MLTech Soft",
  role: "Middle Frontend Developer",
  timeline: "2023",
  platform: "iPad · iPadOS",
  summary: "Native iOS audit app for PSA International — contributed to the checklist, result charting, and acknowledgement modules.",
  tech: "Swift · RxSwift · MVVM + Coordinator · RealmSwift · MQTTClient · Charts · Alamofire",
  techChips: ["Swift", "RxSwift", "MVVM+Coordinator", "RealmSwift", "Charts", "Alamofire"],
  coverImage: pilot_audit,
  coverImageAlt: "Pilot Audit app showing audit checklist",
  client: "PSA International",
  myScope: "Contributed",
  overview:
    "Pilot Audit is a native iPadOS app used by auditors assessing PSA International pilots. It covers the full audit lifecycle: viewing scheduled and in-progress audits, completing checklists, recording auditees, capturing acknowledgements, and reviewing result charts. I contributed to the Swift codebase across the checklist, chart rendering, and audit completion flow.",
  whatIBuilt: [
    "Maintained the audit lifecycle screens: scheduled audits list, pending audits, and completed audit history.",
    "Contributed to the checklist editing screen — inline text editing and check/uncheck state.",
    "Contributed to the Charts-based result views: audit result comparison chart and acknowledgement summary chart.",
    "Contributed to navigation flow in the audit completion sequence.",
    "Extended the auditees module with new fields added in a backend schema update.",
  ],
  prevProject: { label: "MydigitalPA", href: "/web-portfolio/projects/mydigitalpa" },
  nextProject: { label: "Career Guidance", href: "/web-portfolio/projects/career" },
};

export default function PilotAudit() {
  return <ProjectDetailLayout data={data} />;
}
