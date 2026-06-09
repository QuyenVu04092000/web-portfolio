"use client";

import React, { useRef } from "react";
import { Header } from "@/sections/Header";
import wetax from "@/assets/images/wetax.png";
import Image from "next/image";
import { slideInFromBottom } from "../../../../utils/motion";
import { motion, useInView } from "framer-motion";

export default function WeTax() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const contentRef = useRef(null);
  const isInViewContent = useInView(contentRef, { once: true, margin: "-50px" });

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
            WeTax: Enterprise E-Invoicing Platform for Webcash Vietnam
          </h1>
          <div className="flex sm:flex-col md:flex-row lg:flex-row items-start justify-start md:gap-8 lg:gap-8 sm:gap-2">
            <div>
              <p className="text-left px-4 text-white/60 mt-4 md:text-lg lg:text-xl">
                Client
              </p>
              <p className="py-2 px-4 rounded-full transition-all text-lg text-white hover:bg-white/20">
                Webcash Vietnam
              </p>
            </div>
            <div>
              <p className="text-left px-4 text-white/60 mt-4 md:text-lg lg:text-xl">
                Role
              </p>
              <p className="py-2 rounded-full px-4 transition-all text-lg text-white hover:bg-white/20">
                Senior Front-End Developer
              </p>
            </div>
            <div>
              <p className="text-left px-4 text-white/60 mt-4 md:text-lg lg:text-xl">
                Timeline
              </p>
              <p className="py-2 px-4 rounded-full transition-all text-lg text-white hover:bg-white/20">
                03/2025 – Present
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col items-start justify-start">
            <p className="text-left px-4 text-white/60 mt-4 md:text-lg lg:text-xl">
              Technologies Used
            </p>
            <p className="py-2 px-4 rounded-full transition-all text-lg text-white hover:bg-white/20">
              Next.js, TypeScript, React Query, Zustand, WebSocket, Tailwind CSS
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
            src={wetax}
            alt="WeTax"
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
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">
              Introduction
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              WeTax is a high-scale e-invoicing platform developed at{" "}
              <span className="text-white">Webcash Vietnam</span>, designed to
              handle tens of millions of electronic invoices for enterprise
              clients across various industries. As a Senior Front-End Developer,
              I led key performance improvements and feature development to
              ensure the platform could scale reliably under heavy load.
            </p>
          </div>

          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">
              What is WeTax?
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              WeTax is an enterprise-grade electronic invoicing system that
              enables businesses to issue, manage, and track digital invoices in
              compliance with Vietnamese tax regulations. The platform supports
              multiple invoice types, real-time status updates, and bulk
              operations for high-volume enterprise use cases.
            </p>
            <p className="text-white/60 px-4 text-lg md:text-xl mt-4">
              From small businesses to large corporations, WeTax streamlines the
              entire invoicing workflow — from creation and issuance to
              reporting and tax submission.
            </p>
          </div>

          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">
              Key Contributions
            </h1>

            <h2 className="font-serif px-4 text-xl md:text-3xl text-left tracking-wide mb-4">
              1. PDF Rendering Performance (~90% improvement)
            </h2>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Identified a critical bottleneck in client-side PDF generation and
              led the migration to server-side processing using{" "}
              <span className="text-white">wkhtmltopdf</span> (Java backend).
              This reduced PDF generation time by approximately 90%, drastically
              improving load speed and user experience for invoices with complex
              layouts.
            </p>

            <h2 className="font-serif px-4 text-xl md:text-3xl text-left tracking-wide my-8">
              2. Invoice Editor Refactor (~90% complexity reduction)
            </h2>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              The legacy invoice editor was a large monolithic component that was
              difficult to maintain and extend. I refactored it into modular
              components and custom hooks, reducing complexity by ~90% and
              enabling the team to ship new invoice types significantly faster.
            </p>

            <h2 className="font-serif px-4 text-xl md:text-3xl text-left tracking-wide my-8">
              3. Data-Heavy Listing Page Optimization
            </h2>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Invoice listing pages with thousands of rows were a common pain
              point. I implemented{" "}
              <span className="text-white">
                React Query caching, server-side pagination, and UI
                virtualization
              </span>{" "}
              to eliminate unnecessary re-fetches and keep rendering fast
              regardless of dataset size.
            </p>

            <h2 className="font-serif px-4 text-xl md:text-3xl text-left tracking-wide my-8">
              4. Real-Time Notifications via WebSocket
            </h2>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Implemented WebSocket integration to deliver real-time
              notifications for invoice status changes, system alerts, and
              processing updates — keeping users informed without requiring
              manual page refreshes.
            </p>
          </div>

          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">
              Technologies and Tools
            </h1>
            <h2 className="font-serif px-4 text-xl md:text-3xl text-left tracking-wide mb-4">
              1. Next.js & TypeScript
            </h2>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Built the frontend architecture with Next.js and TypeScript for
              type safety, scalable routing, and optimized data fetching
              patterns.
            </p>
            <h2 className="font-serif px-4 text-xl md:text-3xl text-left tracking-wide my-8">
              2. React Query & Zustand
            </h2>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Used React Query (useQuery) for server state management with
              automatic caching and background refetching. Zustand handled
              lightweight global client state for UI preferences and session
              data.
            </p>
            <h2 className="font-serif px-4 text-xl md:text-3xl text-left tracking-wide my-8">
              3. WebSocket
            </h2>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Integrated WebSocket connections for persistent real-time
              communication between the frontend and backend, enabling live
              invoice status tracking and push notifications.
            </p>
          </div>

          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">
              Key Learnings
            </h1>
            <h2 className="font-serif px-4 text-xl md:text-3xl text-left tracking-wide mb-4">
              1. Performance at Enterprise Scale
            </h2>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Working with tens of millions of invoices taught me to think about
              performance at every layer — from data fetching strategies to
              render optimization and server-side offloading.
            </p>
            <h2 className="font-serif px-4 text-xl md:text-3xl text-left tracking-wide my-8">
              2. Cross-Team Collaboration
            </h2>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Collaborated closely with the Java backend team to design API
              contracts, troubleshoot performance bottlenecks, and ensure system
              stability across high-volume transaction periods.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
