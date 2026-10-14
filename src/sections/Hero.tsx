"use client";

import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { useLang } from "@/i18n/LangContext";
import { useEffect, useState, useRef } from "react";

const RESUME_URL =
  "https://drive.google.com/file/d/1qryyyJZdzNRRNqnZsxYsPJTUDYhjcKWg/view?usp=drive_link";

const useTypewriter = (words: string[], speed = 80, pause = 1800) => {
  const [display, setDisplay] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(words[0].length);
  const [deleting, setDeleting] = useState(false);
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (reducedRef.current) return; // skip animation when motion is reduced
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex((w) => w + 1);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return display;
};

export const HeroSection = () => {
  const { t } = useLang();
  const typed = useTypewriter(t.hero.roles as unknown as string[]);

  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip" id="home">
      <div className="absolute -z-10 inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }} />
        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring" />
        <div className="size-[1020px] hero-ring" />
        <div className="size-[1220px] hero-ring" />
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            className="size-[100px]"
            src={memojiImage}
            alt="Memoji of a person at a laptop"
            priority
          />
        </div>

        {/* Availability badge */}
        <div className="w-full flex items-center justify-center mt-4">
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full" />
            </div>
            <div className="text-sm font-medium">{t.hero.available}</div>
          </div>
        </div>

        {/* Title + typewriter */}
        <div className="max-w-xl mx-auto text-center mt-8">
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide">
            Vu Duc Quyen{" "}
            <span className="text-white/40 text-2xl md:text-3xl">(Buck)</span>
          </h1>
          <p className="mt-2 text-white/60 text-lg md:text-xl font-medium">
            {t.hero.title}
          </p>
          <div className="mt-1 h-7 flex items-center justify-center">
            <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent font-semibold text-base md:text-lg">
              {typed}
            </span>
          </div>
          <p className="mt-4 text-white/60 md:text-lg">{t.hero.description}</p>

          {/* Location */}
          <p className="mt-3 text-white/40 text-sm flex items-center justify-center gap-1.5">
            <svg className="size-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418-4.418-7-8.582-7-11a7 7 0 0114 0c0 2.418-2.582 6.582-7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {t.hero.location}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-3 flex-wrap">
          {/* View Case Study — primary */}
          <a
            href="/web-portfolio/projects/wetax"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 px-6 h-12 rounded-xl font-semibold hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          >
            {t.hero.viewCaseStudy}
          </a>

          {/* Download Resume */}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 h-12 rounded-xl font-semibold hover:bg-white/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {t.hero.downloadResume}
            <ArrowUpRightIcon className="size-4" />
          </a>

          {/* Contact */}
          <button
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer hover:border-white/30 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="font-semibold">{t.hero.hireMe}</span>
            <ArrowDown className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
