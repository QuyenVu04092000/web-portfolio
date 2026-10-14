"use client";

import React, { Fragment, useRef } from "react";
import { Header } from "@/sections/Header";
import Image from "next/image";
import avatar from "@/assets/images/avatar.jpeg";
import avatar1 from "@/assets/images/avatar1.jpeg";
import avatar2 from "@/assets/images/avatar2.jpeg";
import avatar3 from "@/assets/images/avatar3.jpeg";
import avatar5 from "@/assets/images/avatar5.jpeg";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import grainImage from "@/assets/images/grain.jpg";
import { WorkExperience } from "@/sections/WorkExperience";
import { motion } from "framer-motion";

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
  const images = [
    { title: "avatar1", src: avatar1 },
    { title: "avatar2", src: avatar2 },
    { title: "avatar3", src: avatar3 },
    { title: "avatar5", src: avatar5 },
  ];

  return (
    <div>
      <Header activeId="about" />

      {/* Bio */}
      <div className="lg:grid lg:grid-cols-6 lg:gap-7 pb-8 pt-32 md:pt-48 lg:pt-60 relative z-0 overflow-x-clip px-7">
        <div className="col-span-2 relative flex lg:block md:hidden sm:hidden">
          <div className="relative">
            <div
              className="absolute inset-0 z-10 opacity-10"
              style={{ backgroundImage: `url(${grainImage.src})` }}
            />
            <Image
              className="rounded-lg h-full object-cover"
              alt="avatar"
              src={avatar}
            />
          </div>
        </div>
        <div className="col-span-4 flex">
          <Card className="px-8 flex-1 flex flex-col">
            <h1 className="font-serif text-3xl md:text-5xl text-left mt-8 tracking-wide">
              Hello I&apos;m Quyen
            </h1>
            <p className="text-left text-white/60 mt-4 md:text-lg lg:text-xl">
              Senior Frontend Engineer with 5+ years of experience building
              scalable web applications using React and Next.js. Strong
              expertise in performance optimization, UI/UX, and RESTful API
              integration, with hands-on experience in state management and
              cross-platform development.
            </p>
            <p className="text-left text-white/60 mt-4 md:text-lg lg:text-xl pb-8">
              Currently at Webcash Vietnam building enterprise-scale HR and
              e-invoicing platforms. Passionate about clean code,
              accessibility, and delivering fast, user-focused experiences.
            </p>
          </Card>
        </div>
      </div>

      {/* Work Experience */}
      <div className="px-7 pb-8">
        <WorkExperience />
      </div>

      {/* Beyond the Code */}
      <div className="px-7 pb-8">
        <Card className="h-[320px] p-0 flex flex-col">
          <CardHeader
            className="px-6 pt-6"
            title="Beyond the Code"
            description="Explore my interests and hobbies beyond the digital realm."
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
