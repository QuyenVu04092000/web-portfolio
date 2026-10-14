"use client";

import { SimpleProjectLayout } from "@/components/SimpleProjectLayout";

export default function SFA() {
  return (
    <SimpleProjectLayout
      data={{
        title: "SFA · DigiSale",
        company: "MLTech Soft",
        role: "Middle Frontend Engineer",
        timeline: "2024",
        platform: "Mobile · iOS & Android",
        tech: "React Native · TypeScript · Redux",
        overview:
          "Sales force automation mobile app (DigiSale) for field sales agents. Supports client visit tracking, order submission, and performance reporting.",
        whatIBuilt: [
          "Built the client visit check-in and check-out flow with location tagging",
          "Built the order submission screens with product catalog browsing and cart management",
          "Built the sales performance dashboard with charts and daily visit summaries",
          "Integrated Redux for session state, cart data, and server sync management",
          "Deployed to Google Play Store and Apple App Store",
        ],
        outcome: "Shipped to production on both iOS and Android.",
        prevProject: { label: "PSA-CMS", href: "/web-portfolio/projects/psa" },
        nextProject: { label: "MydigitalPA", href: "/web-portfolio/projects/mydigitalpa" },
      }}
    />
  );
}
