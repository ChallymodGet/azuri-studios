import type { SiteContent } from "./types";

/** Default homepage content when Sanity is not configured or returns empty lists. */
export const fallbackSiteContent: SiteContent = {
  services: [
    {
      id: "01",
      badge: "01",
      title: "App & Web-App Design",
      description:
        "We design intuitive digital experiences that solve real user problems and create seamless experiences your users would love.",
      features: [
        "UX Strategy",
        "Wireframes",
        "UI Design",
        "Design Systems",
        "Prototype",
        "Developer Handoff",
      ],
      outcome: "Launch ready products users understand instantly and enjoy using daily.",
      image: "/assets/service-carbon.png",
      gradient:
        "linear-gradient(292deg, var(--azuri-figure-start) 19%, var(--azuri-figure-end) 100%)",
    },
    {
      id: "02",
      badge: "02",
      title: "Landing Page & Website Designs",
      description:
        "We design modern websites and landing pages that communicate value clearly and turn visitors into customers.",
      features: [
        "Landing Pages",
        "SaaS Websites",
        "Responsive Design",
        "Webflow-Ready Files",
        "Motion Direction",
        "SEO-Friendly Structure",
      ],
      outcome: "High-performing digital experiences built to drive trust, engagement, and action.",
      image: "/assets/service-quid.png",
      gradient:
        "linear-gradient(68deg, var(--azuri-figure-start) 19%, var(--azuri-figure-end) 100%)",
    },
    {
      id: "03",
      badge: "03",
      title: "Front & Backend Development",
      description:
        "We build fast, secure, and scalable web and mobile applications using modern technologies tailored to your business.",
      features: [
        "Responsive Frontend",
        "Backend Development",
        "API Integration",
        "Authentication & Security",
        "Database Design",
        "Deployment",
      ],
      outcome: "Robust applications that are secure, scalable, and ready for growth.",
      image: "/assets/service-code.png",
      gradient:
        "linear-gradient(292deg, var(--azuri-figure-start) 19%, var(--azuri-figure-end) 100%)",
    },
    {
      id: "04",
      badge: "04",
      title: "Brand Identity & Design System",
      description:
        "We create structured design systems that help products stay visually consistent as teams and features grow.",
      features: [
        "Component Libraries",
        "Auto Layout Systems",
        "Design Tokens",
        "Documentation",
        "Style Guides",
        "Team Enablement",
      ],
      outcome: "A flexible visual foundation shared by design and development teams.",
      image: "/assets/project-carbon.png",
      gradient:
        "linear-gradient(68deg, var(--azuri-figure-start) 19%, var(--azuri-figure-end) 100%)",
    },
  ],
  projects: [
    {
      id: "bloom",
      title: "Bloom",
      category: "Landing Page",
      year: 2025,
      image: "/assets/project-quid.png",
      featured: true,
    },
    {
      id: "quid-ai",
      title: "Quid AI",
      category: "Landing Page",
      year: 2025,
      image: "/assets/project-quid.png",
    },
    {
      id: "nexora",
      title: "Nexora",
      category: "App Design",
      year: 2024,
      image: "/assets/project-phone.png",
    },
    {
      id: "carbon-circle",
      title: "Carbon Circle",
      category: "WebApp Design",
      year: 2024,
      image: "/assets/project-carbon.png",
    },
    {
      id: "borophone",
      title: "Borophone",
      category: "Branding",
      year: 2024,
      image: "/assets/project-borophone.png",
    },
  ],
  testimonials: [
    {
      id: "stella",
      image: "/assets/testimonial-1.png",
      quote:
        "Azuri replaced our in-house dev team and we haven't looked back. Faster delivery, better code, and they actually understand the product — not just the ticket.",
      name: "Stella Maris",
      role: "Co Founder, Azuri",
    },
    {
      id: "david",
      image: "/assets/testimonial-2.png",
      quote:
        "Working MVP in six weeks. The quality was outstanding — our investors noticed immediately and it became a core part of our pitch.",
      name: "David Chen",
      role: "Founder, Nexora",
    },
    {
      id: "michael",
      image: "/assets/testimonial-3.png",
      quote:
        "Raised our seed round with a product Azuri built. Investors kept asking who designed it — now I refer everyone.",
      name: "Michael Ade",
      role: "CEO, Bloom",
    },
  ],
  stats: [
    { id: "projects", target: 20, suffix: "+", label: "Projects delivered" },
    { id: "retention", target: 98, suffix: "%", label: "Client retention rate" },
    { id: "response", target: 24, suffix: "hrs", label: "Avg. response time" },
    { id: "experience", target: 4, suffix: "yrs", label: "Industry experience" },
  ],
  faqs: [
    {
      id: "subscription",
      question: "What is a design & dev subscription?",
      answer:
        "Instead of hiring full-time staff or paying per-project retainers, you get a dedicated team on a monthly subscription. Submit tasks as needed, we work through them fast. Pause or cancel any time — no lock-in.",
    },
    {
      id: "requests",
      question: "How do I submit requests?",
      answer:
        "Send requests through your shared workspace or dedicated Slack channel. We clarify requirements, prioritize the queue, and begin work immediately.",
    },
    {
      id: "delivery",
      question: "How fast is delivery?",
      answer:
        "Most requests are delivered in 48 hours to seven days depending on scope and plan. Larger builds are divided into clear weekly milestones.",
    },
    {
      id: "pause",
      question: "Can I actually pause my subscription?",
      answer:
        "Yes. Pause whenever you have no active work and resume when you are ready. You keep the unused time in your billing cycle.",
    },
    {
      id: "ip",
      question: "Who owns the code and design files?",
      answer:
        "You do. Full intellectual-property ownership transfers to you as work is delivered.",
    },
    {
      id: "guarantee",
      question: "What if I'm unhappy with the work?",
      answer:
        "Every plan includes unlimited revisions and a two-week money-back guarantee so we can make things right.",
    },
  ],
};
