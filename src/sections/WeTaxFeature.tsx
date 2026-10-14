"use client";

import { useLang } from "@/i18n/LangContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

// TODO(Buck): confirm < 2 s listing load and 0 tab-lock events before re-adding
const metrics = [
  { value: "~90%", label: "less PDF rendering time" },
  { value: "Tens of millions", label: "e-invoices in production" },
];

export const WeTaxFeatureSection = () => {
  const { locale } = useLang();

  const copy = {
    en: {
      eyebrow: "Featured Case Study",
      title: "WeTax — Enterprise E-Invoicing",
      context:
        "WeTax is a high-scale e-invoicing platform at Webcash Vietnam handling tens of millions of invoices for enterprise clients. I am responsible for the frontend architecture of WeTax.",
      cta: "Read full case study",
      diagramTitle: "Data Flow Architecture",
    },
    vi: {
      eyebrow: "Case Study nổi bật",
      title: "WeTax — Hóa đơn điện tử doanh nghiệp",
      context:
        "WeTax là nền tảng hóa đơn điện tử quy mô lớn tại Webcash Vietnam, xử lý hàng chục triệu hóa đơn cho khách hàng doanh nghiệp. Tôi phụ trách kiến trúc frontend của WeTax.",
      cta: "Đọc case study đầy đủ",
      diagramTitle: "Kiến trúc luồng dữ liệu",
    },
  };

  const c = copy[locale];

  return (
    <section aria-label="WeTax case study" className="py-16 lg:py-24" id="wetax">
      <div className="container">
        <ScrollReveal direction="up">
          <div className="bg-gray-800 border border-white/10 rounded-3xl overflow-hidden">
            {/* Header */}
            <div className="px-5 pt-7 md:px-12 md:pt-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent mb-3">
                {c.eyebrow}
              </span>
              <h2 className="font-serif text-2xl md:text-4xl">{c.title}</h2>
              <p className="mt-3 text-white/60 md:text-lg max-w-2xl">{c.context}</p>
            </div>

            {/* Metrics */}
            <div className="mt-8 px-5 md:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {metrics.map((m) => (
                  <div key={m.label} className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                    <p className="font-serif text-2xl md:text-3xl bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                      {m.value}
                    </p>
                    <p className="text-white/50 text-xs mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture diagram */}
            <div className="mt-8 px-5 md:px-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                {c.diagramTitle}
              </p>
              <div className="overflow-x-auto" role="img" aria-label="Data flow: UI components call custom hooks, which interact with React Query cache and REST API. A separate WebSocket channel pushes events into the notification store, which updates UI.">
                <svg
                  viewBox="0 0 760 200"
                  className="w-full min-w-[520px] max-w-2xl"
                  aria-hidden="true"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Defs */}
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6ee7b7" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                    <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L8,3 z" fill="rgba(255,255,255,0.3)" />
                    </marker>
                    <marker id="arrow-ws" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L8,3 z" fill="#6ee7b7" />
                    </marker>
                  </defs>

                  {/* Row 1: UI → Hooks → React Query → REST API */}
                  {/* UI Box */}
                  <rect x="10" y="30" width="110" height="44" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" />
                  <text x="65" y="56" textAnchor="middle" fill="white" fontSize="12" fontFamily="sans-serif">UI Components</text>

                  <line x1="120" y1="52" x2="158" y2="52" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" markerEnd="url(#arrow)" />
                  <text x="139" y="46" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="sans-serif">calls</text>

                  {/* Hooks Box */}
                  <rect x="160" y="30" width="110" height="44" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" />
                  <text x="215" y="56" textAnchor="middle" fill="white" fontSize="12" fontFamily="sans-serif">Custom Hooks</text>

                  <line x1="270" y1="52" x2="308" y2="52" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" markerEnd="url(#arrow)" />
                  <text x="289" y="46" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="sans-serif">reads</text>

                  {/* React Query Cache */}
                  <rect x="310" y="30" width="130" height="44" rx="8" fill="rgba(110,231,183,0.08)" stroke="rgba(110,231,183,0.3)" />
                  <text x="375" y="50" textAnchor="middle" fill="#6ee7b7" fontSize="12" fontFamily="sans-serif">React Query</text>
                  <text x="375" y="65" textAnchor="middle" fill="rgba(110,231,183,0.6)" fontSize="10" fontFamily="sans-serif">cache + bg refetch</text>

                  <line x1="440" y1="52" x2="478" y2="52" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" markerEnd="url(#arrow)" />
                  <text x="459" y="46" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="sans-serif">fetch</text>

                  {/* REST API */}
                  <rect x="480" y="30" width="100" height="44" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" />
                  <text x="530" y="50" textAnchor="middle" fill="white" fontSize="12" fontFamily="sans-serif">REST API</text>
                  <text x="530" y="65" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="sans-serif">(Java backend)</text>

                  {/* Row 2: WebSocket → Notification Store → UI */}
                  {/* WebSocket Server */}
                  <rect x="10" y="130" width="110" height="44" rx="8" fill="rgba(56,189,248,0.08)" stroke="rgba(56,189,248,0.3)" />
                  <text x="65" y="150" textAnchor="middle" fill="#38bdf8" fontSize="12" fontFamily="sans-serif">WebSocket</text>
                  <text x="65" y="165" textAnchor="middle" fill="rgba(56,189,248,0.6)" fontSize="10" fontFamily="sans-serif">back-off reconnect</text>

                  <line x1="120" y1="152" x2="308" y2="152" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrow-ws)" />
                  <text x="214" y="146" textAnchor="middle" fill="rgba(56,189,248,0.6)" fontSize="9" fontFamily="sans-serif">events → setQueryData</text>

                  {/* Notification Store (Zustand) */}
                  <rect x="310" y="130" width="130" height="44" rx="8" fill="rgba(56,189,248,0.08)" stroke="rgba(56,189,248,0.25)" />
                  <text x="375" y="150" textAnchor="middle" fill="#38bdf8" fontSize="12" fontFamily="sans-serif">Notification Store</text>
                  <text x="375" y="165" textAnchor="middle" fill="rgba(56,189,248,0.5)" fontSize="10" fontFamily="sans-serif">(Zustand)</text>

                  <line x1="440" y1="152" x2="478" y2="152" stroke="rgba(56,189,248,0.5)" strokeWidth="1.5" markerEnd="url(#arrow-ws)" />

                  {/* UI badge */}
                  <rect x="480" y="130" width="100" height="44" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" />
                  <text x="530" y="150" textAnchor="middle" fill="white" fontSize="12" fontFamily="sans-serif">UI Components</text>
                  <text x="530" y="165" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="sans-serif">badge / toast</text>

                  {/* Legend */}
                  <line x1="610" y1="44" x2="630" y2="44" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <text x="635" y="48" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="sans-serif">HTTP</text>
                  <line x1="610" y1="60" x2="630" y2="60" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 3" />
                  <text x="635" y="64" fill="rgba(56,189,248,0.6)" fontSize="9" fontFamily="sans-serif">WS push</text>
                </svg>
              </div>
            </div>

            {/* CTA */}
            <div className="px-5 py-7 md:px-12 md:py-10">
              <a
                href="/web-portfolio/projects/wetax"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 px-6 h-12 rounded-xl font-semibold hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              >
                <span>{c.cta}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
