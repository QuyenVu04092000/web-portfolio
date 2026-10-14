"use client";

import { SimpleProjectLayout } from "@/components/SimpleProjectLayout";

export default function Career() {
  return (
    <SimpleProjectLayout
      data={{
        title: "Career Guidance",
        company: "LOF",
        role: "Junior Frontend Engineer",
        timeline: "2022",
        platform: "Mobile · iOS & Android",
        tech: "Flutter · BLoC/Cubit · Socket.io",
        overview:
          "Career guidance and self-training app for LOF. Users complete skill assessments, connect with mentors over live chat, and track their professional development goals.",
        whatIBuilt: [
          "Built real-time chat and live-chat screens backed by Socket.io",
          "Built the quiz and multiple-choice assessment flow with answer tracking and scoring",
          "Built the progress dashboard showing completed modules, scores, and goal status",
        ],
        outcome: "Shipped to production for LOF users.",
        prevProject: { label: "Pilot Audit", href: "/web-portfolio/projects/pilot_audit" },
      }}
    />
  );
}
