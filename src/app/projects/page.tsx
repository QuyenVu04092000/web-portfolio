"use client";

import React from "react";
import { Header } from "@/sections/Header";
import Image from "next/image";
import { Card } from "@/components/Card";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import vdental from "@/assets/images/vdental.png";
import lothashop from "@/assets/images/lothashop.png";
import psa from "@/assets/images/psa_bg.png";
import sfa from "@/assets/images/sfa.png";
import career from "@/assets/images/career.png";
import mydigitalpa from "@/assets/images/mydigitalpa.png";
import pilot_audit from "@/assets/images/pilot_audit.png";
import { SectionHeader } from "@/components/SectionHeader";
import { title } from "process";

const portfolioProjects = [
  {
    company: "MLTech Soft",
    year: "2024",
    title: "VDental",
    results: [
      {
        title:
          "VDental provides high quality dental services with a team of experienced doctors and modern equipment. The application helps users make appointments, advise on dental conditions and update the latest dental news.",
      },
    ],
    link: "/projects/vdental",
    image: vdental,
  },
  {
    company: "MLTech Soft",
    year: "2023",
    title: "Lothashop",
    results: [
      {
        title:
          "Super smart application helps customers buy products, accumulate reward points and register as a Lothamilk Personal Agent. Customers directly buy Lothamilk products for their own consumption or sell to other consumers with many attractive promotions and vouchers.",
      },
    ],
    link: "/projects/lothashop",
    image: lothashop,
  },
  {
    company: "MLTech Soft",
    year: "2023",
    title: "PSA-CMS",
    results: [
      {
        title:
          "Manage pilot information and manage content on the pilot's app including news, vessels,...",
      },
    ],
    link: "/projects/psa",
    image: psa,
  },
];

const mobileProjects = [
  {
    company: "MLTech Soft",
    year: "2024",
    title: "DigiSale Sales Force Automation (SFA)",
    results: [
      {
        title:
          "DigiSale is a sales force automation application that helps businesses manage their sales activities, track sales performance, and improve sales efficiency.",
      },
    ],
    link: "/projects/sfa",
    image: sfa,
  },
  {
    company: "MLTech Soft",
    year: "2023",
    title: "MydigitalPA",
    results: [
      {
        title:
          "App for pilots to manage license upgrading process, view jobs to be done, catch up news, receive notifications. It can used by Admin to manage pilots, manage jobs, manage news, send notifications.",
      },
    ],
    link: "/projects/mydigitalpa",
    image: mydigitalpa,
  },
  {
    company: "MLTech Soft",
    year: "2023",
    title: "Pilot Audit",
    results: [
      {
        title:
          "App for pilots to view their audit results, view their audit history, view their audit schedule, view their audit status, view their audit details.",
      },
    ],
    link: "/projects/pilot_audit",
    image: pilot_audit,
  },
  {
    company: "MLTech Soft",
    year: "2022",
    title: "Career Guidance App for LOF",
    results: [
      {
        title:
          "An app to develop a skill self-training that will enable users to connect and share knowledge, discover themselves and succeed professionally in the future.",
      },
    ],
    link: "/projects/career",
    image: career,
  },
];

export default function Projects() {
  return (
    <div>
      <Header activeId="projects" />
      <section
        className="pb-16 py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
        id="projects"
      >
        <div className="container">
          <SectionHeader
            eyebrow="All Projects"
            title="My Projects"
            description="Explore the wide range of projects I've worked on, showcasing my skills and experience."
          />
          <div className="flex flex-col mt-10 gap-20 md:mt-20">
            {portfolioProjects.map((project, projectIndex) => (
              <Card
                key={project.title}
                className="px-4 pt-8 pb-0 md:p-5 lg:p-5 sticky"
                style={{
                  top: `calc(64px + ${projectIndex * 40}px`,
                }}
              >
                <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 lg:gap-6 md:gap-6 min-h-[374px]">
                  <div className=" md:col-span-1 lg:col-span-1">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="lg:mt-0 lg:h-full lg:w-auto rounded-xl md:h-full md:w-auto object-cover object-left-top "
                    />
                  </div>
                  <div className=" md:col-span-1 lg:col-span-1">
                    <div className="flex flex-col justify-between h-full">
                      <div>
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
                          {project.results.map((result) => (
                            <li
                              key={result.title}
                              className="flex gap-2 md:text-base text-sm text-white/50"
                            >
                              {/* <CheckCircleIcon className="size-5 md:size-6" /> */}
                              <span>{result.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a href={project.link} target="_blank" rel="noreferrer">
                        <button
                          className="bg-white text-gray-950 h-12 w-full md:w-auto px-6
                rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 "
                        >
                          <span>View Detail</span>
                          <ArrowUpRightIcon className="size-4 " />
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
          <SectionHeader
            eyebrow="Other Projects"
            title="Mobile Projects"
            description="Explore the mobile applications I've developed, demonstrating my expertise in mobile technologies."
          />
          <div className="flex flex-col mt-10 gap-20 md:mt-20">
            {mobileProjects.map((project, projectIndex) => (
              <Card
                key={project.title}
                className="px-4 pt-8 pb-0 md:p-5 lg:p-5 sticky"
                style={{
                  top: `calc(64px + ${projectIndex * 40}px`,
                }}
              >
                <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 lg:gap-6 md:gap-6 min-h-[374px]">
                  <div className=" md:col-span-1 lg:col-span-1">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="lg:mt-0 lg:h-full lg:w-auto rounded-xl md:h-full md:w-auto object-cover object-left-top bg-white "
                    />
                  </div>
                  <div className=" md:col-span-1 lg:col-span-1">
                    <div className="flex flex-col justify-between h-full">
                      <div>
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
                          {project.results.map((result) => (
                            <li
                              key={result.title}
                              className="flex gap-2 md:text-base text-sm text-white/50"
                            >
                              {/* <CheckCircleIcon className="size-5 md:size-6" /> */}
                              <span>{result.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a href={project.link} target="_blank" rel="noreferrer">
                        <button
                          className="bg-white text-gray-950 h-12 w-full md:w-auto px-6
                rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 "
                        >
                          <span>View Detail</span>
                          <ArrowUpRightIcon className="size-4 " />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
