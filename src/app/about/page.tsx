"use client";

import { Header } from "@/sections/Header";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import TailwindIcon from "@/assets/icons/tailwindcss.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import NodejsIcon from "@/assets/icons/nodejs.svg";
import { useLang } from "@/i18n/LangContext";

const toolboxItems = [
  { title: "JavaScript", iconType: JavascriptIcon },
  { title: "TypeScript", iconType: TypeScriptIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Next.js", iconType: NextjsIcon },
  { title: "Tailwind CSS", iconType: TailwindIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CssIcon },
  { title: "Node.js", iconType: NodejsIcon },
  { title: "Figma", iconType: FigmaIcon },
  { title: "GitHub", iconType: GithubIcon },
  { title: "Chrome DevTools", iconType: ChromeIcon },
];

const hobbiesData = [
  { emoji: "🍺", left: "5%", top: "5%", title: "Beer" },
  { emoji: "🎮", left: "50%", top: "5%", title: "Gaming" },
  { emoji: "✈️", left: "10%", top: "35%", title: "Traveling" },
  { emoji: "🎵", left: "35%", top: "40%", title: "Music" },
  { emoji: "🏋️", left: "70%", top: "45%", title: "Fitness" },
  { emoji: "⚽", left: "5%", top: "65%", title: "Football" },
  { emoji: "🏸", left: "45%", top: "70%", title: "Badminton" },
];

export default function About() {
  const constraintRef = useRef(null);
  const { t } = useLang();

  return (
    <div>
      <Header activeId="about" />
      <main id="main-content">
        {/* Bio */}
        <section aria-label="About me" className="pt-32 md:pt-48 pb-16 lg:pb-24">
          <div className="container">
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent mb-3">
                {t.about.eyebrow}
              </span>
              <h1 className="font-serif text-3xl md:text-5xl tracking-wide mb-6">
                Hello, I&apos;m Quyen (Buck)
              </h1>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                {t.about.description}
              </p>
            </div>
          </div>
        </section>

        {/* Toolbox */}
        <section aria-label="Toolbox" className="py-16 lg:py-24 border-t border-white/10">
          <div className="container">
            <Card className="h-[320px]">
              <CardHeader
                title={t.about.toolbox}
                description={t.about.toolboxDesc}
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>
        </section>

        {/* Beyond the Code + Map */}
        <section aria-label="Beyond the code" className="pb-20 lg:pb-28">
          <div className="container">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
              <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                <Image
                  src={mapImage}
                  alt="Map of Ho Chi Minh City, Vietnam"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10" />
                  <Image src={smileMemoji} alt="Smiling memoji" className="size-20" />
                </div>
              </Card>
              <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                <CardHeader
                  className="px-6 pt-6"
                  title={t.about.beyond}
                  description={t.about.beyondDesc}
                />
                <div className="relative flex-1" ref={constraintRef}>
                  {hobbiesData.map((hobby) => (
                    <motion.div
                      key={hobby.title}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                      style={{ left: hobby.left, top: hobby.top }}
                      drag
                      dragConstraints={constraintRef}
                    >
                      <span className="font-medium text-gray-950">{hobby.title}</span>
                      <span aria-hidden="true">{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
