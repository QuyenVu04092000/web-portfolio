"use client";

import React, { useRef } from "react";
import { Header } from "@/sections/Header";
import wetax from "@/assets/images/wetax.png";
import Image from "next/image";
import { slideInFromBottom } from "../../../../utils/motion";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/i18n/LangContext";

export default function WeTax() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const contentRef = useRef(null);
  const isInViewContent = useInView(contentRef, { once: true, margin: "-50px" });
  const { t, locale } = useLang();
  const L = t.detailLabels;

  const content = {
    en: {
      title: "WeTax: Enterprise E-Invoicing Platform for Webcash Vietnam",
      client: "Webcash Vietnam",
      role: "Senior Front-End Developer",
      timeline: "03/2025 – Present",
      tech: "Next.js, TypeScript, React Query, Zustand, WebSocket, Tailwind CSS",
      intro: <>
        WeTax is a high-scale e-invoicing platform developed at{" "}
        <span className="text-white">Webcash Vietnam</span>, designed to handle tens of millions of electronic invoices for enterprise clients across various industries. As a Senior Front-End Developer, I led key performance improvements and feature development to ensure the platform could scale reliably under heavy load.
      </>,
      whatIs: <>
        <p className="text-white/60 px-4 text-lg md:text-xl">
          WeTax is an enterprise-grade electronic invoicing system that enables businesses to issue, manage, and track digital invoices in compliance with Vietnamese tax regulations. The platform supports multiple invoice types, real-time status updates, and bulk operations for high-volume enterprise use cases.
        </p>
        <p className="text-white/60 px-4 text-lg md:text-xl mt-4">
          From small businesses to large corporations, WeTax streamlines the entire invoicing workflow — from creation and issuance to reporting and tax submission.
        </p>
      </>,
      contributions: [
        { title: "1. PDF Rendering Performance (~90% improvement)", body: <>Identified a critical bottleneck in client-side PDF generation and led the migration to server-side processing using <span className="text-white">wkhtmltopdf</span> (Java backend). This reduced PDF generation time by approximately 90%, drastically improving load speed and user experience for invoices with complex layouts.</> },
        { title: "2. Invoice Editor Refactor (~90% complexity reduction)", body: "The legacy invoice editor was a large monolithic component that was difficult to maintain and extend. I refactored it into modular components and custom hooks, reducing complexity by ~90% and enabling the team to ship new invoice types significantly faster." },
        { title: "3. Data-Heavy Listing Page Optimization", body: <>Invoice listing pages with thousands of rows were a common pain point. I implemented <span className="text-white">React Query caching, server-side pagination, and UI virtualization</span> to eliminate unnecessary re-fetches and keep rendering fast regardless of dataset size.</> },
        { title: "4. Real-Time Notifications via WebSocket", body: "Implemented WebSocket integration to deliver real-time notifications for invoice status changes, system alerts, and processing updates — keeping users informed without requiring manual page refreshes." },
      ],
      techStack: [
        { title: "1. Next.js & TypeScript", body: "Built the frontend architecture with Next.js and TypeScript for type safety, scalable routing, and optimized data fetching patterns." },
        { title: "2. React Query & Zustand", body: "Used React Query for server state management with automatic caching and background refetching. Zustand handled lightweight global client state for UI preferences and session data." },
        { title: "3. WebSocket", body: "Integrated WebSocket connections for persistent real-time communication between the frontend and backend, enabling live invoice status tracking and push notifications." },
      ],
      learnings: [
        { title: "1. Performance at Enterprise Scale", body: "Working with tens of millions of invoices taught me to think about performance at every layer — from data fetching strategies to render optimization and server-side offloading." },
        { title: "2. Cross-Team Collaboration", body: "Collaborated closely with the Java backend team to design API contracts, troubleshoot performance bottlenecks, and ensure system stability across high-volume transaction periods." },
      ],
    },
    vi: {
      title: "WeTax: Nền tảng hóa đơn điện tử doanh nghiệp của Webcash Vietnam",
      client: "Webcash Vietnam",
      role: "Senior Front-End Developer",
      timeline: "03/2025 – Hiện tại",
      tech: "Next.js, TypeScript, React Query, Zustand, WebSocket, Tailwind CSS",
      intro: <>
        WeTax là nền tảng hóa đơn điện tử quy mô lớn được phát triển tại{" "}
        <span className="text-white">Webcash Vietnam</span>, được thiết kế để xử lý hàng chục triệu hóa đơn điện tử cho khách hàng doanh nghiệp. Với vai trò Senior Front-End Developer, tôi dẫn đầu các cải tiến hiệu suất quan trọng và phát triển tính năng để đảm bảo nền tảng có thể mở rộng đáng tin cậy dưới tải nặng.
      </>,
      whatIs: <>
        <p className="text-white/60 px-4 text-lg md:text-xl">
          WeTax là hệ thống hóa đơn điện tử cấp doanh nghiệp cho phép doanh nghiệp phát hành, quản lý và theo dõi hóa đơn kỹ thuật số theo đúng quy định thuế của Việt Nam. Nền tảng hỗ trợ nhiều loại hóa đơn, cập nhật trạng thái thời gian thực và thao tác hàng loạt cho các trường hợp sử dụng khối lượng lớn.
        </p>
        <p className="text-white/60 px-4 text-lg md:text-xl mt-4">
          Từ doanh nghiệp nhỏ đến tập đoàn lớn, WeTax tối ưu hóa toàn bộ quy trình hóa đơn — từ tạo và phát hành đến báo cáo và nộp thuế.
        </p>
      </>,
      contributions: [
        { title: "1. Hiệu suất render PDF (~cải thiện 90%)", body: <>Phát hiện điểm nghẽn quan trọng trong việc tạo PDF phía client và dẫn đầu việc chuyển sang xử lý phía server sử dụng <span className="text-white">wkhtmltopdf</span> (Java backend). Điều này giảm thời gian tạo PDF khoảng 90%, cải thiện đáng kể tốc độ tải và trải nghiệm người dùng.</> },
        { title: "2. Tái cấu trúc Invoice Editor (~giảm 90% độ phức tạp)", body: "Invoice editor cũ là một component monolithic lớn, khó bảo trì và mở rộng. Tôi đã tái cấu trúc thành các component nhỏ và custom hooks, giảm độ phức tạp ~90% và giúp team phát hành các loại hóa đơn mới nhanh hơn đáng kể." },
        { title: "3. Tối ưu trang danh sách dữ liệu lớn", body: <>Các trang danh sách hóa đơn với hàng nghìn dòng là điểm đau thường gặp. Tôi triển khai <span className="text-white">React Query caching, phân trang server-side và UI virtualization</span> để loại bỏ re-fetch không cần thiết và giữ rendering nhanh bất kể kích thước dataset.</> },
        { title: "4. Thông báo thời gian thực qua WebSocket", body: "Tích hợp WebSocket để gửi thông báo thời gian thực về thay đổi trạng thái hóa đơn, cảnh báo hệ thống và cập nhật xử lý — giữ người dùng được thông tin mà không cần làm mới trang thủ công." },
      ],
      techStack: [
        { title: "1. Next.js & TypeScript", body: "Xây dựng kiến trúc frontend với Next.js và TypeScript để đảm bảo type safety, routing có thể mở rộng và các pattern tìm nạp dữ liệu tối ưu." },
        { title: "2. React Query & Zustand", body: "Dùng React Query để quản lý trạng thái server với cache tự động và refetch nền. Zustand xử lý trạng thái client toàn cục nhẹ cho tùy chọn UI và dữ liệu phiên." },
        { title: "3. WebSocket", body: "Tích hợp kết nối WebSocket để giao tiếp thời gian thực liên tục giữa frontend và backend, cho phép theo dõi trạng thái hóa đơn trực tiếp và push notifications." },
      ],
      learnings: [
        { title: "1. Hiệu suất ở quy mô doanh nghiệp", body: "Làm việc với hàng chục triệu hóa đơn dạy tôi nghĩ về hiệu suất ở mọi tầng — từ chiến lược tìm nạp dữ liệu đến tối ưu render và offload phía server." },
        { title: "2. Hợp tác liên nhóm", body: "Hợp tác chặt chẽ với team Java backend để thiết kế API contracts, xử lý bottleneck hiệu suất và đảm bảo ổn định hệ thống trong các giai đoạn giao dịch khối lượng lớn." },
      ],
    },
  };

  const c = content[locale];

  return (
    <div>
      <Header />
      <section className="pb-16 py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
        <motion.div className="my-8" variants={slideInFromBottom} initial="hidden" animate="visible">
          <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">{c.title}</h1>
          <div className="flex sm:flex-col md:flex-row lg:flex-row items-start justify-start md:gap-8 lg:gap-8 sm:gap-2">
            <div>
              <p className="text-left px-4 text-white/60 mt-4 md:text-lg lg:text-xl">{L.client}</p>
              <p className="py-2 px-4 rounded-full transition-all text-lg text-white hover:bg-white/20">{c.client}</p>
            </div>
            <div>
              <p className="text-left px-4 text-white/60 mt-4 md:text-lg lg:text-xl">{L.role}</p>
              <p className="py-2 rounded-full px-4 transition-all text-lg text-white hover:bg-white/20">{c.role}</p>
            </div>
            <div>
              <p className="text-left px-4 text-white/60 mt-4 md:text-lg lg:text-xl">{L.timeline}</p>
              <p className="py-2 px-4 rounded-full transition-all text-lg text-white hover:bg-white/20">{c.timeline}</p>
            </div>
          </div>
          <div className="inline-flex flex-col items-start justify-start">
            <p className="text-left px-4 text-white/60 mt-4 md:text-lg lg:text-xl">{L.technologiesUsed}</p>
            <p className="py-2 px-4 rounded-full transition-all text-lg text-white hover:bg-white/20">{c.tech}</p>
          </div>
        </motion.div>

        <motion.div ref={ref} variants={slideInFromBottom} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <Image src={wetax} alt="WeTax" className="w-full h-full object-cover rounded-3xl" />
        </motion.div>

        <motion.div ref={contentRef} variants={slideInFromBottom} initial="hidden" animate={isInViewContent ? "visible" : "hidden"}>
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">{L.introduction}</h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">{c.intro}</p>
          </div>

          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">{L.whatIs} WeTax?</h1>
            {c.whatIs}
          </div>

          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">{L.keyContributions}</h1>
            {c.contributions.map((item, i) => (
              <div key={i}>
                <h2 className={`font-serif px-4 text-xl md:text-3xl text-left tracking-wide mb-4 ${i > 0 ? "mt-8" : ""}`}>{item.title}</h2>
                <p className="text-white/60 px-4 text-lg md:text-xl">{item.body}</p>
              </div>
            ))}
          </div>

          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">{L.technologies}</h1>
            {c.techStack.map((item, i) => (
              <div key={i}>
                <h2 className={`font-serif px-4 text-xl md:text-3xl text-left tracking-wide mb-4 ${i > 0 ? "mt-8" : ""}`}>{item.title}</h2>
                <p className="text-white/60 px-4 text-lg md:text-xl">{item.body}</p>
              </div>
            ))}
          </div>

          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">{L.learnings}</h1>
            {c.learnings.map((item, i) => (
              <div key={i}>
                <h2 className={`font-serif px-4 text-xl md:text-3xl text-left tracking-wide mb-4 ${i > 0 ? "mt-8" : ""}`}>{item.title}</h2>
                <p className="text-white/60 px-4 text-lg md:text-xl">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
