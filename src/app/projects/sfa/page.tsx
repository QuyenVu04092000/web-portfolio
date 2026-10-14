"use client";

import sfa from "@/assets/images/sfa.png";
import { ProjectDetailLayout, type ProjectDetailData } from "@/components/ProjectDetailLayout";

const data: ProjectDetailData = {
  title: "SFA · DigiSale",
  company: "MLTech Soft",
  role: "Senior Frontend Developer",
  timeline: "2024",
  platform: "Mobile · iOS & Android",
  summary: "Field sales automation app for distributor sales reps, covering the full daily workflow: attendance, route planning, client visits, orders, and trade marketing.",
  tech: "React Native 0.74 · Expo 51 · TypeScript · NativeWind v4 · Zustand · Formik + Yup · axios",
  techChips: ["React Native", "Expo", "TypeScript", "NativeWind", "Zustand"],
  coverImage: sfa,
  coverImageAlt: "DigiSale field sales app",
  overview:
    "DigiSale is a React Native sales force automation app used by field reps at distributor companies. The app covers the full daily workflow: check-in, route management, client visits with photo evidence, order submission with promotion rules, and trade marketing registration. I built the app end-to-end using Expo 51 + Expo Router.",
  whatIBuilt: [
    "Home dashboard — KPI cards (sales index, visit count, product completion rate), attendance check-in with date/time tracking, daily summary.",
    "Routes module — daily route list, route detail with assigned clients, exchange and transfer route support.",
    "Clients module — client list and detail view, create client with address selection via bottom-sheet map; visit flow: Start visit → mission cards (tasks required per visit) → photo evidence capture (camera + gallery) → complete visit, with guard modal preventing accidental mid-visit exit.",
    "Orders module — product catalog with category filtering, cart management, order creation on behalf of another customer, promotion-eligible products highlighted inline, order list with status tracking.",
    "Trade marketing module — promotions and accumulation programs list and detail, display registration with camera upload (form + photo, Yup validation, multipart upload), customer tier progress tracking.",
  ],
  technicalHighlights: [
    {
      problem: "Visit flow with multi-step state and an accidental-exit guard",
      approach: (
        <>
          The visit flow has four ordered stages: Start → Missions → Photo capture → Complete. Each
          transition is explicit and validated. A guard modal intercepts any back-navigation while a
          visit is in progress, confirming whether the rep intends to discard progress. State is held
          in a Zustand slice so the flow survives navigation events within the visit without losing
          partial mission completions.
        </>
      ),
      result: "Mission completion data arrives intact at the server; partial progress survives navigation events.",
    },
    {
      problem: "Order creation with per-product promotion rules applied inline",
      approach: (
        <>
          Each product in the catalog may belong to one or more active promotions. The product card
          renders a promotion badge when a rule applies to the current quantity in the cart. Promotion
          logic (quantity thresholds, product-group eligibility) is evaluated client-side against the
          promotion list fetched at session start, keeping the catalog responsive without a server
          round-trip per item.
        </>
      ),
      result: "Reps see applicable promotions inline while browsing; order totals reflect promotion pricing before submission.",
    },
    {
      problem: "Display registration requiring camera upload in a validated form",
      approach: (
        <>
          The trade marketing display registration form combines text fields (Formik + Yup) with photo
          capture (image picker: camera or gallery). Photos are collected as local URIs and converted to
          a multipart/form-data payload on submit. Validation ensures at least one photo is attached
          before submission is allowed.
        </>
      ),
      result: "Display registrations arrive with photos and required metadata; invalid submissions are caught client-side.",
    },
  ],
  results: [
    { value: "5 modules", label: "built end-to-end" },
  ],
  prevProject: { label: "PSA-CMS", href: "/web-portfolio/projects/psa" },
  nextProject: { label: "MydigitalPA", href: "/web-portfolio/projects/mydigitalpa" },
};

export default function SFA() {
  return <ProjectDetailLayout data={data} />;
}
