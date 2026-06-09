"use client";

import grainImage from "@/assets/images/grain.jpg";
import { ContactForm } from "@/components/ContactForm";
import { useLang } from "@/i18n/LangContext";
import { ScrollReveal } from "@/components/ScrollReveal";

export const ContactSection = () => {
  const { t } = useLang();
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <ScrollReveal direction="up" delay={0.1}>
        <div className="bg-gray-800 border border-white/10 rounded-3xl relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 bg-gradient-to-r from-emerald-300 to-sky-400 p-10 flex flex-col justify-center rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
              <h2 className="font-serif text-2xl md:text-3xl text-gray-900">
                {t.contact.title}
              </h2>
              <p className="text-gray-700 mt-3 text-sm md:text-base">
                {t.contact.description}
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-900/20 rounded-lg p-2">
                    <svg className="size-4 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-900 text-sm font-medium">vuquyen.04092000@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gray-900/20 rounded-lg p-2">
                    <svg className="size-4 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <span className="text-gray-900 text-sm font-medium">{t.contact.replyTime}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gray-900/20 rounded-lg p-2">
                    <div className="size-4 flex items-center justify-center">
                      <div className="bg-green-600 size-2.5 rounded-full" />
                    </div>
                  </div>
                  <span className="text-gray-900 text-sm font-medium">{t.contact.available}</span>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 p-8 md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
