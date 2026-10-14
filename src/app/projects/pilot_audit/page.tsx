"use client";

import { SimpleProjectLayout } from "@/components/SimpleProjectLayout";

export default function PilotAudit() {
  return (
    <SimpleProjectLayout
      data={{
        title: "Pilot Audit",
        company: "PSA International",
        role: "Middle Frontend Engineer",
        timeline: "2023 – 2025",
        platform: "iPad · PadOS",
        tech: "Swift · PadOS · MQTT",
        overview:
          "Native iPad app for PSA International pilots to view and track their audit records. Provides real-time schedule notifications and full audit history with score breakdowns.",
        whatIBuilt: [
          "Built the audit results list and detail screens with score breakdown and auditor remarks",
          "Built the audit history view with chronological performance tracking",
          "Built the audit schedule screen with status indicators: pending, in progress, completed",
          "Implemented the MQTT client for live schedule updates and audit notifications",
        ],
        outcome: "Deployed to PSA International pilots in production.",
        prevProject: { label: "MydigitalPA", href: "/web-portfolio/projects/mydigitalpa" },
        nextProject: { label: "Career Guidance", href: "/web-portfolio/projects/career" },
      }}
    />
  );
}
