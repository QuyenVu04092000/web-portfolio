"use client";

import React, { useRef } from "react";
import { Header } from "@/sections/Header";
import mydigitalpa from "@/assets/images/mydigitalpa.png";
import Image from "next/image";
import { slideInFromBottom } from "../../../../utils/motion";
import { motion, useInView } from "framer-motion";
export default function PilotAudit() {
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
              Building Pilot Audit: Empowering Pilots with Comprehensive Audit
              Management
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
                MQTT, Swift
              </p>
            </div>
          </div>
          <Image
            src={mydigitalpa}
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
              Effective audit management is essential for pilots to maintain
              safety standards, improve performance, and ensure regulatory
              compliance. Pilot Audit is a mobile application designed for PSA
              International’s pilots to conveniently view their audit results,
              check audit history, keep track of their audit schedules, monitor
              audit status, and access detailed audit reports. The application
              is built with a focus on simplicity, performance, and real-time
              communication, providing pilots with an intuitive and seamless
              experience.
            </p>
            <p className="text-white/60 px-4 text-lg md:text-xl mt-4">
              To deliver real-time updates and notifications, MQTT was
              integrated into the app, enabling instant messaging and data
              synchronization. The iOS application was built using Swift,
              ensuring a smooth, responsive experience and full native
              integration with Apple&apos;s ecosystem.
            </p>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Key Features of Pilot Audit
            </h1>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide mb-8">
              📊 Audit Results
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Pilots can easily view their audit results on the app. These
              results are critical for understanding their performance and
              identifying areas that need improvement. The application allows
              pilots to track their audit scores and feedback from each
              assessment, ensuring they are always aware of their standing.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🕒 Audit History
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              The app provides a comprehensive audit history, enabling pilots to
              look back at previous assessments, view trends in their
              performance, and analyze changes over time. This feature helps
              pilots monitor their progress and identify patterns in their audit
              results.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              📅 Audit Schedule
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Pilots can view their upcoming audit schedules, ensuring they are
              prepared for upcoming assessments. The app notifies pilots about
              upcoming audits so they can plan accordingly and stay ahead of
              deadlines.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              📝 Audit Status
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              The audit status feature allows pilots to check whether an audit
              is in progress, pending, or completed. Pilots can easily track the
              current status of any scheduled audit, helping them stay organized
              and prepared.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🔍 Audit Details
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Each audit comes with detailed information, including the criteria
              used for the assessment and any remarks provided by the auditors.
              Pilots can access these details directly from the app, giving them
              full transparency on their audit results.
            </p>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Technologies and Tools
            </h1>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide mb-8">
              🛰️ MQTT for Real-Time Communication
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              The app leverages MQTT for lightweight, real-time messaging
              between the server and the mobile app. This ensures low-latency
              updates and instant delivery of notifications, making it an ideal
              protocol for keeping pilots informed about new tasks and updates.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              📱 Swift for Native iOS App Development
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              The mobile app is built using Swift, ensuring a smooth, fast, and
              responsive user experience. Swift&apos;s powerful features and
              integration with iOS allow for seamless performance, making
              MydigitalPA an intuitive tool for pilots.
            </p>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Key Learnings and Challenges
            </h1>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide mb-8">
              ✅ Deepened Expertise in Swift
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Building the iOS app in Swift has significantly enhanced my
              proficiency with iOS development. I’ve gained hands-on experience
              with iOS-specific features, including user interface design,
              notifications, and background tasks, to provide pilots with the
              best possible mobile experience.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🧠 Mastering Real-Time Messaging with MQTT
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Implementing MQTT allowed me to learn more about real-time
              communication protocols and their integration into mobile
              applications. This experience taught me how to handle message
              queues, ensure efficient data delivery, and maintain a robust
              connection between the server and app.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🤝 Collaboration with PSA&apos;s Development Team
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Working with PSA&apos;s team has strengthened my ability to
              collaborate with third-party teams, align technical requirements
              with business goals, and iterate based on user feedback. I&apos;ve
              gained insights into their workflow and how to create a product
              that meets both internal and external user needs.
            </p>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Conclusion
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Pilot Audit is a powerful tool for PSA International&apos;s
              pilots, providing them with real-time updates on their audits,
              easy access to detailed results, and a streamlined way to manage
              their audit schedules. By using MQTT for real-time communication
              and Swift for the iOS app, we have built a fast, responsive, and
              effective solution for pilots to stay on top of their audits.
            </p>
            <p className="text-white/60 px-4 text-lg md:text-xl my-4">
              This project has been an excellent opportunity to deepen my
              knowledge of Swift and MQTT while collaborating with PSA&apos;s
              talented development team.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
