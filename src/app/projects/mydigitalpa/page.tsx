"use client";

import mydigitalpa from "@/assets/images/mydigitalpa.png";
import { ProjectDetailLayout, type ProjectDetailData } from "@/components/ProjectDetailLayout";

const data: ProjectDetailData = {
  title: "MydigitalPA",
  company: "PSA International",
  role: "Middle Frontend Engineer",
  timeline: "2023 – 2025",
  platform: "iPad · iPadOS",
  summary: "Native iOS app for PSA International marine pilots — maintained and extended across job management, vessel information, MQTT messaging, and offline sync.",
  tech: "Swift · RxSwift / RxCocoa · MVVM + Coordinator · RealmSwift · MQTTClient · Alamofire · SnapKit · Firebase",
  techChips: ["Swift", "RxSwift", "MVVM+Coordinator", "RealmSwift", "MQTT", "Alamofire"],
  coverImage: mydigitalpa,
  coverImageAlt: "MydigitalPA pilot operations app",
  client: "PSA International",
  myScope: "Maintained & extended",
  overview:
    "MydigitalPA is a native iPadOS app used by PSA International pilots to manage their daily operations: job tracking, vessel and port information, news, licence documents, and MQTT-driven real-time updates. I maintained and extended the existing Swift codebase built on MVVM + Coordinator, with incremental Realm sync for offline use and MQTTClient for live operational events.",
  whatIBuilt: [
    "Maintained and extended all major modules: dashboard, jobs, vessels and vessel detail, port map, news with PDF viewer, feedback and comments, incident reporting, settings, and onboarding.",
    "Extended the jobs module with new job type views and updated field layouts matching backend schema changes.",
    "Fixed bugs in the MQTT messaging layer: auto-reconnect on network loss and retry handling for failed message deliveries.",
    "Fixed bugs in the incremental Realm sync: per data-type sync cursors, conflict resolution when the backend returned out-of-order updates.",
    "Maintained the Google Maps integration with tile overlay and marker display for port zones.",
  ],
  technicalHighlights: [
    {
      problem: "MQTT connection drops on intermittent network — pilots miss live job updates",
      approach: (
        <>
          The existing MQTT hook had no reconnect logic: on disconnect, the connection was simply lost.
          Added auto-reconnect with exponential backoff inside the RxSwift MQTT wrapper: a retry scheduler
          fires on disconnect events, re-establishes the connection, and re-subscribes to the topic list.
          A status observable exposes the connection state to the UI so pilots see a &quot;Reconnecting…&quot; banner
          rather than silently stale data.
        </>
      ),
      result: "Connection resumes automatically after network recovery; pilots receive live updates without manually restarting the app.",
    },
    {
      problem: "Incremental Realm sync dropping updates when the backend returned out-of-order records",
      approach: (
        <>
          The sync used a simple last-updated cursor per data type. When the backend returned records
          with timestamps earlier than the cursor (e.g., backfilled records), they were skipped and
          never written to Realm. Fixed by switching to a write-through approach: all incoming records
          are upserted into Realm, and the cursor only advances when a full page is received, not per
          record. Realm&apos;s primary-key upsert handles duplicates safely.
        </>
      ),
      result: "No missing records after sync; offline mode reflects the correct data set.",
    },
  ],
  resultsNote: "Deployed to PSA International pilots in production.",
  prevProject: { label: "SFA · DigiSale", href: "/web-portfolio/projects/sfa" },
  nextProject: { label: "Pilot Audit", href: "/web-portfolio/projects/pilot_audit" },
};

export default function MydigitalPA() {
  return <ProjectDetailLayout data={data} />;
}
