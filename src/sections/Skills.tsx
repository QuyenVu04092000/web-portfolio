"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { useLang } from "@/i18n/LangContext";
import { ScrollReveal } from "@/components/ScrollReveal";

export const SkillsSection = () => {
  const { t } = useLang();
  const s = t.skills;

  return (
    <section aria-label="Technical Skills" className="py-16 lg:py-24" id="skills">
      <div className="container">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} description="" />
        <div className="mt-12 flex flex-col gap-6">
          {s.groups.map((group, i) => (
            <ScrollReveal key={group.name} delay={i * 0.07} direction="up">
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <span className="shrink-0 w-44 text-sm font-semibold text-white/50 pt-1">
                  {group.name}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                        item.startsWith("TODO(Buck)")
                          ? "border-amber-400/40 text-amber-300/60 bg-amber-400/5"
                          : "border-white/15 text-white/80 bg-white/5 hover:bg-white/10"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* AI tools note */}
        <ScrollReveal delay={0.5} direction="up">
          <div className="mt-10 border border-emerald-300/20 rounded-2xl px-6 py-4 bg-emerald-300/5">
            <p className="text-white/60 text-sm">
              <span className="text-emerald-300 font-medium">AI-assisted development — </span>
              {s.aiNote}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
