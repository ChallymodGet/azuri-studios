import LoadingScreen from "@/components/ui/LoadingScreen";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Navbar from "@/components/layout/Navbar";
import {
  AboutSection,
  FaqSection,
  Footer,
  GetStartedSection,
  HeroSection,
  PricingSection,
  ProcessSection,
  ProjectsSection,
  ServicesSection,
  TestimonialsSection,
  WhyChooseUsSection,
} from "@/components/sections/HomeSections";

export default function Home() {
  return (
    <main className="relative min-h-screen pt-20">
      {/* 1. Full-screen animated overlay */}
      <LoadingScreen />
      <ScrollReveal />

      {/* 2. Top sticky/fixed navbar */}
      <Navbar />

      {/* 3. Page Sections */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <WhyChooseUsSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <GetStartedSection />

      {/* 4. Footer */}
      <Footer />
    </main>
  );
}