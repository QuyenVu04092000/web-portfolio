"use client";

import React, { Fragment } from "react";
import { Header } from "@/sections/Header";
import Image from "next/image";
import avatar from "@/assets/images/avatar.jpeg";
import avatar1 from "@/assets/images/avatar1.jpeg";
import avatar2 from "@/assets/images/avatar2.jpeg";
import avatar3 from "@/assets/images/avatar3.jpeg";
import avatar5 from "@/assets/images/avatar5.jpeg";
import { Card } from "@/components/Card";
import grainImage from "@/assets/images/grain.jpg";
import { WorkExperience } from "@/sections/WorkExperience";

export default function About() {
  const images = [
    {
      title: "avatar1",
      src: avatar1,
    },
    {
      title: "avatar2",
      src: avatar2,
    },
    {
      title: "avatar3",
      src: avatar3,
    },
    {
      title: "avatar5",
      src: avatar5,
    },
  ];
  return (
    <div>
      <Header activeId="about" />
      <div className="lg:grid lg:grid-cols-6 lg:gap-7 pb-8 pt-32 md:pt-48 lg:pt-60 relative z-0 overflow-x-clip px-7 ">
        <div className="col-span-2 relative flex lg:block md:hidden sm:hidden">
          <div className="relative">
            <div
              className="absolute inset-0 z-10 opacity-10"
              style={{
                backgroundImage: `url(${grainImage.src})`,
              }}
            ></div>
            <Image
              className="rounded-lg h-full object-cover"
              alt="avatar"
              src={avatar}
            />
          </div>
        </div>
        <div className="col-span-4 flex">
          <Card className="px-8 flex-1 flex flex-col">
            <div>
              <h1 className="font-serif text-3xl md:text-5xl text-left mt-8 tracking-wide">
                Hello I&apos;m Quyen
              </h1>
              <p className="text-left text-white/60 mt-4 md:text-lg lg:text-xl">
                Creative and detail-oriented Frontend Developer with over 2
                years of experience. I specialize in building responsive,
                user-friendly web applications with modern technologies
              </p>
              <p className="text-left text-white/60 mt-4 md:text-lg lg:text-xl">
                Passionate about seamless experiences, I prioritize performance,
                accessibility, and clean code. Adaptable and collaborative, I
                efficiently scale projects with designers and backend teams.
              </p>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
            </div>
            <div className="grid lg:grid-cols-2 mb-8 gap-8">
              <div className="lg:col-span-1 md:row-span-1">
                <div className="flex flex-row items-center gap-2 mt-4 md:mt-5">
                  <span>🌟</span>
                  <span className="font-semibold">Super Power</span>
                </div>
                <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
                  My superpower is adaptability. As a Frontend Developer, I
                  quickly master new technologies and build high-performance
                  interfaces. I thrive in fast-paced environments, turning ideas
                  into seamless, interactive experiences.
                </p>
              </div>
              <div className="lg:col-span-1 md:row-span-1">
                <div className="flex flex-row items-center gap-2 mt-4 md:mt-5">
                  <span>🔥</span>
                  <span className="font-semibold">The quote I like most</span>
                </div>
                <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
                  “Any fool can write code that a computer can understand. Good
                  programmers write code that humans can understand.”
                </p>
                <p className="text-white/60 mt-2 md:text-lg lg:text-xl">
                  Martin Fowler
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <WorkExperience />
      <div className="overflow-x-clip">
        <div
          className={
            "flex flex-none py-0.5 gap-6 pr-6 animate-move-left [animation-duration:20s] px-7 pb-32 md:pb-48 lg:pb-60 pt-8 "
          }
        >
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
                      style={{
                        backgroundImage: `url(${grainImage.src})`,
                      }}
                    ></div>
                    <Image
                      className="rounded-lg w-full h-full object-cover "
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
