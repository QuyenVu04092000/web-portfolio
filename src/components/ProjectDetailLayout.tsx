"use client";

import React, { useRef, ReactNode } from "react";
import { Header } from "@/sections/Header";
import Image, { StaticImageData } from "next/image";
import { slideInFromBottom } from "../../utils/motion";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/i18n/LangContext";

export type DetailSection = {
  title: string;
  body: ReactNode;
};

export type ProjectDetailContent = {
  title: string;
  client: string;
  role: string;
  timeline: string;
  tech: string;
  intro: ReactNode;
  whatIs?: ReactNode;
  features?: DetailSection[];
  contributions?: DetailSection[];
  techStack: DetailSection[];
  learnings: DetailSection[];
  conclusion?: ReactNode;
};

type Props = {
  image: StaticImageData;
  imageAlt: string;
  content: { en: ProjectDetailContent; vi: ProjectDetailContent };
};

export default function ProjectDetailLayout({
  image,
  imageAlt,
  content,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const contentRef = useRef(null);
  const isInViewContent = useInView(contentRef, {
    once: true,
    margin: "-50px",
  });
  const { t, locale } = useLang();
  const L = t.detailLabels;
  const c = content[locale];

  const renderSections = (sections: DetailSection[]) =>
    sections.map((item, i) => (
      <div key={i}>
        <h2
          className={`font-serif px-4 text-xl md:text-3xl text-left tracking-wide mb-4 ${i > 0 ? "mt-8" : ""}`}
        >
          {item.title}
        </h2>
        <p className="text-white/60 px-4 text-lg md:text-xl">{item.body}</p>
      </div>
    ));

  return (
    <div>
      <Header />
      <section className="pb-16 py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
        <motion.div
          className="my-8"
          variants={slideInFromBottom}
          initial="hidden"
          animate="visible"
        >
          <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">
            {c.title}
          </h1>
          <div className="flex sm:flex-col md:flex-row lg:flex-row items-start justify-start md:gap-8 lg:gap-8 sm:gap-2">
            <div>
              <p className="text-left px-4 text-white/60 mt-4 md:text-lg lg:text-xl">
                {L.client}
              </p>
              <p className="py-2 px-4 rounded-full transition-all text-lg text-white hover:bg-white/20">
                {c.client}
              </p>
            </div>
            <div>
              <p className="text-left px-4 text-white/60 mt-4 md:text-lg lg:text-xl">
                {L.role}
              </p>
              <p className="py-2 rounded-full px-4 transition-all text-lg text-white hover:bg-white/20">
                {c.role}
              </p>
            </div>
            <div>
              <p className="text-left px-4 text-white/60 mt-4 md:text-lg lg:text-xl">
                {L.timeline}
              </p>
              <p className="py-2 px-4 rounded-full transition-all text-lg text-white hover:bg-white/20">
                {c.timeline}
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col items-start justify-start">
            <p className="text-left px-4 text-white/60 mt-4 md:text-lg lg:text-xl">
              {L.technologiesUsed}
            </p>
            <p className="py-2 px-4 rounded-full transition-all text-lg text-white hover:bg-white/20">
              {c.tech}
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={slideInFromBottom}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Image
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover rounded-3xl"
          />
        </motion.div>

        <motion.div
          ref={contentRef}
          variants={slideInFromBottom}
          initial="hidden"
          animate={isInViewContent ? "visible" : "hidden"}
        >
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">
              {L.introduction}
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">{c.intro}</p>
          </div>

          {c.whatIs && (
            <div className="my-8">
              <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">
                {L.whatIs} {imageAlt}?
              </h1>
              {c.whatIs}
            </div>
          )}

          {(c.features || c.contributions) && (
            <>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
              <div className="my-8">
                <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">
                  {c.contributions ? L.keyContributions : L.keyFeatures}
                </h1>
                {renderSections((c.contributions ?? c.features)!)}
              </div>
            </>
          )}

          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">
              {L.technologies}
            </h1>
            {renderSections(c.techStack)}
          </div>

          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">
              {L.learnings}
            </h1>
            {renderSections(c.learnings)}
          </div>

          {c.conclusion && (
            <>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
              <div className="my-8">
                <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">
                  {L.conclusion}
                </h1>
                <p className="text-white/60 px-4 text-lg md:text-xl">
                  {c.conclusion}
                </p>
              </div>
            </>
          )}
        </motion.div>
      </section>
    </div>
  );
}
