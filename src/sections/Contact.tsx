"use client";

import grainImage from "@/assets/images/grain.jpg";
import { ContactForm } from "@/components/ContactForm";
import { useLang } from "@/i18n/LangContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const RESUME_URL =
  "https://drive.google.com/file/d/1qryyyJZdzNRRNqnZsxYsPJTUDYhjcKWg/view?usp=drive_link";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:vuquyen.04092000@gmail.com",
    display: "vuquyen.04092000@gmail.com",
    icon: (
      <svg className="size-4 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/quyenvu040900/",
    display: "linkedin.com/in/quyenvu040900",
    icon: (
      <svg className="size-4 text-gray-900" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    label: "Resume",
    href: RESUME_URL,
    display: "Download PDF",
    icon: (
      <svg className="size-4 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export const ContactSection = () => {
  const { t } = useLang();
  return (
    <section aria-label="Contact" className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-gray-800 border border-white/10 rounded-3xl relative overflow-hidden z-0">
            <div
              className="absolute inset-0 opacity-5 -z-10"
              style={{ backgroundImage: `url(${grainImage.src})` }}
            />
            <div className="flex flex-col lg:flex-row">
              {/* Left panel */}
              <div className="lg:w-2/5 bg-gradient-to-r from-emerald-300 to-sky-400 p-6 md:p-10 flex flex-col justify-center rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
                <h2 className="font-serif text-2xl md:text-3xl text-gray-900">
                  {t.contact.title}
                </h2>
                <p className="text-gray-700 mt-3 text-sm md:text-base">
                  {t.contact.description}
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={link.href.startsWith("mailto") ? undefined : "noreferrer"}
                      className="flex items-center gap-3 group"
                    >
                      <div className="bg-gray-900/20 rounded-lg p-2 shrink-0">
                        {link.icon}
                      </div>
                      <span className="text-gray-900 text-sm font-medium group-hover:underline flex items-center gap-1 break-all">
                        {link.display}
                        {!link.href.startsWith("mailto") && <ArrowUpRightIcon className="size-3 opacity-60" />}
                      </span>
                    </a>
                  ))}
                  <div className="flex items-center gap-3 mt-1">
                    <div className="bg-gray-900/20 rounded-lg p-2">
                      <div className="size-4 flex items-center justify-center">
                        <div className="bg-green-600 size-2.5 rounded-full" />
                      </div>
                    </div>
                    <span className="text-gray-900 text-sm font-medium">{t.contact.available}</span>
                  </div>
                </div>
              </div>

              {/* Right panel */}
              <div className="lg:w-3/5 p-8 md:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
