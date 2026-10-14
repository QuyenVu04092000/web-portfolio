"use client";

import career from "@/assets/images/career.png";
import { ProjectDetailLayout, type ProjectDetailData } from "@/components/ProjectDetailLayout";

const data: ProjectDetailData = {
  title: "Career Guidance",
  company: "LOF",
  role: "Junior Frontend Engineer",
  timeline: "2022",
  platform: "Mobile · iOS & Android",
  summary: "Career guidance app with real-time chat, multiple-choice assessments, and a learning progress dashboard.",
  tech: "Flutter · BLoC / Cubit · Socket.io · Dart",
  techChips: ["Flutter", "BLoC/Cubit", "Socket.io", "Dart"],
  coverImage: career,
  coverImageAlt: "Career Guidance mobile app",
  myScope: "Built from scratch",
  overview:
    "Career Guidance is a Flutter app that helps users explore career paths through live chat with advisors, quizzes, and a personal progress dashboard. I built the app as a junior developer, working across chat, assessment, and dashboard features.",
  whatIBuilt: [
    "Built the real-time chat and live-chat screens using Socket.io — message delivery, typing indicators, and read receipts.",
    "Built the multiple-choice assessment flow: question rendering, answer selection, submission, and result summary.",
    "Built the learning progress dashboard: completed assessments, scores, and recommended next steps.",
    "Implemented BLoC / Cubit state management across all features for predictable state transitions.",
  ],
  resultsNote: "Shipped to production on iOS and Android.",
  prevProject: { label: "Pilot Audit", href: "/web-portfolio/projects/pilot_audit" },
};

export default function CareerGuidance() {
  return <ProjectDetailLayout data={data} />;
}
