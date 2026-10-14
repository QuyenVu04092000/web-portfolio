"use client";

import React, { Fragment, useRef } from "react";
import { Header } from "@/sections/Header";
import { WorkExperience } from "@/sections/WorkExperience";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import Image from "next/image";
import avatar from "@/assets/images/avatar.jpeg";
import avatar1 from "@/assets/images/avatar1.jpeg";
import avatar2 from "@/assets/images/avatar2.jpeg";
import avatar3 from "@/assets/images/avatar3.jpeg";
import avatar5 from "@/assets/images/avatar5.jpeg";
import grainImage from "@/assets/images/grain.jpg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LangContext";

const hobbies = [
  { title: "Beer", emoji: "🍺", left: "5%", top: "5%" },
  { title: "Gaming", emoji: "🎮", left: "50%", top: "5%" },
  { title: "Traveling", emoji: "✈️", left: "10%", top: "35%" },
  { title: "Music", emoji: "🎵", left: "35%", top: "40%" },
  { title: "Fitness", emoji: "🏋️", left: "70%", top: "45%" },
  { title: "Football", emoji: "⚽", left: "5%", top: "65%" },
  { title: "Badminton", emoji: "🏸", left: "45%", top: "70%" },
];

export default function About() {
  const constraintRef = useRef(null);
  const { t } = useLang();
  const a = t.about;

  const images = [
    { title: "avatar1", src: avatar1 },
    { title: "avatar2", src: avatar2 },
    { title: "avatar3", src: avatar3 },
    { title: "avatar5", src: avatar5 },
  ];

  return (
    <div>
      <Header activeId="about" />

      {/* Bio / Intro */}
      <div className="px-7 pt-32 md:pt-48 lg:pt-60 pb-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Portrait */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0 z-10 opacity-10"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              />
              <Image
                src={avatar}
                alt="Vu Trong Quyen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-3 flex flex-col justify-center gap-4">
            <p className="text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
              {a.eyebrow}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl">{a.title}</h1>
            <p className="text-white/60 text-base leading-relaxed">{a.description}</p>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="px-7 pb-8">
        <WorkExperience />
      </div>

      {/* Beyond the Code + Map */}
      <div className="px-7 pb-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
              className="px-6 pt-6"
              title={a.beyond}
              description={a.beyondDesc}
            />
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{ left: hobby.left, top: hobby.top }}
                  drag
                  dragConstraints={constraintRef}
                >
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image
              src={mapImage}
              alt="Map"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-['']
              after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full
              after:outline-gray-950/30"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
              <Image src={smileMemoji} alt="Smiling Memoji" className="size-20" />
            </div>
          </Card>
        </div>
      </div>

      {/* Scrolling avatar photos */}
      <div className="overflow-x-clip">
        <div className="flex flex-none py-0.5 gap-6 pr-6 animate-move-left [animation-duration:20s] px-7 pb-32 md:pb-48 lg:pb-60 pt-8">
          {[...new Array(4)].fill(0).map((_, index) => (
            <Fragment key={index}>
              {images.map((item) => (
                <div
                  className="relative flex lg:block md:hidden sm:hidden rounded-lg"
                  key={item.title}
                >
                  <div className="relative w-[328px] h-[642px] rounded-lg">
                    <div
                      className="absolute inset-0 z-10 opacity-10 w-[328px] h-[642px] rounded-lg"
                      style={{ backgroundImage: `url(${grainImage.src})` }}
                    />
                    <Image
                      className="rounded-lg w-full h-full object-cover"
                      alt="avatar"
                      src={item.src}
                    />
                  </div>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
