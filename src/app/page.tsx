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
    <>
      <Navbar />
      <main>
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
      </main>
      <Footer />
    </>
  );
}