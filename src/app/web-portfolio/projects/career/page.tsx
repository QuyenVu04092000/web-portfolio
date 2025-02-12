"use client";

import React, { useRef } from "react";
import { Header } from "@/sections/Header";
import career from "@/assets/images/career.png";
import Image from "next/image";
import { slideInFromBottom } from "../../../../../utils/motion";
import { motion, useInView } from "framer-motion";
export default function Career() {
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
              Building the Career Guidance App for LOF: Empowering Users to
              Succeed Professionally
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
                  International Dairy Products JSC
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
                  11 months
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
                Flutter, State Management (BLoC Cubit), Socket for Chat
              </p>
            </div>
          </div>
          <Image
            src={career}
            alt="vdental"
            className="w-full h-full object-cover rounded-3xl bg-white"
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
              In an ever-changing world, individuals need the tools to adapt,
              grow, and make informed decisions about their professional
              futures. The Career Guidance App for LOF is designed to provide
              users with a self-training platform that promotes skill
              development, fosters knowledge-sharing, and connects them with
              like-minded individuals. By offering features that enable users to
              discover themselves, expand their networks, and succeed
              professionally, this app is a comprehensive solution for career
              growth and development.
            </p>
            <p className="text-white/60 px-4 text-lg md:text-xl mt-4">
              The application was developed using Flutter for a cross-platform
              experience, while BLoC Cubit was implemented for state management
              to ensure the app’s performance remained smooth and responsive.
              For real-time communication, Socket was integrated, allowing users
              to engage in live chat, discuss career-related topics, and
              exchange ideas in an interactive environment.
            </p>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Key Features of the Career Guidance App
            </h1>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide mb-8">
              🎯 Skill Self-Training
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              The app&apos;s primary goal is to help users build their skills
              and prepare for future career challenges. It provides a structured
              approach to self-training with learning modules, interactive
              exercises, and assessments. Users can track their progress as they
              move through different topics, ensuring they stay on track with
              their personal development.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🌐 Knowledge Sharing
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              The Career Guidance App encourages users to connect and share
              knowledge with others. By providing a platform for peer-to-peer
              interaction, the app allows users to engage with experienced
              professionals and mentors. They can exchange advice, share
              resources, and learn from each other&apos;s career journeys,
              fostering a supportive community.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🧠 Self-Discovery
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Through personalized assessments, challenges, and feedback, users
              can discover their strengths and identify areas for improvement.
              The app includes personality tests, career aptitude assessments,
              and skill evaluations that help users understand where they excel
              and where they may need to focus their efforts for growth.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              💬 Live Chat
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              With the Socket integration, users can engage in real-time chat
              with mentors, peers, and other professionals. This feature
              facilitates instant communication, enabling users to ask
              questions, seek guidance, or simply have career-related
              discussions, creating a dynamic and interactive learning
              environment.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🌟 Success Tracking
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              The app also includes features to track a user&apos;s career
              journey. With a goal-setting system and progress tracking, users
              can stay motivated and see how far they&apos;ve come. This is an
              essential aspect of the app, ensuring users have tangible evidence
              of their growth and accomplishments.
            </p>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Technologies and Tools
            </h1>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide mb-8">
              📱 Flutter for Cross-Platform Development
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Developing the Career Guidance App in Flutter allowed us to create
              a seamless, cross-platform experience for both iOS and Android
              users. Flutter&apos;s flexibility and ease of use made it an ideal
              choice for building a feature-rich app that runs smoothly on
              multiple platforms, while maintaining a native-like experience for
              users.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🔄 State Management with BLoC Cubit
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              We used BLoC Cubit for state management to maintain a clean
              architecture and ensure optimal app performance. By using this
              pattern, we ensured that the app remains scalable and responsive,
              while making it easy to manage the app&apos;s state in a way that
              is both maintainable and efficient.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              💬 Socket for Real-Time Communication
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Integrating Socket for real-time chat allows users to engage with
              mentors and peers instantly. This technology ensures that users
              receive immediate responses to their queries and can hold live
              conversations with others in the community. Whether it&apos;s
              asking for advice or collaborating on career-related topics, the
              socket functionality fosters a more connected and interactive user
              experience.
            </p>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Key Learnings and Challenges
            </h1>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide mb-8">
              ✅ Mastering Flutter Development
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Building the Career Guidance App in Flutter provided me with an
              in-depth understanding of cross-platform mobile development. I
              learned how to efficiently design and implement user interfaces
              that work across both iOS and Android platforms while ensuring a
              smooth, high-performance experience for users.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🧠 State Management with BLoC Cubit
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              I delved deeper into state management using BLoC Cubit, a
              framework that helps manage complex states in Flutter
              applications. I was able to understand the power of separating
              business logic from the UI layer, which made the app more
              organized and easier to maintain.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              💬 Socket Integration for Chat
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Integrating Socket for real-time chat was an exciting challenge.
              It taught me how to handle live communication between users, and
              how to manage real-time data efficiently. This feature is one of
              the key aspects of the app, ensuring users can engage in
              meaningful discussions instantly.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🤝 Collaboration with S3Corp
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              I had the opportunity to work closely with S3Corp, the development
              partner for this project. This collaboration taught me how to work
              with external teams effectively and understand client requirements
              to deliver a solution that aligns with their vision.
            </p>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Conclusion
            </h1>

            <p className="text-white/60 px-4 text-lg md:text-xl">
              The Career Guidance App for LOF empowers users to take charge of
              their professional growth. By combining self-training,
              knowledge-sharing, self-discovery, and real-time chat, this app
              provides a holistic approach to career development. Working with
              Flutter, BLoC Cubit, and Socket allowed me to gain invaluable
              experience in cross-platform development, state management, and
              real-time communication.
            </p>
            <p className="text-white/60 px-4 text-lg md:text-xl my-4">
              This project has not only enhanced my technical skills but also
              allowed me to work with an amazing team at S3Corp.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
