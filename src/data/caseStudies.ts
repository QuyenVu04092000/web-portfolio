/**
 * Case study data entries.
 * draft: true  →  route not generated, card not shown on home page.
 * All TODO(Buck) items are code comments only — never rendered on the live site.
 */

export interface CaseStudyEntry {
  slug: string;
  draft?: boolean;
  title: string;
  company: string;
  role: string;
  timeline: string;
  techStack: string;
  summary: string;
  context: string;
}

export const caseStudies: CaseStudyEntry[] = [
  {
    slug: "wetax",
    title: "WeTax — Enterprise E-Invoicing",
    company: "Webcash Vietnam",
    role: "Senior Frontend Developer",
    timeline: "03/2025 – Present",
    techStack: "Next.js · TypeScript · React Query · Zustand · WebSocket · Tailwind CSS",
    summary: "High-scale e-invoicing platform for enterprise clients",
    context:
      "WeTax is a high-scale e-invoicing platform at Webcash Vietnam handling tens of millions of invoices for enterprise clients.",
  },
  {
    slug: "ecommerce-payments",
    draft: true, // TODO(Buck): fill in — payment gateways used, checkout flow, pending/failed/timeout states, duplicate-submit prevention, payment callback/redirect handling, shipping integration
    title: "E-commerce Payments",
    company: "MLTech Soft",
    role: "Middle Frontend Developer",
    timeline: "2022 – 2024",
    techStack: "React · TypeScript · Redux",
    summary: "High-traffic e-commerce platform with third-party payment and shipping integration",
    context:
      "High-traffic e-commerce platform built for multiple client projects at MLTech Soft.",
  },
  {
    slug: "digisale",
    draft: true, // TODO(Buck): fill in — in-house component library (no external UI kit), how components/tokens were structured, performance measurement method
    title: "DigiSale — Distributor Management System",
    company: "MLTech Soft",
    role: "Senior Frontend Developer",
    timeline: "2024 – 2025",
    techStack: "React · TypeScript · Redux · Custom Design System",
    summary: "Distributor Management System rebuilt with a custom in-house component library",
    context:
      "DigiSale is a Distributor Management System with a custom in-house component library at MLTech Soft.",
  },
];
