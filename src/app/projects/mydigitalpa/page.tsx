"use client";

import mydigitalpa from "@/assets/images/mydigitalpa.png";
import { ProjectDetailLayout, type ProjectDetailData } from "@/components/ProjectDetailLayout";

const data: ProjectDetailData = {
  title: "MydigitalPA",
  company: "MLTech Soft",
  role: "Middle Frontend Developer",
  timeline: "2023",
  platform: "iPad · iPadOS",
  summary: "Native iOS app for PSA International marine pilots — contributed across job management, vessel information, MQTT messaging, and offline sync modules.",
  tech: "Swift · RxSwift / RxCocoa · MVVM + Coordinator · RealmSwift · MQTTClient · Alamofire · SnapKit · Firebase",
  techChips: ["Swift", "RxSwift", "MVVM+Coordinator", "RealmSwift", "MQTT", "Alamofire"],
  coverImage: mydigitalpa,
  coverImageAlt: "MydigitalPA pilot operations app",
  client: "PSA International",
  myScope: "Contributed",
  overview:
    "MydigitalPA is a native iPadOS app used by PSA International pilots to manage their daily operations: job tracking, vessel and port information, news, licence documents, and MQTT-driven real-time updates. I contributed to the existing Swift codebase built on MVVM + Coordinator, with incremental Realm sync for offline use and MQTTClient for live operational events.",
  whatIBuilt: [
    "Maintained and extended all major modules: dashboard, jobs, vessels and vessel detail, port map, news with PDF viewer, feedback and comments, incident reporting, settings, and onboarding.",
    "Extended the jobs module with new job type views and updated field layouts matching backend schema changes.",
    "Contributed to the MQTT messaging layer and connection handling.",
    "Contributed to incremental Realm sync for offline data.",
    "Maintained the Google Maps integration with tile overlay and marker display for port zones.",
  ],
  prevProject: { label: "SFA · DigiSale", href: "/web-portfolio/projects/sfa" },
  nextProject: { label: "Pilot Audit", href: "/web-portfolio/projects/pilot_audit" },
};

export default function MydigitalPA() {
  return <ProjectDetailLayout data={data} />;
}
