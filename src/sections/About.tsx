"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";

const skillGroups = [
  {
    name: "Core",
    items: ["React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    name: "UI Libraries",
    items: ["Tailwind CSS", "Material UI (MUI)", "Ant Design"],
  },
  {
    name: "State & Data",
    items: ["React Query", "Zustand", "Redux"],
  },
  {
    name: "Mobile",
    items: ["React Native", "Flutter"],
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* Technical Skills */}
            <Card className="p-6 md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Technical Skills"
                description="My core stack for web and mobile development."
              />
              <div className="mt-4 flex flex-col gap-4">
                {skillGroups.map((group) => (
                  <div key={group.name}>
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-2 block">
                      {group.name}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-full text-xs font-medium border border-white/15 text-white/80 bg-white/5"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Map */}
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
                <Image
                  src={smileMemoji}
                  alt="Smiling Memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
