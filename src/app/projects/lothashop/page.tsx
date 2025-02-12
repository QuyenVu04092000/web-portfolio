"use client";

import React, { useRef } from "react";
import { Header } from "@/sections/Header";
import lothashop_bg from "@/assets/images/lothashop_bg.png";
import Image from "next/image";
import { slideInFromBottom } from "../../../../utils/motion";
import { motion, useInView } from "framer-motion";
export default function Lothashop() {
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
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Building Lothashop: A Smart Shopping App for Lothamilk Customers
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
                  Lothamilk JSC
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
                  10 months
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
                Next.js, Tailwind CSS, Flutter, VNPay Integration
              </p>
            </div>
          </div>
          <Image
            src={lothashop_bg}
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
              In today&apos;s digital economy, businesses are looking for
              innovative ways to enhance the shopping experience and create
              direct engagement with customers.{" "}
              <span className="text-white/100">Lothashop</span> was built as a
              smart shopping application that allows users to purchase Lothamilk
              products, accumulate reward points, and even register as a{" "}
              <span className="text-white/100">Lothamilk Personal Agent</span>.
              This app empowers users to either buy products for personal
              consumption or resell them to others with attractive promotions
              and vouchers.
            </p>
            <p className="text-white/60 px-4 text-lg md:text-xl mt-4">
              This project was an exciting challenge as it required integrating
              multiple features, including{" "}
              <span className="text-white/100">
                e-commerce functionalities, loyalty programs, personal agent
                registration, and payment processing via VNPay
              </span>
              . The development involved both{" "}
              <span className="text-white/100">
                web (Next.js, Tailwind CSS) and mobile (Flutter)
              </span>{" "}
              platforms, ensuring a seamless cross-platform shopping experience.
            </p>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Key Features of Lothashop
            </h1>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide mb-8">
              🛒 Order Products Directly
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Customers can browse and purchase Lothamilk products directly from
              the app. The ordering system ensures a smooth and secure shopping
              experience, making it easy for users to get their favorite dairy
              products delivered to their doorstep.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🎟 Apply Vouchers & Promotions
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Lothashop offers an attractive rewards system where customers can
              apply vouchers and promotional discounts during checkout. This
              feature not only encourages customer loyalty but also enhances the
              overall shopping experience.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              👥 Register as a Personal Agent
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              One of the most unique aspects of Lothashop is its Personal Agent
              program. Customers can register to become agents, allowing them to
              purchase Lothamilk products in bulk and sell them to other
              consumers while enjoying special incentives and commissions.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              📦 Track Orders in Real-Time
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Customers can monitor their orders from placement to delivery,
              ensuring transparency and trust in the purchasing process. They
              can also check their order history for better management of past
              purchases.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              💳 Seamless Payments with VNPay
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              To facilitate fast and secure payments, we integrated VNPay, a
              leading payment gateway in Vietnam. Customers can pay conveniently
              through various methods, including online banking and QR code
              payments.
            </p>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Technologies and Tools
            </h1>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide mb-8">
              🚀 Next.js for the Web Platform
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              I used Next.js to build the web version of Lothashop, benefiting
              from its server-side rendering (SSR) and static site generation
              (SSG) capabilities for improved performance and SEO. The framework
              provided a fast, scalable, and SEO-friendly environment, ensuring
              that customers could easily discover Lothashop online.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🎨 Tailwind CSS for Responsive UI
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              For styling, I implemented Tailwind CSS, which allowed for rapid
              development of clean and responsive UI components. This made it
              easier to create an intuitive and visually appealing shopping
              experience.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              📱 Flutter for Mobile App Development
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Since Lothashop needed to be available on both Android and iOS, I
              used Flutter to build the mobile application. Flutter&apos;s
              cross-platform capabilities ensured a consistent experience across
              devices while reducing development time.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🔄 State Management with Cubit
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              To efficiently manage the app&apos;s state, I implemented Cubit, a
              lightweight state management solution from the Bloc library. This
              improved the app&apos;s performance and helped maintain a
              structured approach to data handling.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              💰 VNPay Payment Integration
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              One of the biggest technical challenges was integrating VNPay,
              which required collaboration with their development team. This
              allowed customers to pay securely via multiple payment methods,
              including bank transfers and QR codes.
            </p>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Key Learnings and Challenges
            </h1>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide mb-8">
              ✅ Deepened React & React Hook Knowledge
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Working on the web platform helped me strengthen my understanding
              of React and React Hooks, optimizing state and lifecycle
              management within functional components.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              📱 Exploring Flutter & State Management
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Since the mobile app was built using Flutter, I had the
              opportunity to dive deeper into Flutter development, especially
              focusing on Cubit for state management. Learning how to manage
              complex application states efficiently was a valuable takeaway.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🎯 Releasing Apps to Google Play & Apple App Store
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              The deployment process was a crucial learning experience, as I had
              to navigate the submission process for both Google Play and the
              Apple App Store. This involved handling app reviews, compliance
              with platform guidelines, and optimizing performance.
            </p>
            <h1 className="font-serif px-4 text-xl md:text-3xl text-left  tracking-wide my-8">
              🔗 Collaboration with VNPay Teams
            </h1>
            <p className="text-white/60 px-4 text-lg md:text-xl">
              Integrating VNPay required working closely with three different
              teams at VNPay to ensure proper implementation and troubleshooting
              of payment processing. This experience improved my ability to
              collaborate with external teams and manage third-party
              integrations effectively.
            </p>
          </div>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="my-8">
            <h1 className="font-serif px-4 text-3xl md:text-5xl text-left  tracking-wide mb-8">
              Conclusion
            </h1>

            <p className="text-white/60 px-4 text-lg md:text-xl">
              Lothashop was a rewarding project that allowed me to work on a
              full-fledged e-commerce platform while gaining hands-on experience
              with Next.js, React, Flutter, VNPay, and state management
              techniques.
            </p>
            <p className="text-white/60 px-4 text-lg md:text-xl my-4">
              Through this project, I not only built a robust shopping
              application but also learned how to navigate payment integrations,
              cross-platform development, and app deployment. With Lothashop now
              fully functional, customers can enjoy a seamless shopping
              experience, buying, earning rewards, and becoming Lothamilk
              agents—all in one place!
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
