"use client";

import { SimpleProjectLayout } from "@/components/SimpleProjectLayout";

export default function Mydigitalpa() {
  return (
    <SimpleProjectLayout
      data={{
        title: "MydigitalPA",
        company: "PSA International",
        role: "Middle Frontend Engineer",
        timeline: "2023 – 2025",
        platform: "iPad · PadOS",
        tech: "Swift · PadOS · MQTT",
        overview:
          "Native iPad app for PSA International pilots. Centralizes license upgrade tracking, job assignments, and port news in one place, with real-time notifications delivered over MQTT.",
        whatIBuilt: [
          "Built the license management screens: upgrade progress, required task checklist, and milestone reminders",
          "Built the job management list with vessel details, deadlines, and completion tracking",
          "Built the news feed for regulatory updates and port announcements",
          "Implemented the MQTT client for real-time job updates and push notifications",
        ],
        outcome: "Deployed to PSA International pilots in production.",
        prevProject: { label: "SFA", href: "/web-portfolio/projects/sfa" },
        nextProject: { label: "Pilot Audit", href: "/web-portfolio/projects/pilot_audit" },
      }}
    />
  );
}
