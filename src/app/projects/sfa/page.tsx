"use client";

import React, { useRef } from "react";
import { Header } from "@/sections/Header";
import sfa_bg from "@/assets/images/sfa.png";
import Image from "next/image";
import { slideInFromBottom } from "../../../../utils/motion";
import { motion, useInView } from "framer-motion";
export default function SFA() {
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
          className="my-8"
          variants={slideInFromBottom}
          initial="hidden"
          animate="visible"
        >
          <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">
            SFA (DigiSale): Empowering Sales Teams with Technology
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
                MLTech Soft
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
                Mobile Developer
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
                4 months
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
              React Native, React Hooks, Tailwind CSS
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
            src={sfa_bg}
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
              DigiSale is an innovative{" "}
              <span className="text-white/100">
                Sales Force Automation (SFA)
              </span>{" "}
              application designed to help businesses optimize and streamline
              their sales activities. The app is built to empower sales teams,
              giving them the tools to track performance, manage leads, and
              improve sales efficiency. Through a user-friendly interface and
              seamless mobile experience, DigiSale enables salespeople to
              perform tasks with ease and stay connected with their sales data
              on the go.
            </p>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Key Features of SFA
            </h1>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide mb-8">
              1. Sales Activity Management
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              DigiSale makes it easy to schedule appointments, track leads, and
              manage customer interactions. With a simple and intuitive
              interface, sales reps can stay organized without missing any
              crucial follow-ups.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              2. Performance Tracking
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Managers and teams can gain real-time insights into their sales
              performance through detailed metrics and reports. These help
              businesses identify top performers, measure success, and make
              data-driven decisions.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              3. Enhanced Sales Efficiency
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              By automating repetitive tasks, DigiSale reduces the time spent on
              manual processes. Salespeople can spend more time with clients and
              less time on paperwork.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              4. Mobile-first Design
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              With React Native, DigiSale is optimized for both Android and iOS,
              ensuring that sales reps can stay connected and productive
              wherever they are.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              5. Customizable Dashboards
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Sales teams can access visual reports and track their progress
              toward sales goals using interactive, customizable dashboards.
              Each user can personalize their view to match their needs.
            </p>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Technologies and Tools
            </h1>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide mb-8">
              1. React Native
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              React Native powers the cross-platform mobile experience, ensuring
              DigiSale works seamlessly on both Android and iOS devices. This
              allows businesses to target both mobile operating systems without
              having to build separate apps.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              2. React Hooks
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              React Hooks were used for managing the application state and
              handling side effects. This made it easier to write clean,
              maintainable code and manage the app&apos;s data flow.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              3. Tailwind CSS for Styling
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              For styling the application, I used Tailwind CSS, a utility-first
              CSS framework that enabled me to build responsive layouts quickly.
              With Tailwind&apos;s utility classes, the design is adaptive to
              all screen sizes, making DigiSale a truly mobile-first
              application.
            </p>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Key Learnings and Challenges
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl mb-8">
              Working on VDental was an incredibly rewarding experience. Here
              are some of the key things I learned along the way:
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide mb-8">
              1. Deepened Knowledge of React Native
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Working on DigiSale has been an incredible opportunity to hone my
              React Native skills and learn more about mobile development.
              During this project, I learned how to build mobile-first
              applications and implement performance tracking systems in
              real-time. The integration of state management through React Hooks
              and Redux gave me a deeper understanding of managing complex data
              in mobile applications.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              2. Applying Tailwind CSS to React Native
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              While I was already familiar with Tailwind CSS in web development,
              applying it to React Native was a unique learning experience.
              Using Tailwind with React Native required a different approach,
              but it was an efficient way to style the app while keeping the
              design consistent with the web platform.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              4. Deploying the App to Play Store and App Store
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              The deployment process was another major learning curve. Releasing
              an app to both Google Play and the Apple App Store posed
              challenges related to platform-specific configurations, submission
              guidelines, and optimization. Successfully getting the app live on
              both stores was a big accomplishment!
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
