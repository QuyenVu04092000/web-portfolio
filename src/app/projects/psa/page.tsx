"use client";

import { SimpleProjectLayout } from "@/components/SimpleProjectLayout";

export default function PsaCms() {
  return (
    <SimpleProjectLayout
      data={{
        title: "PSA-CMS",
        company: "PSA International",
        role: "Middle Frontend Engineer",
        timeline: "2023",
        platform: "Web",
        tech: "React · TypeScript · Redux · REST API",
        overview:
          "Internal content management system for PSA International. Administrators use it to manage pilot records, vessel schedules, and operational news, which is distributed to pilots via their mobile app.",
        whatIBuilt: [
          "Built the news management module: create, edit, and publish operational announcements",
          "Built vessel schedule and tracking records UI with sortable tabular data views",
          "Built pilot record management screens with search and filter",
          "Implemented role-based UI rendering based on admin permission level",
        ],
        outcome: "Delivered to PSA operations team and used in production.",
        prevProject: { label: "VDental", href: "/web-portfolio/projects/vdental" },
        nextProject: { label: "SFA", href: "/web-portfolio/projects/sfa" },
      }}
    />
  );
}
