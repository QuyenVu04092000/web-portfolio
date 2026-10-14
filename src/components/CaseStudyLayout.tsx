"use client";

import { ReactNode } from "react";
import { Header } from "@/sections/Header";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

interface ResultItem {
  value: string;
  label: string;
}

interface SectionItem {
  title: string;
  body: ReactNode;
}

interface CaseStudyData {
  title: string;
  company: string;
  role: string;
  timeline: string;
  techStack: string;
  context?: ReactNode;
  myRole?: ReactNode;
  architectureHeading?: string;
  architectureDiagram?: ReactNode;
  architectureCaption?: string;
  statesTable?: ReactNode;
  hardProblems?: SectionItem[];
  asyncAndErrors?: SectionItem[];
  performance?: SectionItem[];
  results?: ResultItem[];
  resultsNote?: string;
  whatNextHeading?: string;
  whatNext?: ReactNode;
  prevCase?: { label: string; href: string };
  nextCase?: { label: string; href: string };
}

function SectionBlock({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div className="mb-12">
      <h2 className="font-serif text-xl md:text-2xl mb-6 text-white">{heading}</h2>
      {children}
    </div>
  );
}

function ProblemList({ items }: { items: SectionItem[] }) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <div key={item.title}>
          <h3 className="font-semibold text-white mb-2">{item.title}</h3>
          <div className="text-white/60 text-sm md:text-base leading-relaxed">{item.body}</div>
        </div>
      ))}
    </div>
  );
}

export function CaseStudyLayout({ data }: { data: CaseStudyData }) {
  return (
    <div className="min-h-screen">
      <Header activeId="projects" />

      {/* Hero */}
      <div className="pt-32 md:pt-48 pb-12 md:pb-16 border-b border-white/10">
        <div className="container max-w-4xl">
          <a
            href="/web-portfolio/"
            className="inline-flex items-center gap-1.5 text-white/40 text-sm hover:text-white/60 transition-colors mb-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30 rounded"
          >
            ← Home
          </a>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
              {data.company}
            </span>
            <span className="text-white/20">·</span>
            <span className="text-white/40 text-xs">{data.role}</span>
            <span className="text-white/20">·</span>
            <span className="text-white/40 text-xs">{data.timeline}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide mb-4">{data.title}</h1>
          <p className="text-white/50 text-sm">{data.techStack}</p>
        </div>
      </div>

      {/* Body */}
      <div className="container max-w-4xl py-16">
        {data.context && (
          <SectionBlock heading="Context">
            <div className="text-white/60 text-sm md:text-base leading-relaxed">{data.context}</div>
          </SectionBlock>
        )}

        {data.myRole && (
          <SectionBlock heading="My role">
            <div className="text-white/60 text-sm md:text-base leading-relaxed">{data.myRole}</div>
          </SectionBlock>
        )}

        {data.architectureDiagram && (
          <SectionBlock heading={data.architectureHeading ?? "Architecture"}>
            {data.architectureCaption && (
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                {data.architectureCaption}
              </p>
            )}
            {data.architectureDiagram}
          </SectionBlock>
        )}

        {data.statesTable && (
          <SectionBlock heading="Order & payment states">
            {data.statesTable}
          </SectionBlock>
        )}

        {data.hardProblems && data.hardProblems.length > 0 && (
          <SectionBlock heading="Hard problems">
            <ProblemList items={data.hardProblems} />
          </SectionBlock>
        )}

        {data.asyncAndErrors && data.asyncAndErrors.length > 0 && (
          <SectionBlock heading="Async & error handling">
            <ProblemList items={data.asyncAndErrors} />
          </SectionBlock>
        )}

        {data.performance && data.performance.length > 0 && (
          <SectionBlock heading="Performance">
            <ProblemList items={data.performance} />
          </SectionBlock>
        )}

        {(data.results && data.results.length > 0 || data.resultsNote) && (
          <SectionBlock heading="Results">
            {data.results && data.results.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {data.results.map((r) => (
                  <div key={r.label} className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                    <p className="font-serif text-2xl md:text-3xl bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                      {r.value}
                    </p>
                    <p className="text-white/50 text-xs mt-1">{r.label}</p>
                  </div>
                ))}
              </div>
            )}
            {data.resultsNote && (
              <p className="text-white/60 text-sm md:text-base leading-relaxed">{data.resultsNote}</p>
            )}
          </SectionBlock>
        )}

        {data.whatNext && (
          <SectionBlock heading={data.whatNextHeading ?? "What I’d do next"}>
            <div className="text-white/60 text-sm md:text-base leading-relaxed">{data.whatNext}</div>
          </SectionBlock>
        )}

        {/* Navigation */}
        {(data.prevCase || data.nextCase) && (
          <div className="border-t border-white/10 pt-8 flex justify-between items-center">
            {data.prevCase ? (
              <a
                href={data.prevCase.href}
                className="inline-flex items-center gap-1.5 text-white/60 text-sm hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30 rounded"
              >
                ← {data.prevCase.label}
              </a>
            ) : (
              <span />
            )}
            {data.nextCase && (
              <a
                href={data.nextCase.href}
                className="inline-flex items-center gap-1.5 text-emerald-300 text-sm font-medium hover:text-emerald-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 rounded"
              >
                {data.nextCase.label}
                <ArrowUpRightIcon className="size-3.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
