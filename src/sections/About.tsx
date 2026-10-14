"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { useLang } from "@/i18n/LangContext";

export const AboutSection = () => {
  const { t } = useLang();
  return (
    <section aria-label="About" className="py-16 lg:py-24" id="about">
      <div className="container">
        <SectionHeader
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          description=""
        />
        <div className="mt-8 max-w-3xl">
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            {t.about.descriptionShort}
          </p>
          <a
            href="/web-portfolio/about"
            className="inline-flex items-center gap-1.5 mt-5 text-emerald-300 font-medium hover:text-emerald-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 rounded"
          >
            More about me
            <ArrowUpRightIcon className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
