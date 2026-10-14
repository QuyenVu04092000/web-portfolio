import { AboutSection } from "@/sections/About";
import { CaseStudiesSection } from "@/sections/CaseStudies";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { SkillsSection } from "@/sections/Skills";
import { StatsSection } from "@/sections/Stats";
import { TestimonialsSection } from "@/sections/Testimonials";
import { WeTaxFeatureSection } from "@/sections/WeTaxFeature";
import { WorkExperience } from "@/sections/WorkExperience";
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

        {/* 3. About (condensed) */}
        <AboutSection />

        {/* 4. Experience (condensed timeline) */}
        <section id="experience" aria-label="Work Experience">
          <div className="container py-16 lg:py-24">
            <WorkExperience />
          </div>
        </section>

        {/* 5. WeTax featured case study */}
        <WeTaxFeatureSection />

        {/* 6. Case studies grid + other projects */}
        <CaseStudiesSection />

        {/* 7. Skills */}
        <SkillsSection />

        {/* 8. Testimonials */}
        <TestimonialsSection />

        {/* 9. Contact */}
        <ContactSection />
      </main>
      <Footer />
      <StickyCtaBar />
    </div>
  );
}
