import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { SkillsSection } from "@/sections/Skills";
import { StatsSection } from "@/sections/Stats";
import { TapeSection } from "@/sections/Tape";
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

        {/* 3. About */}
        <AboutSection />

        {/* 4. Experience */}
        <section id="experience" aria-label="Work Experience">
          <div className="container py-16 lg:py-24">
            <WorkExperience />
          </div>
        </section>

        {/* 5. WeTax featured case study */}
        <WeTaxFeatureSection />

        {/* 6. Other projects */}
        <ProjectsSection />

        {/* 7. Tech strip */}
        <TapeSection />

        {/* 8. Skills */}
        <SkillsSection />

        {/* 9. Testimonials */}
        <TestimonialsSection />

        {/* 10. Contact */}
        <ContactSection />
      </main>
      <Footer />
      <StickyCtaBar />
    </div>
  );
}
