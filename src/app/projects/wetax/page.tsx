"use client";

import wetax from "@/assets/images/wetax.png";
import { ProjectDetailLayout, type ProjectDetailData } from "@/components/ProjectDetailLayout";

const data: ProjectDetailData = {
  title: "WeTax",
  company: "Webcash Vietnam",
  role: "Senior Frontend Developer",
  timeline: "03/2025 – Present",
  platform: "Web",
  summary: "Enterprise e-invoicing platform handling tens of millions of invoices for Vietnamese businesses.",
  tech: "Next.js · TypeScript · React Query · Zustand · WebSocket · Tailwind CSS",
  techChips: ["Next.js", "TypeScript", "React Query", "Zustand", "WebSocket"],
  coverImage: wetax,
  coverImageAlt: "WeTax e-invoicing dashboard",
  myScope: "Frontend architecture & features",
  overview:
    "WeTax is an enterprise e-invoicing platform serving Vietnamese businesses. I own the frontend architecture — invoice creation, listing, and reporting workflows — and collaborate with the Java backend team on production issues and API design.",
  whatIBuilt: [
    "Next.js + TypeScript application with route segments for each major workflow (invoice creation, listing, reporting). Shared domain types defined centrally and used across feature modules and the API layer.",
    "Server-state management with React Query — structured query keys for filtering, pagination, and sorting; background refetching keeps listing pages current without a full spinner.",
    "Zustand slices for global UI state: selected invoice IDs for bulk actions, active filter panel, notification badge count.",
    "Real-time invoice status notifications via WebSocket — events dispatched into React Query's cache so listing pages update without a polling loop.",
    "Refactored the monolithic invoice editor into focused modules (InvoiceHeader, LineItemTable, TaxSummary, SubmitPanel) with custom hooks (useLineItems, useTaxCalculation).",
    "Invoice listing pages with React Query caching, server-side pagination, and list virtualization — only rows in the viewport render.",
  ],
  technicalHighlights: [
    {
      problem: "PDF generation was slow and blocked the browser tab",
      approach: (
        <>
          Moved PDF generation to{" "}
          <span className="text-white">wkhtmltopdf running on the Java backend</span>. The frontend
          sends a render request and receives a binary stream. Worked with the backend team on the API
          design and pipeline integration.
        </>
      ),
      result: "~90% less rendering time; browser tab no longer locks during PDF export.",
    },
    {
      problem: "The invoice editor was a large single-file component causing merge conflicts and blocking new invoice types",
      approach: (
        <>
          Refactored into{" "}
          <span className="text-white">InvoiceHeader</span>,{" "}
          <span className="text-white">LineItemTable</span>,{" "}
          <span className="text-white">TaxSummary</span>, and{" "}
          <span className="text-white">SubmitPanel</span> — each with its own custom hook (
          <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded text-sm">useLineItems</code>
          ,{" "}
          <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded text-sm">useTaxCalculation</code>
          ).
        </>
      ),
      result: "Each module is independently maintainable; new invoice types require one new module rather than editing the central file.",
    },
    {
      problem: "Invoice listing pages were slow for large accounts",
      approach: (
        <>
          Switched to server-side pagination and added list{" "}
          <span className="text-white">virtualization</span> — only rows in the viewport are in the
          DOM. React Query caching makes returning to a previously visited page instant.
        </>
      ),
    },
  ],
  results: [
    { value: "~90%", label: "less PDF rendering time" },
    { value: "Tens of millions", label: "e-invoices handled in production" },
  ],
  nextProject: { label: "Lothashop", href: "/web-portfolio/projects/lothashop" },
};

export default function WeTax() {
  return <ProjectDetailLayout data={data} />;
}
