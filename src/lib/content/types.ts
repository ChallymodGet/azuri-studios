export type ServiceItem = {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  outcome: string;
  image: string;
  gradient: string;
};

export type ProjectCaseStudy = {
  kind: "link" | "pdf";
  href: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  category: string;
  year: number;
  image: string;
  featured?: boolean;
  caseStudy?: ProjectCaseStudy | null;
};

export type TestimonialItem = {
  id: string;
  image: string;
  quote: string;
  name: string;
  role: string;
};

export type StatItem = {
  id: string;
  target: number;
  suffix: string;
  label: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type SiteContent = {
  services: ServiceItem[];
  projects: ProjectItem[];
  testimonials: TestimonialItem[];
  stats: StatItem[];
  faqs: FaqItem[];
};
