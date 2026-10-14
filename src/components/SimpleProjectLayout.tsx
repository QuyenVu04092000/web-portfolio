"use client";

import { ReactNode } from "react";
import { Header } from "@/sections/Header";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

interface SimpleProjectData {
  title: string;
  company: string;
  role: string;
  timeline: string;
  platform: string;
  tech: string;
  overview: ReactNode;
  whatIBuilt: string[];
  challenge?: ReactNode;
  outcome?: string;
  liveUrl?: string;
  prevProject?: { label: string; href: string };
  nextProject?: { label: string; href: string };
}

function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div className="mb-12">
      <h2 className="font-serif text-xl md:text-2xl mb-5 text-white">{heading}</h2>
      {children}
    </div>
  );
}

export function SimpleProjectLayout({ data }: { data: SimpleProjectData }) {
  return (
    <div className="min-h-screen">
      <Header activeId="projects" />

      <div className="pt-32 md:pt-48 pb-12 md:pb-16 border-b border-white/10">
        <div className="container max-w-4xl">
          <a
            href="/web-portfolio/projects"
            className="inline-flex items-center gap-1.5 text-white/40 text-sm hover:text-white/60 transition-colors mb-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30 rounded"
          >
            ← All projects
          </a>
          <div className="flex flex-wrap gap-x-2 gap-y-1 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
              {data.company}
            </span>
            <span className="text-white/20">·</span>
            <span className="text-white/40 text-xs">{data.role}</span>
            <span className="text-white/20">·</span>
            <span className="text-white/40 text-xs">{data.timeline}</span>
            <span className="text-white/20">·</span>
            <span className="text-white/40 text-xs">{data.platform}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide mb-4">{data.title}</h1>
          <p className="text-white/50 text-sm">{data.tech}</p>
        </div>
      </div>

      <div className="container max-w-4xl py-16">
        <Section heading="Overview">
          <div className="text-white/60 text-sm md:text-base leading-relaxed">{data.overview}</div>
        </Section>

        <Section heading="What I built">
          <ul className="flex flex-col gap-3">
            {data.whatIBuilt.map((item) => (
              <li key={item} className="flex gap-3 text-sm md:text-base text-white/60 leading-relaxed">
                <span className="text-emerald-300 shrink-0 mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {data.challenge && (
          <Section heading="Challenge">
            <div className="text-white/60 text-sm md:text-base leading-relaxed">{data.challenge}</div>
          </Section>
        )}

        {data.outcome && (
          <Section heading="Outcome">
            <p className="text-white/60 text-sm md:text-base leading-relaxed">{data.outcome}</p>
            {data.liveUrl && (
              <a
                href={data.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-emerald-300 hover:text-emerald-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 rounded"
              >
                Visit live site
                <ArrowUpRightIcon className="size-3.5" />
              </a>
            )}
          </Section>
        )}

        {(data.prevProject || data.nextProject) && (
          <div className="border-t border-white/10 pt-8 flex justify-between items-center">
            {data.prevProject ? (
              <a
                href={data.prevProject.href}
                className="inline-flex items-center gap-1.5 text-white/60 text-sm hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30 rounded"
              >
                ← {data.prevProject.label}
              </a>
            ) : (
              <span />
            )}
            {data.nextProject && (
              <a
                href={data.nextProject.href}
                className="inline-flex items-center gap-1.5 text-emerald-300 text-sm font-medium hover:text-emerald-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 rounded"
              >
                {data.nextProject.label}
                <ArrowUpRightIcon className="size-3.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
