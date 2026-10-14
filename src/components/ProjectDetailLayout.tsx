"use client";

import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { Header } from "@/sections/Header";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface DetailSection {
  title: string;
  body: ReactNode;
}

export interface TechHighlight {
  title?: string;         // optional card heading above the labeled sections
  problem: string;
  problemLabel?: string;  // defaults to "Problem"
  approach: ReactNode;
  approachLabel?: string; // defaults to "Approach"
  result?: string;        // optional — section hidden when absent
  resultLabel?: string;   // defaults to "Result"
}

export interface ResultMetric {
  value: string;
  label: string;
}

export interface GalleryImage {
  src: StaticImageData;
  alt: string;
  caption?: string;
}

export interface ProjectDetailData {
  // Header
  title: string;
  company: string;
  role: string;
  timeline: string;
  platform: string;
  summary?: string;
  tech: string;
  techChips?: string[];
  liveUrl?: string;
  iosUrl?: string;
  androidUrl?: string;

  // Cover
  coverImage?: StaticImageData;
  coverImageAlt?: string;

  // Key facts (shown as grid when any field present)
  client?: string;
  teamSize?: string;
  myScope?: string;

  // Content sections — all optional; section hidden when absent
  overview?: ReactNode;
  whatIBuilt?: string[];

  // Detailed narrative sections (for WeTax-style deep-dives)
  technicalSections?: {
    heading: string;
    intro?: ReactNode;
    items: DetailSection[];
  }[];

  // 3-card Problem → Approach → Result highlights
  technicalHighlights?: TechHighlight[];

  // Architecture / flow diagram
  diagram?: ReactNode;
  diagramHeading?: string;
  diagramCaption?: string;

  // Extra reference table (e.g. Lothashop states)
  extraTable?: ReactNode;
  extraTableHeading?: string;

  // Screenshot gallery
  gallery?: GalleryImage[];

  // Outcome
  results?: ResultMetric[];
  resultsNote?: string;
  outcomeClosing?: ReactNode;

  // Lessons
  lessons?: ReactNode;

  // Navigation
  prevProject?: { label: string; href: string };
  nextProject?: { label: string; href: string };
}

// ─── Internal helpers ─────────────────────────────────────────────────────────

function Heading2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-serif text-xl md:text-2xl mb-5 text-white border-b border-white/10 pb-3">
      {children}
    </h2>
  );
}

function Block({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="mb-14">
      <Heading2>{heading}</Heading2>
      {children}
    </section>
  );
}

function KeyFact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-widest text-white/35 mb-1">{label}</dt>
      <dd className="text-sm text-white/80">{value}</dd>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function ProjectDetailLayout({ data }: { data: ProjectDetailData }) {
  const hasKeyFacts = !!(data.client || data.teamSize || data.myScope);
  const hasOutcome = !!(data.results?.length || data.resultsNote || data.outcomeClosing);

  return (
    <div className="min-h-screen">
      <Header activeId="projects" />

      {/* ── Page header ─────────────────────────────────────────────────── */}
      <div className="pt-32 md:pt-48 pb-12 md:pb-16 border-b border-white/10">
        <div className="container max-w-4xl">
          <a
            href="/web-portfolio/projects"
            className="inline-flex items-center gap-1.5 text-white/40 text-sm hover:text-white/60 transition-colors mb-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30 rounded"
          >
            ← All projects
          </a>

          {/* Metadata row */}
          <div className="flex flex-wrap gap-x-2 gap-y-1 mb-4 text-xs">
            <span className="font-bold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
              {data.company}
            </span>
            <span className="text-white/20">·</span>
            <span className="text-white/40">{data.role}</span>
            <span className="text-white/20">·</span>
            <span className="text-white/40">{data.timeline}</span>
            <span className="text-white/20">·</span>
            <span className="text-white/40">{data.platform}</span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl tracking-wide mb-3">{data.title}</h1>

          {data.summary && (
            <p className="text-white/60 text-base md:text-lg mb-4 leading-relaxed">{data.summary}</p>
          )}

          <p className="text-white/40 text-sm mb-5">{data.tech}</p>

          {/* Tech chips */}
          {data.techChips && data.techChips.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {data.techChips.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-white/15 text-white/70 bg-white/5"
                >
                  {chip}
                </span>
              ))}
            </div>
          )}

          {/* Action buttons */}
          {(data.liveUrl || data.iosUrl || data.androidUrl) && (
            <div className="flex flex-wrap gap-3">
              {data.liveUrl && (
                <a
                  href={data.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 h-10 rounded-xl bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Live site
                  <ArrowUpRightIcon className="size-3.5" />
                </a>
              )}
              {data.iosUrl && (
                <a
                  href={data.iosUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 h-10 rounded-xl border border-white/20 text-white/80 font-semibold text-sm hover:bg-white/5 transition-colors"
                >
                  App Store
                  <ArrowUpRightIcon className="size-3.5" />
                </a>
              )}
              {data.androidUrl && (
                <a
                  href={data.androidUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 h-10 rounded-xl border border-white/20 text-white/80 font-semibold text-sm hover:bg-white/5 transition-colors"
                >
                  Google Play
                  <ArrowUpRightIcon className="size-3.5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Cover image ──────────────────────────────────────────────────── */}
      {data.coverImage && (
        <div className="container max-w-5xl mt-10 mb-2">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-white/5">
            <Image
              src={data.coverImage}
              alt={data.coverImageAlt ?? data.title}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      )}

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <div className="container max-w-4xl py-14">

        {/* Key facts grid */}
        {hasKeyFacts && (
          <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-14 bg-white/[0.025] border border-white/10 rounded-2xl px-6 py-5">
            {data.client && <KeyFact label="Client" value={data.client} />}
            <KeyFact label="Role" value={data.role} />
            <KeyFact label="Timeline" value={data.timeline} />
            <KeyFact label="Platform" value={data.platform} />
            {data.teamSize && <KeyFact label="Team" value={data.teamSize} />}
            {data.myScope && <KeyFact label="My scope" value={data.myScope} />}
          </dl>
        )}

        {/* Overview */}
        {data.overview && (
          <Block heading="Overview">
            <div className="text-white/60 text-sm md:text-base leading-relaxed">{data.overview}</div>
          </Block>
        )}

        {/* What I built */}
        {data.whatIBuilt && data.whatIBuilt.length > 0 && (
          <Block heading="What I built">
            <ul className="flex flex-col gap-3">
              {data.whatIBuilt.map((item) => (
                <li key={item} className="flex gap-3 text-sm md:text-base text-white/60 leading-relaxed">
                  <span className="text-emerald-300 shrink-0 mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Block>
        )}

        {/* Detailed narrative sections (WeTax-style) */}
        {data.technicalSections?.map((section) => (
          <Block key={section.heading} heading={section.heading}>
            {section.intro && (
              <div className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
                {section.intro}
              </div>
            )}
            <div className="flex flex-col gap-8">
              {section.items.map((item) => (
                <div key={item.title}>
                  <h3 className="font-semibold text-white mb-3 text-base">{item.title}</h3>
                  <div className="text-white/60 text-sm md:text-base leading-relaxed">{item.body}</div>
                </div>
              ))}
            </div>
          </Block>
        ))}

        {/* Technical highlights */}
        {data.technicalHighlights && data.technicalHighlights.length > 0 && (
          <Block heading="Technical highlights">
            <div className="flex flex-col gap-5">
              {data.technicalHighlights.map((h, i) => (
                <div key={i} className="bg-white/[0.025] border border-white/10 rounded-2xl px-6 py-5">
                  {h.title && (
                    <p className="font-semibold text-white text-sm md:text-base mb-4">{h.title}</p>
                  )}
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-2">
                    {h.problemLabel ?? "Problem"}
                  </p>
                  <p className="font-medium text-white mb-4 text-sm md:text-base">{h.problem}</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300/50 mb-2">
                    {h.approachLabel ?? "Approach"}
                  </p>
                  <div className="text-white/60 text-sm leading-relaxed mb-4">{h.approach}</div>
                  {h.result !== undefined && (
                    <>
                      <p className="text-xs font-semibold uppercase tracking-widest text-sky-400/50 mb-2">
                        {h.resultLabel ?? "Result"}
                      </p>
                      <p className="text-white/70 text-sm">{h.result}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </Block>
        )}

        {/* Diagram / architecture */}
        {data.diagram && (
          <Block heading={data.diagramHeading ?? "Architecture"}>
            {data.diagramCaption && (
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                {data.diagramCaption}
              </p>
            )}
            {data.diagram}
          </Block>
        )}

        {/* Extra reference table */}
        {data.extraTable && (
          <Block heading={data.extraTableHeading ?? "Reference"}>
            {data.extraTable}
          </Block>
        )}

        {/* Screenshot gallery */}
        {data.gallery && data.gallery.length > 0 && (
          <Block heading="Screenshots">
            <div
              className={`grid gap-4 ${
                data.gallery.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
              }`}
            >
              {data.gallery.map((img) => (
                <figure key={img.alt} className="rounded-xl overflow-hidden bg-white/5">
                  <div className="relative aspect-[16/9]">
                    <Image src={img.src} alt={img.alt} fill className="object-cover object-top" />
                  </div>
                  {img.caption && (
                    <figcaption className="text-white/40 text-xs px-3 py-2">{img.caption}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          </Block>
        )}

        {/* Outcome */}
        {hasOutcome && (
          <Block heading="Outcome">
            {data.results && data.results.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {data.results.map((r) => (
                  <div
                    key={r.label}
                    className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4"
                  >
                    <p className="font-serif text-2xl md:text-3xl bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                      {r.value}
                    </p>
                    <p className="text-white/50 text-xs mt-1">{r.label}</p>
                  </div>
                ))}
              </div>
            )}
            {data.resultsNote && (
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4">{data.resultsNote}</p>
            )}
            {data.outcomeClosing && (
              <div className="text-white/60 text-sm md:text-base leading-relaxed">{data.outcomeClosing}</div>
            )}
          </Block>
        )}

        {/* Lessons */}
        {data.lessons && (
          <Block heading="Lessons">
            <div className="text-white/60 text-sm md:text-base leading-relaxed">{data.lessons}</div>
          </Block>
        )}

        {/* Prev / Next */}
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
