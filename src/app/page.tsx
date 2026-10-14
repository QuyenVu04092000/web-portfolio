import { CaseStudiesSection } from "@/sections/CaseStudies";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { SkillsSection } from "@/sections/Skills";
import { StatsSection } from "@/sections/Stats";
import { WeTaxFeatureSection } from "@/sections/WeTaxFeature";
import { StickyCtaBar } from "@/components/StickyCtaBar";

export default function Home() {
  return (
    <div>
      <Header activeId="home" />
      <main id="main-content">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Stats */}
        <StatsSection />

        {/* 3. Technical Skills */}
        <SkillsSection />

        {/* 5. WeTax featured case study */}
        <WeTaxFeatureSection />

        {/* 6. Case studies grid + other projects */}
        <CaseStudiesSection />

        {/* 7. Contact */}
        <ContactSection />
      </main>
      <Footer />
      <StickyCtaBar />
    </div>
  );
}
