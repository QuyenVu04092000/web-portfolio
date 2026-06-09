"use client";

import React from "react";
import { Header } from "@/sections/Header";
import Image from "next/image";
import { Card } from "@/components/Card";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import vdental from "@/assets/images/vdental.png";
import lothashop from "@/assets/images/lothashop.png";
import psa from "@/assets/images/psa_bg.png";
import wetax from "@/assets/images/wetax.png";
import sfa from "@/assets/images/sfa.png";
import career from "@/assets/images/career.png";
import mydigitalpa from "@/assets/images/mydigitalpa.png";
import pilot_audit from "@/assets/images/pilot_audit.png";
import { SectionHeader } from "@/components/SectionHeader";
import { useLang } from "@/i18n/LangContext";

const portfolioImages = [wetax, vdental, lothashop, psa];
const portfolioLinks = [
  "/web-portfolio/projects/wetax",
  "/web-portfolio/projects/vdental",
  "/web-portfolio/projects/lothashop",
  "/web-portfolio/projects/psa",
];
const portfolioMeta = [
  { company: "Webcash Vietnam", year: "2025" },
  { company: "MLTech Soft", year: "2024" },
  { company: "MLTech Soft", year: "2023" },
  { company: "MLTech Soft", year: "2023" },
];

const mobileImages = [sfa, mydigitalpa, pilot_audit, career];
const mobileLinks = [
  "/web-portfolio/projects/sfa",
  "/web-portfolio/projects/mydigitalpa",
  "/web-portfolio/projects/pilot_audit",
  "/web-portfolio/projects/career",
];
const mobileMeta = [
  { company: "MLTech Soft", year: "2024" },
  { company: "MLTech Soft", year: "2023" },
  { company: "MLTech Soft", year: "2023" },
  { company: "MLTech Soft", year: "2022" },
];

export default function Projects() {
  const { t } = useLang();
  const p = t.projectsPage;

  return (
    <div>
      <Header activeId="projects" />
      <section className="pb-16 py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip" id="projects">
        <div className="container">
          <SectionHeader eyebrow={p.eyebrow} title={p.title} description={p.description} />
          <div className="flex flex-col mt-10 gap-20 md:mt-20">
            {p.projects.map((project, projectIndex) => (
              <Card
                key={project.title}
                className="px-4 pt-8 pb-0 md:p-5 lg:p-5 sticky"
                style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
              >
                <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 lg:gap-6 md:gap-6">
                  <div className="md:col-span-1 lg:col-span-1">
                    <div className="relative w-full h-full">
                      <Image
                        src={portfolioImages[projectIndex]}
                        alt={project.title}
                        fill
                        className="rounded-xl object-cover object-left-top"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-1 lg:col-span-1">
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                          <span>{portfolioMeta[projectIndex].company}</span>
                          <span>&bull;</span>
                          <span>{portfolioMeta[projectIndex].year}</span>
                        </div>
                        <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                        <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                        <p className="mt-4 md:mt-5 text-sm md:text-base text-white/50">{project.description}</p>
                      </div>
                      <a href={portfolioLinks[projectIndex]}>
                        <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                          <span>{p.viewDetail}</span>
                          <ArrowUpRightIcon className="size-4" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="py-16 lg:py-24">
          <div className="container">
            <SectionHeader eyebrow={p.mobileEyebrow} title={p.mobileTitle} description={p.mobileDescription} />
            <div className="flex flex-col mt-10 gap-20 md:mt-20">
              {p.mobileProjects.map((project, projectIndex) => (
                <Card
                  key={project.title}
                  className="px-4 pt-8 pb-0 md:p-5 lg:p-5 sticky"
                  style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
                >
                  <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 lg:gap-6 md:gap-6 min-h-[374px]">
                    <div className="md:col-span-1 lg:col-span-1">
                      <Image
                        src={mobileImages[projectIndex]}
                        alt={project.title}
                        className="lg:mt-0 lg:h-full lg:w-auto rounded-xl md:h-full md:w-auto object-cover object-left-top bg-white"
                      />
                    </div>
                    <div className="md:col-span-1 lg:col-span-1">
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                            <span>{mobileMeta[projectIndex].company}</span>
                            <span>&bull;</span>
                            <span>{mobileMeta[projectIndex].year}</span>
                          </div>
                          <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                          <p className="mt-4 md:mt-5 text-sm md:text-base text-white/50">{project.description}</p>
                        </div>
                        <a href={mobileLinks[projectIndex]}>
                          <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                            <span>{p.viewDetail}</span>
                            <ArrowUpRightIcon className="size-4" />
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
