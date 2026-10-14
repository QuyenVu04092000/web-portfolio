"use client";

import pilot_audit from "@/assets/images/pilot_audit.png";
import { ProjectDetailLayout, type ProjectDetailData } from "@/components/ProjectDetailLayout";

const data: ProjectDetailData = {
  title: "Pilot Audit",
  company: "PSA International",
  role: "Middle Frontend Engineer",
  timeline: "2023 – 2025",
  platform: "iPad · iPadOS",
  summary: "Native iOS audit app for PSA International — maintained and extended the checklist, result charting, and acknowledgement modules.",
  tech: "Swift · RxSwift · MVVM + Coordinator · RealmSwift · MQTTClient · Charts · Alamofire",
  techChips: ["Swift", "RxSwift", "MVVM+Coordinator", "RealmSwift", "Charts", "Alamofire"],
  coverImage: pilot_audit,
  coverImageAlt: "Pilot Audit app showing audit checklist",
  client: "PSA International",
  myScope: "Maintained & extended",
  overview:
    "Pilot Audit is a native iPadOS app used by auditors assessing PSA International pilots. It covers the full audit lifecycle: viewing scheduled and in-progress audits, completing checklists, recording auditees, capturing acknowledgements, and reviewing result charts. I maintained and extended the Swift codebase, fixing bugs in the checklist, chart rendering, and audit completion flow.",
  whatIBuilt: [
    "Maintained the audit lifecycle screens: scheduled audits list, pending audits, and completed audit history.",
    "Fixed layout and data-binding bugs in the checklist editing screen — inline text editing and check/uncheck state now persist correctly to Realm.",
    "Fixed rendering issues in the Charts-based result views: audit result comparison chart and acknowledgement summary chart.",
    "Fixed navigation flow issues in the audit completion sequence: back-navigation during an active audit now correctly warns the auditor before discarding progress.",
    "Extended the auditees module with new fields added in a backend schema update.",
  ],
  technicalHighlights: [
    {
      problem: "Checklist edits not persisting after navigating away mid-audit",
      approach: (
        <>
          Checklist items were bound to a transient in-memory array that was reset on view lifecycle
          events. Moved the checklist state to Realm-backed objects so that each edit is written
          immediately via RxSwift binding. The view reloads from Realm on reappearance, making partial
          progress durable across navigation and app backgrounding.
        </>
      ),
      result: "Auditor&apos;s checklist progress is always saved; mid-audit navigation no longer loses data.",
    },
    {
      problem: "Charts-based result comparison view crashing on datasets with unequal lengths",
      approach: (
        <>
          The comparison chart passed two data series of unequal length (current audit vs. historical
          average) directly to the Charts library, which assumed equal-length arrays and indexed into
          nil. Fixed by padding the shorter series to match the longer one before passing to the chart,
          and added a guard so the chart renders an empty state rather than crashing when either series
          is empty.
        </>
      ),
      result: "Zero crashes from result chart rendering; empty-state handled gracefully.",
    },
  ],
  resultsNote: "Deployed to PSA International auditors in production.",
  prevProject: { label: "MydigitalPA", href: "/web-portfolio/projects/mydigitalpa" },
  nextProject: { label: "Career Guidance", href: "/web-portfolio/projects/career" },
};

export default function PilotAudit() {
  return <ProjectDetailLayout data={data} />;
}
