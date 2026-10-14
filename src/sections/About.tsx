"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
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
        <div className="mt-20">
          <Card className="p-6">
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
        </div>
      </div>
    </div>
  );
};
