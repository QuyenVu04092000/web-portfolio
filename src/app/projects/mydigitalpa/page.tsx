"use client";

import React, { useRef } from "react";
import { Header } from "@/sections/Header";
import mydigitalpa from "@/assets/images/mydigitalpa.png";
import Image from "next/image";
import { slideInFromBottom } from "../../../../utils/motion";
import { motion, useInView } from "framer-motion";
export default function Mydigitalpa() {
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
              Building MydigitalPA: Empowering Pilots with Efficient License
              Management and Job Tracking
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
              In the maritime industry, pilots play a critical role in ensuring
              safe navigation and efficient operations at ports. MydigitalPA is
              a mobile application designed specifically for PSA
              International&apos;s pilots, helping them streamline and manage
              their license upgrading process, stay on top of job tasks, receive
              real-time news updates, and get instant notifications. The app is
              not only tailored to pilots but also provides an admin panel for
              managing pilots, jobs, news, and sending notifications.
            </p>
            <p className="text-white/60 px-4 text-lg md:text-xl mt-4">
              The application integrates MQTT, a lightweight messaging protocol,
              for real-time communication between the mobile app and the server,
              ensuring pilots are always up to date with the latest information.
              Swift was used to build the iOS app, providing a native and
              responsive experience for the users.
            </p>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Key Features of MydigitalPA
            </h1>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide mb-8">
              🎓 License Management
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Pilots can easily track their license upgrading process, view
              required tasks, and receive reminders about key milestones. This
              feature ensures pilots stay on top of their professional
              development and comply with regulatory requirements.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              📋 Job Management
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              The app provides a detailed list of jobs for pilots to complete,
              including deadlines, vessel details, and operational instructions.
              Pilots can mark tasks as completed and receive updates when new
              tasks are assigned.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              📰 News Feed
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              MydigitalPA includes a news feed where pilots can catch up on
              important updates, including regulatory changes, PSA news, weather
              forecasts, and other relevant information. This helps pilots stay
              informed and prepared for any changes in their daily operations.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🔔 Real-Time Notifications
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Using MQTT, the app delivers instant notifications to pilots
              regarding job updates, news, or critical information, ensuring
              they are always in the loop.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              👨‍💼 Admin Panel
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              The admin panel allows PSA International administrators to manage
              pilots, assign new jobs, send news updates, and broadcast
              notifications to pilots. The admin panel ensures that
              pilots&apos;activities and tasks are effectively managed and
              coordinated.
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
              MydigitalPA is a powerful tool that helps PSA International&apos;s
              pilots efficiently manage their workflow, stay on top of their
              license upgrading process, and receive important updates in real
              time. By leveraging Swift for native development and MQTT for
              real-time messaging, we&apos;ve built an app that ensures pilots
              have everything they need at their fingertips.
            </p>
            <p className="text-white/60 px-4 text-lg md:text-xl my-4">
              This project has been a valuable learning experience, allowing me
              to deepen my expertise in both iOS development and real-time
              communication technologies while working alongside a talented team
              at PSA International.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
