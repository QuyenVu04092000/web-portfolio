"use client";

import React, { useRef } from "react";
import { Header } from "@/sections/Header";
import psa_bg from "@/assets/images/psa_bg.png";
import Image from "next/image";
import { slideInFromBottom } from "../../../../../utils/motion";
import { motion, useInView } from "framer-motion";
export default function Psa_cms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const contentRef = useRef(null);
  const isInViewContent = useInView(contentRef, {
    once: true,
    margin: "-50px",
  });
  return (
    <div>
      <Header />
      <section className="pb-16 py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
        <motion.div
          ref={ref}
          variants={slideInFromBottom}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">
              Building PSA-CMS: A Robust Content Management System for Pilots
            </h1>
            <div className="flex sm:flex-col md:flex-row lg:flex-row items-start justify-start md:gap-8 lg:gap-8 sm:gap-2">
              <div>
                <p className="text-left px-4 text-white/60 mt-4 md:text-lg lg:text-xl">
                  Client
                </p>
                <p
                  className={`py-2 px-4 rounded-full transition-all text-lg text-white hover:bg-white/20
            `}
                >
                  PSA International
                </p>
              </div>
              <div>
                <p className="text-left px-4 text-white/60 mt-4 md:text-lg lg:text-xl">
                  Role
                </p>
                <p
                  className={`py-2 rounded-full px-4 transition-all text-lg text-white hover:bg-white/20
            `}
                >
                  Front-end Developer
                </p>
              </div>
              <div>
                <p className="text-left px-4 text-white/60 mt-4 md:text-lg lg:text-xl">
                  Timeline
                </p>
                <p
                  className={`py-2 px-4 rounded-full transition-all text-lg text-white hover:bg-white/20
            `}
                >
                  09/2023 - Present
                </p>
              </div>
            </div>
            <div className="inline-flex flex-col items-start justify-start">
              <p className="text-left px-4 text-white/60 mt-4 md:text-lg lg:text-xl">
                Technologies Used
              </p>
              <p
                className={`py-2 px-4 rounded-full transition-all text-lg text-white hover:bg-white/20
            `}
              >
                ReactJS, React-Redux
              </p>
            </div>
          </div>
          <Image
            src={psa_bg}
            alt="vdental"
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
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Introduction
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              In the maritime industry, efficient management of pilot operations
              is crucial for smooth and safe vessel navigation.{" "}
              <span className="text-white/100">PSA-CMS</span> was developed as a{" "}
              <span className="text-white/100">
                content management system (CMS)
              </span>{" "}
              tailored for PSA International, one of the world&apos;s leading
              port operators.
            </p>
            <p className="text-white/60 px-4 text-lg md:text-xl mt-4">
              The system serves as the backbone for managing pilot information
              and delivering essential content to pilots via their mobile app.
              It includes features such as news updates, vessel details, and
              operational data, ensuring that pilots receive real-time, accurate
              information to enhance decision-making and safety.
            </p>
            <p className="text-white/60 px-4 text-lg md:text-xl mt-4">
              This project required seamless integration between PSA&apos;s
              existing infrastructure and a modern web-based CMS. Working
              closely with PSA&apos;s team, I contributed to building a
              scalable, user-friendly system using{" "}
              <span className="text-white/100">ReactJS and React-Redux</span>{" "}
              for state management.
            </p>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Key Features of PSA
            </h1>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide mb-8">
              📋 Pilot Information Management
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              The system provides a centralized database to store and manage
              pilot records, ensuring that authorized personnel can access and
              update critical information in real time.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              📰 News & Updates for Pilots
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              A built-in news module allows PSA to publish and manage updates
              relevant to pilots, including operational changes, regulatory
              notices, and weather alerts.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🚢 Vessel & Port Information
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Pilots can access detailed vessel data, including specifications,
              schedules, and operational guidelines. This ensures they have all
              necessary information before assisting a ship into the port.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🔄 Seamless Content Management
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Administrators can easily update content across the pilot&apos;s
              app through a user-friendly interface, ensuring timely delivery of
              important information.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🔗 Integration with PSA&apos;s Existing Systems
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              The CMS was designed to integrate with PSA&apos;s internal data
              sources, ensuring synchronization between the web platform and the
              mobile application used by pilots.
            </p>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Technologies and Tools
            </h1>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide mb-8">
              ⚛️ ReactJS for a Dynamic UI
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              I built the web-based CMS using ReactJS, leveraging its
              component-based architecture to create a modular and maintainable
              system.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🔄 React-Redux for State Management
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              To manage complex data flows efficiently, I implemented
              React-Redux, ensuring that updates to pilot and vessel data were
              synchronized across different components without performance
              bottlenecks.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🏗 Scalable & Maintainable Architecture
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              The system was designed to be scalable, allowing PSA to add new
              features and integrate additional data sources in the future
              without major refactoring.
            </p>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Key Learnings and Challenges
            </h1>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide mb-8">
              ✅ Deepened Expertise in ReactJS & React-Redux
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              This project strengthened my ability to build complex React
              applications, improving my understanding of state management,
              component reusability, and performance optimization using Redux.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🤝 Collaboration with PSA&apos;s Development Team
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Working with PSA&apos;s internal teams provided valuable
              experience in cross-team collaboration, aligning business
              requirements with technical implementation.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🔗 Handling API Integrations with Third-Party Systems
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Integrating PSA-CMS with PSA&apos;s existing backend services
              required handling API interactions, data synchronization, and
              security considerations efficiently.
            </p>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Conclusion
            </h1>

            <p className="text-white/60 px-4 text-lg md:text-xl">
              PSA-CMS was a high-impact project that provided pilots with a
              centralized, real-time information hub while enabling PSA to
              efficiently manage and distribute content. Through this
              experience, I honed my ReactJS and Redux skills, improved my
              ability to work in enterprise environments, and gained hands-on
              experience in collaborating with third-party teams on large-scale
              projects.
            </p>
            <p className="text-white/60 px-4 text-lg md:text-xl my-4">
              With PSA-CMS now fully operational, PSA International has a
              powerful, scalable system to support pilots with accurate,
              up-to-date information—enhancing efficiency and safety in maritime
              operations.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
