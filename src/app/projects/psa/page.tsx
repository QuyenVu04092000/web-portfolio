"use client";

import psa from "@/assets/images/psa_bg.png";
import { ProjectDetailLayout, type ProjectDetailData } from "@/components/ProjectDetailLayout";

const data: ProjectDetailData = {
  title: "PSA-CMS",
  company: "MLTech Soft",
  role: "Middle Frontend Engineer",
  timeline: "2023",
  platform: "Web",
  summary: "Web admin system for PSA International's marine pilot operations — extended and maintained across licensing, auditing, and content management modules.",
  tech: "React 16 · JavaScript · Redux + redux-form · React Router 5 · Bootstrap · Highcharts · Jest + Enzyme",
  techChips: ["React", "JavaScript", "Redux", "Highcharts", "Bootstrap", "Jest"],
  coverImage: psa,
  coverImageAlt: "PSA-CMS admin dashboard",
  client: "PSA International",
  myScope: "Extended & maintained",
  overview:
    "PSA-CMS is the web admin system used by PSA International to manage marine pilot licensing, operational audits, and content distributed to pilots via mobile apps. I joined an existing React 16 codebase and extended several modules with new reporting features and workflow screens, while maintaining and fixing bugs across the full system.",
  whatIBuilt: [
    "Extended the license upgrade workflow module: added progress reports, a completion-rate dashboard, duration tracking with Highcharts charts, and an event calendar showing upcoming assessments.",
    "Extended the audit module: added pilot audit record listing, checklist editing, workload tracking tables, and per-audit report views.",
    "Maintained and extended CRUD modules for news, users, vessels, zones/locations, and app configuration.",
    "Fixed bugs and extended reporting dashboards using Highcharts (line/bar charts for completion rates and duration distributions across pilot cohorts).",
    "Updated unit tests (Jest + Enzyme) for shared form, table, filter, and pagination components.",
  ],
  technicalHighlights: [
    {
      problem: "Multiple reporting views with inconsistent chart patterns across modules",
      approach: (
        <>
          The existing codebase had Highcharts instances scattered across modules with duplicated
          configuration. Extended reporting by building reusable chart wrapper components with shared
          default options (theme colours, tooltip format, axis labels) and module-specific overrides.
          New chart views plug into the wrapper without repeating boilerplate.
        </>
      ),
      result: "Consistent chart styling across all reporting screens; new chart types take a fraction of the time to add.",
    },
    {
      problem: "License upgrade workflow had many stages but no clear progress view for admins",
      approach: (
        <>
          Built a multi-stage timeline component that shows each stage of the license upgrade process
          (applied, documents submitted, assessment scheduled, results recorded, upgrade approved) with
          eligibility dates and the pilot&apos;s current stage highlighted. Data is fetched via Redux +
          redux-thunk and normalised before being passed to the timeline.
        </>
      ),
      result: "Admins can see a pilot's entire upgrade journey in one view without navigating multiple screens.",
    },
    {
      problem: "Jest + Enzyme tests were outdated and failing after dependency bumps",
      approach: (
        <>
          Updated enzyme adapters and test utilities, then rewrote failing tests for redux-form field
          components, reusable filter components, and pagination. Tests now mock redux-form context
          correctly and assert on rendered output rather than internal state.
        </>
      ),
      result: "Test suite passing; regressions in shared components caught before deployment.",
    },
  ],
  prevProject: { label: "VDental", href: "/web-portfolio/projects/vdental" },
  nextProject: { label: "SFA · DigiSale", href: "/web-portfolio/projects/sfa" },
};

export default function PSA() {
  return <ProjectDetailLayout data={data} />;
}
