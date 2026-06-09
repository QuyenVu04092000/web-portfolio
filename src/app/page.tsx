import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { ServicesSection } from "@/sections/Services";
import { StatsSection } from "@/sections/Stats";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { StickyCtaBar } from "@/components/StickyCtaBar";

export default function Home() {
  return (
    <div>
      <Header activeId="home" />
      <HeroSection />
      <StatsSection />
      <ProjectsSection />
      <TapeSection />
      <ServicesSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <StickyCtaBar />
    </div>
  );
}
