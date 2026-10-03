import LoadingScreen from "@/components/ui/LoadingScreen";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Navbar from "@/components/layout/Navbar";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import {
  AboutSection,
  FaqSection,
  Footer,
  GetStartedSection,
  HeroSection,
  PricingSection,
  ProcessSection,
  ServicesSection,
  TestimonialsSection,
  WhyChooseUsSection,
} from "@/components/sections/HomeSections";
import { getSiteContent } from "@/lib/content/get-site-content";

export const revalidate = 60;

export default async function Home() {
  const content = await getSiteContent();

  return (
    <main className="relative min-h-screen overflow-x-clip pt-20">
      <LoadingScreen />
      <ScrollReveal />

      <Navbar />

      <HeroSection />
      <AboutSection stats={content.stats} />
      <ServicesSection services={content.services} />
      <ProcessSection />
      <ProjectsSection projects={content.projects} />
      <WhyChooseUsSection />
      <PricingSection />
      <TestimonialsSection testimonials={content.testimonials} />
      <FaqSection faqs={content.faqs} />
      <GetStartedSection />

      <Footer />
    </main>
  );
}
