"use client";

import React, { useRef } from "react";
import { Header } from "@/sections/Header";
import vdental_bg from "@/assets/images/vdental_bg.png";
import Image from "next/image";
import { slideInFromBottom } from "../../../../utils/motion";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/i18n/LangContext";

export default function Vdental() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const contentRef = useRef(null);
  const isInViewContent = useInView(contentRef, { once: true, margin: "-50px" });
  const { t, locale } = useLang();
  const L = t.detailLabels;

  const content = {
    en: {
      title: "Building VDental: A Platform to Bridge U.S. Clients with Dental Clinics in Vietnam",
      client: "V-Dental",
      role: "Front-end Developer and Mobile Developer",
      timeline: "4 months",
      tech: "Next.js, Tailwind CSS, React Native",
      intro: <>
        The healthcare industry has seen a significant shift towards digital transformation, especially when it comes to making healthcare services more accessible internationally. As part of my journey to contribute to this transformation, I worked on a project called{" "}
        <span className="text-white">VDental</span>, a web and app platform designed to help U.S.-based clients book dental appointments with clinics in Vietnam. This project allowed me to explore international healthcare services and provided valuable experience building a full-stack platform using modern technologies like{" "}
        <span className="text-white">Next.js, React Native, and Tailwind CSS</span>.
      </>,
      whatIs: <>
        <p className="text-white/60 px-4 text-lg md:text-xl">
          VDental aims to provide a seamless booking experience for clients in the U.S. looking to schedule dental appointments at clinics in Vietnam. With online booking, appointment management, and live communication with clinics, VDental bridges the gap between international clients and high-quality dental care in Vietnam.
        </p>
        <p className="text-white/60 px-4 text-lg md:text-xl mt-4">
          Whether it&apos;s a routine check-up or more specialized dental treatments, users can browse clinic options, book appointments, view appointment details, and even chat with clinic staff — all from the comfort of their own home.
        </p>
      </>,
      features: [
        { title: "1. Appointment Booking", body: "The core feature of VDental is a straightforward and intuitive appointment booking system. Clients can browse through available dental clinics in Vietnam, view available appointment slots, and book their desired time." },
        { title: "2. View Appointment Details", body: "Once an appointment is booked, users can access detailed information about their upcoming visit. This includes the clinic's location, dentist details, the specific dental service, and any additional instructions." },
        { title: "3. Chat Functionality", body: "To enhance communication between clients and clinics, VDental integrates a real-time chat feature. Users can ask questions, clarify appointment details, or discuss specific dental concerns directly with clinic staff." },
        { title: "4. Clinic Summaries", body: "VDental provides detailed summaries of each clinic including services offered, facilities available, and information about the dental staff's qualifications. Clients can choose a clinic based on their needs and preferences." },
      ],
      techStack: [
        { title: "1. Next.js for Web Development", body: "I chose Next.js to build the web platform for VDental because of its ability to deliver fast, SEO-friendly, and scalable web applications. Server-side rendering and automatic code splitting helped create a smooth, fast-loading experience." },
        { title: "2. React Native for Mobile Development", body: "For the mobile version, I used React Native to create a native app for both iOS and Android. This enabled me to build a cross-platform app with a single codebase, reducing development time while maintaining a great user experience." },
        { title: "3. Tailwind CSS for Styling", body: "Both the web and mobile versions were styled using Tailwind CSS. With its utility-first approach, Tailwind allowed me to quickly build responsive layouts and make style adjustments as needed." },
      ],
      learnings: [
        { title: "1. Deepened Knowledge of React Native", body: "VDental gave me the opportunity to dive deeper into React Native and explore its full potential for building mobile apps. I learned how to efficiently work with native components and libraries, and how to leverage cross-platform capabilities." },
        { title: "2. Mastering React Native Reanimated", body: "React Native Reanimated was a new library for me, and integrating smooth animations in the mobile app was an exciting challenge. It taught me how to create more interactive user interfaces." },
        { title: "3. Applying Tailwind CSS to React Native", body: "While I was already familiar with Tailwind CSS in web development, applying it to React Native was a unique learning experience requiring a different approach but keeping design consistent." },
        { title: "4. Deploying the App to Play Store and App Store", body: "The deployment process was another major learning curve. Releasing an app to both Google Play and the Apple App Store posed challenges related to platform-specific configurations, submission guidelines, and optimization." },
      ],
    },
    vi: {
      title: "Xây dựng VDental: Nền tảng kết nối khách hàng Mỹ với phòng khám nha khoa Việt Nam",
      client: "V-Dental",
      role: "Front-end Developer và Mobile Developer",
      timeline: "4 tháng",
      tech: "Next.js, Tailwind CSS, React Native",
      intro: <>
        Ngành y tế đã chứng kiến sự chuyển đổi số đáng kể, đặc biệt trong việc làm cho dịch vụ y tế dễ tiếp cận hơn trên phạm vi quốc tế. Tôi đã tham gia dự án{" "}
        <span className="text-white">VDental</span>, một nền tảng web và app được thiết kế để giúp khách hàng tại Mỹ đặt lịch khám nha khoa tại các phòng khám ở Việt Nam. Dự án sử dụng các công nghệ hiện đại như{" "}
        <span className="text-white">Next.js, React Native và Tailwind CSS</span>.
      </>,
      whatIs: <>
        <p className="text-white/60 px-4 text-lg md:text-xl">
          VDental hướng tới việc cung cấp trải nghiệm đặt lịch liền mạch cho khách hàng tại Mỹ muốn đặt lịch khám nha khoa tại các phòng khám ở Việt Nam. Với tính năng đặt lịch trực tuyến, quản lý lịch hẹn và giao tiếp trực tiếp với phòng khám, VDental thu hẹp khoảng cách giữa khách hàng quốc tế và dịch vụ nha khoa chất lượng cao tại Việt Nam.
        </p>
        <p className="text-white/60 px-4 text-lg md:text-xl mt-4">
          Dù là kiểm tra định kỳ hay điều trị chuyên sâu, người dùng có thể tìm kiếm phòng khám, đặt lịch hẹn, xem chi tiết lịch hẹn và thậm chí chat với nhân viên phòng khám — tất cả từ nhà.
        </p>
      </>,
      features: [
        { title: "1. Đặt lịch hẹn", body: "Tính năng cốt lõi của VDental là hệ thống đặt lịch hẹn đơn giản và trực quan. Khách hàng có thể xem các phòng khám nha khoa tại Việt Nam, xem các khung giờ trống và đặt lịch theo ý muốn." },
        { title: "2. Xem chi tiết lịch hẹn", body: "Sau khi đặt lịch, người dùng có thể xem thông tin chi tiết về lịch hẹn sắp tới, bao gồm địa điểm phòng khám, thông tin bác sĩ, dịch vụ nha khoa cụ thể và các hướng dẫn bổ sung." },
        { title: "3. Tính năng Chat", body: "Để tăng cường giao tiếp giữa khách hàng và phòng khám, VDental tích hợp tính năng chat thời gian thực. Người dùng có thể đặt câu hỏi, làm rõ chi tiết lịch hẹn hoặc thảo luận về các vấn đề nha khoa trực tiếp với nhân viên." },
        { title: "4. Tóm tắt thông tin phòng khám", body: "VDental cung cấp thông tin chi tiết về từng phòng khám bao gồm danh sách dịch vụ, cơ sở vật chất và thông tin về trình độ của đội ngũ nha sĩ. Khách hàng có thể chọn phòng khám phù hợp với nhu cầu." },
      ],
      techStack: [
        { title: "1. Next.js cho Web", body: "Tôi chọn Next.js để xây dựng nền tảng web cho VDental vì khả năng cung cấp ứng dụng web nhanh, thân thiện SEO và có thể mở rộng. Server-side rendering và code splitting tự động giúp tạo trải nghiệm tải trang nhanh." },
        { title: "2. React Native cho Mobile", body: "Cho phiên bản mobile, tôi dùng React Native để tạo app native cho cả iOS và Android. Điều này giúp xây dựng app đa nền tảng với một codebase duy nhất, giảm thời gian phát triển mà vẫn đảm bảo trải nghiệm tốt." },
        { title: "3. Tailwind CSS cho Styling", body: "Cả phiên bản web và mobile đều được style bằng Tailwind CSS. Với cách tiếp cận utility-first, Tailwind cho phép xây dựng nhanh các layout responsive và điều chỉnh style khi cần." },
      ],
      learnings: [
        { title: "1. Hiểu sâu hơn về React Native", body: "VDental cho tôi cơ hội khám phá sâu hơn về React Native và tiềm năng đầy đủ của nó trong việc xây dựng ứng dụng di động. Tôi học cách làm việc hiệu quả với các native components và libraries." },
        { title: "2. Làm chủ React Native Reanimated", body: "React Native Reanimated là thư viện mới với tôi, và việc tích hợp các animation mượt mà trong app mobile là một thách thức thú vị, dạy tôi cách tạo UI tương tác hơn." },
        { title: "3. Áp dụng Tailwind CSS cho React Native", body: "Dù đã quen thuộc với Tailwind CSS trong web, việc áp dụng nó cho React Native là trải nghiệm học hỏi độc đáo, yêu cầu cách tiếp cận khác nhưng giữ thiết kế nhất quán." },
        { title: "4. Phát hành App lên Play Store và App Store", body: "Quá trình triển khai là một thử thách lớn. Việc phát hành app lên cả Google Play và Apple App Store đòi hỏi xử lý các cấu hình đặc thù của từng nền tảng, hướng dẫn nộp app và tối ưu hóa." },
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
          <Image src={vdental_bg} alt="vdental" className="w-full h-full object-cover rounded-3xl" />
        </motion.div>

        <motion.div ref={contentRef} variants={slideInFromBottom} initial="hidden" animate={isInViewContent ? "visible" : "hidden"}>
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">{L.introduction}</h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">{c.intro}</p>
          </div>
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">{L.whatIs} VDental?</h1>
            {c.whatIs}
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">{L.keyFeatures}</h1>
            {c.features.map((item, i) => (
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
