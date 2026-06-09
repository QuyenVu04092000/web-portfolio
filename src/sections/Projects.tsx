"use client";

import vdental from "@/assets/images/vdental.png";
import lothashop from "@/assets/images/lothashop.png";
import psa from "@/assets/images/psa.png";
import wetax from "@/assets/images/wetax.png";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { useLang } from "@/i18n/LangContext";
import { ScrollReveal } from "@/components/ScrollReveal";

const projectsMeta = [
  { company: "Webcash Vietnam", year: "2025", title: "WeTax", link: "https://invoice.wetax.com.vn/", image: wetax },
  { company: "MLTech Soft", year: "2024", title: "VDental", link: "https://vdental.ai/vi", image: vdental },
  { company: "MLTech Soft", year: "2023", title: "Lothashop", link: "https://www.lothashop.vn/", image: lothashop },
  { company: "MLTech Soft", year: "2023", title: "PSA-CMS", link: "https://psa-cms.mltechsoft.com", image: psa },
];

export const ProjectsSection = () => {
  const { t } = useLang();
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {projectsMeta.map((project, projectIndex) => (
            <ScrollReveal key={project.title} delay={0.1} direction="up">
            <Card
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky overflow-hidden"
              style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 relative">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {t.projects.items[projectIndex].results.map((result) => (
                      <li
                        key={result}
                        className="flex gap-2 md:text-base text-sm text-white/50"
                      >
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <button
                      className="bg-white text-gray-950 h-12 w-full md:w-auto px-6
                rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 "
                    >
                      <span>{t.projects.visitSite}</span>
                      <ArrowUpRightIcon className="size-4 " />
                    </button>
                  </a>
                </div>
                <div className="relative h-[240px] md:h-[320px] lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mt-8 lg:mt-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-left-top rounded-xl "
                  />
                </div>
              </div>
            </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
