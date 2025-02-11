"use client";

import React, { useRef } from "react";
import { Header } from "@/sections/Header";
import vdental_bg from "@/assets/images/vdental_bg.png";
import Image from "next/image";
import { slideInFromBottom } from "../../../../utils/motion";
import { motion, useInView } from "framer-motion";
export default function Vdental() {
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
            Building VDental: A Platform to Bridge U.S. Clients with Dental
            Clinics in Vietnam
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
                V-Dental
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
                Front-end Developer and Mobile Developer
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
              Next.js, Tailwind CSS, React Native
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
            src={vdental_bg}
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
              The healthcare industry has seen a significant shift towards
              digital transformation, especially when it comes to making
              healthcare services more accessible internationally. As part of my
              journey to contribute to this transformation, I worked on a
              project called <span className="text-white/100">VDental</span>, a
              web and app platform designed to help U.S.-based clients book
              dental appointments with clinics in Vietnam. This project not only
              allowed me to explore international healthcare services but also
              provided me with valuable experience in building a full-stack
              platform using modern technologies like{" "}
              <span className="text-white/100">
                Next.js, React Native, and Tailwind CSS
              </span>
              .
            </p>
          </div>
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              What is VDental?
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              VDental aims to provide a seamless booking experience for clients
              in the U.S. looking to schedule dental appointments at clinics in
              Vietnam. With the convenience of online booking, appointment
              management, and live communication with clinics, VDental seeks to
              bridge the gap between international clients and high-quality
              dental care in Vietnam.
            </p>
            <p className="text-white/60 px-4 text-lg md:text-xl mt-4">
              Whether it&apos;s a routine check-up or more specialized dental
              treatments, users can browse through clinic options, book
              appointments, view their appointment details, and even chat with
              clinic staff—all from the comfort of their own home.
            </p>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Key Features of VDental
            </h1>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide mb-8">
              1. Appointment Booking
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              The core feature of VDental is a straightforward and intuitive
              appointment booking system. Clients can browse through available
              dental clinics in Vietnam, view available appointment slots, and
              book their desired time. It&apos;s as simple as clicking a button,
              and the platform handles the rest.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              2. View Appointment Details
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Once an appointment is booked, users can access detailed
              information about their upcoming visit. This includes the
              clinic&apos;s location, dentist details, the specific dental
              service they will receive, and any additional instructions.
              It&apos;s a great way for users to stay informed and prepared for
              their appointments.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              3. Chat Functionality
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              To enhance communication between clients and clinics, VDental
              integrates a real-time chat feature. Users can ask questions,
              clarify appointment details, or discuss specific dental concerns
              directly with clinic staff. This ensures that clients can make
              informed decisions and have all their questions answered before
              visiting the clinic.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              4. Clinic Summaries
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              For those looking to explore various dental clinics, VDental
              provides detailed summaries of each clinic. This includes a list
              of services offered, facilities available, and information about
              the dental staff&apos;s qualifications. Clients can choose a
              clinic based on their needs and preferences, ensuring they get the
              best care possible.
            </p>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Technologies and Tools
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl mb-8">
              I had the opportunity to work with some powerful technologies to
              bring VDental to life. Here&apos;s a breakdown of the tools I
              used:
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide mb-8">
              1. Next.js for Web Development
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              I chose Next.js to build the web platform for VDental because of
              its ability to deliver fast, SEO-friendly, and scalable web
              applications. With its server-side rendering and automatic code
              splitting, Next.js helped create a smooth, fast-loading experience
              for users. Plus, integrating Tailwind CSS with Next.js allowed for
              rapid styling and responsive design, making it easy to adapt the
              platform across different screen sizes.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              2. React Native for Mobile Development
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              For the mobile version of VDental, I used React Native to create a
              native app for both iOS and Android. This enabled me to build a
              cross-platform app with a single codebase, reducing development
              time while maintaining a great user experience on both platforms.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              3. Tailwind CSS for Styling
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Both the web and mobile versions of VDental were styled using
              Tailwind CSS. With its utility-first approach, Tailwind allowed me
              to quickly and easily build responsive layouts and make style
              adjustments as needed. Whether it was the button styles, layout
              grids, or animations, Tailwind was a perfect fit for the
              project&apos;s design.
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
              VDental gave me the opportunity to dive deeper into React Native
              and explore its full potential for building mobile apps. I learned
              how to efficiently work with native components and libraries, and
              how to leverage the platform&apos;s cross-platform capabilities.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              2. Mastering React Native Reanimated
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              React Native Reanimated was a new library for me, and integrating
              smooth animations in the mobile app was an exciting challenge. It
              taught me how to create more interactive user interfaces, adding a
              layer of polish to the app.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              3. Applying Tailwind CSS to React Native
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
