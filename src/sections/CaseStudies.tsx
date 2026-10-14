"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useLang } from "@/i18n/LangContext";

export const CaseStudiesSection = () => {
  const { t } = useLang();
  const p = t.projects;

  return (
    <section aria-label="Case studies and projects" className="py-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow={p.eyebrow}
          title={p.title}
          description={p.description}
        />

        {/* Case study cards */}
        <div className="mt-12 flex flex-col gap-6">
          {p.items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1} direction="up">
              <Card className="px-8 py-8 md:px-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                        {item.company}
                      </span>
                      <span className="text-white/20">·</span>
                      <span className="text-white/40 text-xs">{item.role}</span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl">{item.title}</h3>
                    <p className="mt-2 text-white/60 text-sm md:text-base">{item.summary}</p>

                    {/* Tech chips */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.techChips.map((chip) => (
                        <span
                          key={chip}
                          className="px-3 py-1 rounded-full text-xs font-medium border border-white/15 text-white/70 bg-white/5"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    {/* Results */}
                    <ul className="mt-5 flex flex-col gap-1.5">
                      {item.results.map((result) => (
                        <li key={result} className="flex gap-2 text-sm text-white/60">
                          <span className="text-emerald-300 shrink-0 mt-0.5">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="shrink-0">
                    <a
                      href={item.link}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 px-5 h-10 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
                    >
                      {p.readCaseStudy}
                      <ArrowUpRightIcon className="size-4" />
                    </a>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Other projects — compact cards */}
        <div className="mt-16">
          <h3 className="font-serif text-xl md:text-2xl mb-8">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {p.otherProjects.map((proj, i) => (
              <ScrollReveal key={proj.title} delay={i * 0.1} direction="up">
                <Card className="px-6 py-6 h-full flex flex-col gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                        {proj.company}
                      </span>
                      <span className="text-white/40 text-xs">{proj.role}</span>
                    </div>
                    <h4 className="font-serif text-lg">{proj.title}</h4>
                    <p className="text-white/60 text-sm mt-2 leading-relaxed">{proj.summary}</p>
                  </div>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.techChips.map((chip) => (
                      <span
                        key={chip}
                        className="px-2.5 py-1 rounded-full text-xs font-medium border border-white/15 text-white/60 bg-white/5"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  {("link" in proj) && (
                    <a
                      href={(proj as { link: string }).link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 hover:text-white transition-colors mt-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 rounded"
                    >
                      {p.visitSite}
                      <ArrowUpRightIcon className="size-3.5" />
                    </a>
                  )}
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
