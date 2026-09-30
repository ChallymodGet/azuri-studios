"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Logo from "@/components/ui/Logo";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

interface ServiceItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  outcome: string;
  image: string;
  gradient: string;
}

const servicesData: ServiceItem[] = [
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
    gradient: "linear-gradient(292deg, var(--azuri-figure-start) 19%, var(--azuri-figure-end) 100%)",
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
    gradient: "linear-gradient(68deg, var(--azuri-figure-start) 19%, var(--azuri-figure-end) 100%)",
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
    gradient: "linear-gradient(292deg, var(--azuri-figure-start) 19%, var(--azuri-figure-end) 100%)",
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
    gradient: "linear-gradient(68deg, var(--azuri-figure-start) 19%, var(--azuri-figure-end) 100%)",
  },
];

const processSteps = [
  ["01", "Discovery Call", "30 minutes to understand your goals, constraints, and what success looks like — completely free."],
  ["02", "Proposal", "A detailed scope, timeline, and fixed price — delivered to your inbox within 48 hours."],
  ["03", "Build & Iterate", "Weekly sprint reviews with real deliverables every Friday. A shared workspace keeps you in the loop."],
  ["04", "Handoff", "A smooth handoff with documentation, briefing, and post-launch support so you can hit the ground running."],
];

const comparison = [
  ["Fixed monthly pricing", "Partial", "—", "✓", "✓"],
  ["Pause or cancel anytime", "✓", "✓", "✓", "✓"],
  ["Design + Dev under one roof", "—", "—", "—", "✓"],
  ["48-hour average turnaround", "—", "Partial", "Partial", "✓"],
  ["Dedicated Slack channel", "Partial", "—", "✓", "✓"],
  ["Unlimited revisions", "—", "—", "✓", "✓"],
  ["Full IP ownership", "—", "Partial", "✓", "✓"],
  ["2-Weeks money-back guarantee", "—", "—", "✓", "✓"],
];

const plans = [
  {
    name: "STARTER",
    price: "2,499",
    description: "For founders who need design and dev support without a full-time hire.",
    features: ["1 active request at a time", "7-day average turnaround", "Web & UI Design", "Monthly strategy call"],
    unavailable: ["Weekly sprint reviews", "Mobile App development"],
  },
  {
    name: "GROWTH",
    price: "5,499",
    description: "For teams that need to ship fast and look great doing it. Design and development in parallel.",
    features: ["2 active requests at a time", "3-day average turnaround", "Dev + Design included", "Dedicated Slack channel", "Weekly sprint reviews", "Mobile App development"],
    featured: true,
  },
  {
    name: "PARTNER",
    price: "9,499",
    description: "A fully embedded product team — design, engineering, and strategy for companies at scale.",
    features: ["Unlimited active requests", "48-hrs average turnaround", "All Growth features", "Dedicated product lead", "AI & Cloud integration", "Priority queue access"],
  },
];

const testimonials = [
  {
    image: "/assets/testimonial-1.png",
    quote: "Azuri replaced our in-house dev team and we haven't looked back. Faster delivery, better code, and they actually understand the product — not just the ticket.",
    name: "Stella Maris",
    role: "Co Founder, Azuri",
  },
  {
    image: "/assets/testimonial-2.png",
    quote: "Working MVP in six weeks. The quality was outstanding — our investors noticed immediately and it became a core part of our pitch.",
    name: "David Chen",
    role: "Founder, Nexora",
  },
  {
    image: "/assets/testimonial-3.png",
    quote: "Raised our seed round with a product Azuri built. Investors kept asking who designed it — now I refer everyone.",
    name: "Michael Ade",
    role: "CEO, Bloom",
  },
];

const faqs = [
  ["What is a design & dev subscription?", "Instead of hiring full-time staff or paying per-project retainers, you get a dedicated team on a monthly subscription. Submit tasks as needed, we work through them fast. Pause or cancel any time — no lock-in."],
  ["How do I submit requests?", "Send requests through your shared workspace or dedicated Slack channel. We clarify requirements, prioritize the queue, and begin work immediately."],
  ["How fast is delivery?", "Most requests are delivered in 48 hours to seven days depending on scope and plan. Larger builds are divided into clear weekly milestones."],
  ["Can I actually pause my subscription?", "Yes. Pause whenever you have no active work and resume when you are ready. You keep the unused time in your billing cycle."],
  ["Who owns the code and design files?", "You do. Full intellectual-property ownership transfers to you as work is delivered."],
  ["What if I'm unhappy with the work?", "Every plan includes unlimited revisions and a two-week money-back guarantee so we can make things right."],
];

export function HeroSection() {
  const work = [
    ["/assets/project-quid.png", "Quid AI landing page"],
    ["/assets/project-phone.png", "Mobile product design"],
    ["/assets/project-graduation.png", "Campaign design"],
    ["/assets/project-borophone.png", "Borophone campaign"],
    ["/assets/project-carbon.png", "Carbon Circle case study"],
  ];

  return (
    <section className="hero">
      <div className="site-container hero-copy">
        {/* Each word rises out of its own clipped mask, one beat apart (see .hero-word) */}
        <h1>
          <span className="hero-word"><span>Hire</span></span>{" "}
          <span className="hero-word"><em>world-class</em></span>
          <br />
          <span className="hero-word"><span>tech</span></span>{" "}
          <span className="hero-word"><span>agency</span></span>
        </h1>
        <p className="hero-enter" style={{ "--enter-delay": "520ms" } as React.CSSProperties}>
          We design, develop, and launch cutting-edge solutions that help startups and enterprises stay ahead of the curve.
        </p>
        <div className="button-row hero-enter" style={{ "--enter-delay": "660ms" } as React.CSSProperties}>
          <Link href="#projects" className="button button-secondary">See projects</Link>
          <Link href="#contact" className="button button-primary">Book a call</Link>
        </div>
        <div className="client-proof hero-enter" style={{ "--enter-delay": "800ms" } as React.CSSProperties}>
          <span className="avatar-stack">
            {[1, 2, 3, 4].map((avatar) => (
              <Image key={avatar} src={`/assets/avatar-${avatar}.png`} alt="" width={40} height={40} />
            ))}
          </span>
          <span>
            Join over <strong><AnimatedCounter target={20} suffix="+" /></strong> Clients
          </span>
        </div>
      </div>

      <div className="portfolio-window">
        <div className="portfolio-grid">
          <div className="portfolio-brand">nexus</div>
          {work.map(([src, alt]) => (
            <div className="portfolio-image" key={src}>
              <Image 
                src={src} 
                alt={alt} 
                fill 
                priority
                sizes="(max-width: 768px) 45vw, 300px" 
              />
            </div>
          ))}
          <div className="portfolio-brand portfolio-brand-dark">N <span>Nexora</span></div>
        </div>
      </div>

      <div className="trusted-strip">
        <span>TRUSTED BY:</span>
        {/* Two identical groups scroll as one seamless loop; hovering pauses it */}
        <div className="marquee">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div className="marquee-group" key={copy} aria-hidden={copy === 1}>
                <strong>ATLASSIAN<br />loom</strong>
                <strong>Ɲ <small>Nexora</small></strong>
                <strong>verve</strong>
                <strong>azuri <small>studio</small></strong>
                <strong>▮▮ Borophone</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  const stats = [
    { target: 20, suffix: "+", label: "Projects delivered" },
    { target: 98, suffix: "%", label: "Client retention rate" },
    { target: 24, suffix: "hrs", label: "Avg. response time" },
    { target: 4, suffix: "yrs", label: "Industry experience" },
  ];

  return (
    <section id="about-us" className="section section-tint">
      <div className="site-container about-card" data-reveal="scale">
        <div data-reveal-group="140">
          <p className="section-eyebrow" data-reveal>ABOUT US</p>

          {/* The statement lands in three beats */}
          <p className="about-statement">
            <strong data-reveal="blur">azuri is a product focused design studio</strong>{" "}
            <span data-reveal="blur">crafting brands, interfaces, and scalable systems for modern startups.</span>{" "}
            <strong data-reveal="blur">We combine strategic thinking with refined execution to help teams launch confidently and grow beautifully.</strong>
          </p>
        </div>

        {/* Photos fan out from a rotated stack (see .about-photo) */}
        <div className="about-images flex items-center justify-center gap-4 my-8" data-reveal-group="110">
          {[1, 2, 3].map((image) => (
            <div
              key={image}
              className="about-photo relative w-full max-w-55 h-35 overflow-hidden rounded-2xl"
              data-reveal="fan"
            >
              <Image
                src={`/assets/about-${image}.png`}
                alt={`Azuri team showcase image ${image}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 220px"
              />
            </div>
          ))}
        </div>

        {/* Always four-up; number and label sizes scale with the viewport (see .stats in globals.css) */}
        <div className="stats" data-reveal-group="120">
          {stats.map((stat) => (
            <div key={stat.label} data-reveal="pop">
              <strong>
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </strong>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-transparent">
      <div className="site-container mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="OUR SERVICES"
          title={
            <>
              Designs built to <br />
              <em>scale fast.</em>
            </>
          }
          description="We help teams craft products, brands, and digital experiences that launch beautifully and grow confidently."
        />

        {/* Services Cards List */}
        <div className="flex flex-col gap-8 md:gap-10 w-full items-center">
          {servicesData.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={service.id}
                className="service-panel w-full bg-(--azuri-surface) rounded-3xl md:rounded-[40px] border border-(--azuri-line) shadow-sm dark:shadow-black/30 p-6 md:p-10 lg:p-12 overflow-hidden"
                data-reveal-group="90"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                  
                  {/* Text column — slides in from the side opposite the figure */}
                  <div
                    className={`service-copy flex min-w-0 flex-col gap-6 md:gap-8 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                    data-reveal={isReversed ? "right" : "left"}
                    data-delay="0"
                  >
                    {/* Header with Badge & Title */}
                    <div className="flex items-start gap-4 md:gap-5">
                      <div
                        className="service-badge w-10 h-10 md:w-12 md:h-12 shrink-0 bg-azuri-500 rounded-full flex items-center justify-center text-white font-semibold text-base md:text-lg"
                        aria-hidden="true"
                      >
                        {service.badge}
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="font-medium text-(--azuri-ink) text-2xl md:text-[32px] tracking-tight leading-tight">
                          {service.title}
                        </h3>
                        <p className="font-normal text-(--azuri-muted) text-base md:text-lg tracking-tight leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Checklist: WHAT YOU GET */}
                    <div className="flex flex-col gap-3">
                      <h4 className="font-medium text-azuri-500 text-xs md:text-sm tracking-wider uppercase">
                        WHAT YOU GET
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={feature}
                            className="service-feature flex items-center gap-3"
                            style={{ "--feature-i": featureIndex } as React.CSSProperties}
                          >
                            <span className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-azuri-500 flex items-center justify-center shrink-0">
                              {/* The tick draws itself once the row is in view (see .check-path) */}
                              <svg
                                className="w-3 h-3 md:w-3.5 md:h-3.5 text-azuri-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2.5"
                              >
                                <path
                                  className="check-path"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </span>
                            <span className="font-medium text-(--azuri-muted) text-sm md:text-base">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Outcome */}
                    <div className="flex flex-col gap-1.5 pt-4 border-t border-(--azuri-line)">
                      <div className="flex items-center gap-2 text-azuri-500 font-medium text-xs md:text-sm tracking-wider uppercase">
                        <span>✦</span>
                        <span>OUTCOME</span>
                      </div>
                      <p className="font-normal text-azuri-500 text-sm md:text-base leading-relaxed">
                        {service.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Gradient Graphic Canvas Box */}
                  <figure
                    className={`service-figure relative min-h-0 w-full min-w-0 rounded-2xl md:rounded-4xl overflow-hidden flex items-center justify-center p-6 md:p-10 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                    style={{ background: service.gradient }}
                    data-reveal={isReversed ? "left" : "right"}
                    data-delay="140"
                  >
                    {/* Tilt + image zoom on the inner frame so the grid column keeps full width */}
                    <div className="service-shot relative h-full min-h-[240px] w-full rounded-xl md:rounded-2xl overflow-hidden shadow-md isolate" data-tilt="5">
                      <Image
                        src={service.image}
                        alt={`${service.title} showcase visual`}
                        fill
                        className="object-cover rounded-xl md:rounded-2xl"
                        sizes="(max-width: 1024px) 100vw, 552px"
                      />
                    </div>
                  </figure>

                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="section">
      <div className="site-container">
        <SectionHeading
          eyebrow="THE PROCESS"
          title={<>Brief-to-Launch in <em>four steps</em></>}
          description="All plans include unlimited revisions, full IP ownership, and a 2-week money-back guarantee. Pause or cancel anytime."
        />
        <div className="process-grid" data-reveal-group="140">
          {processSteps.map(([number, title, copy], index) => (
            <article className="process-card" key={number} data-reveal="up" data-delay={String(index * 140)}>
              {/* Ghost number slides up a beat after its card */}
              <span className="process-number" data-reveal="up" data-delay={String(index * 140 + 260)}>{number}</span>
              <span className="process-icon">✦</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const filters = ["App Design", "WebApp Design", "Landing Page", "Website", "Branding", "Others"];
  return (
    <section id="projects" className="section section-tint">
      <div className="site-container">
        <SectionHeading
          eyebrow="SELECTED PROJECTS"
          title={<>Designing digital experiences that drive <em>real impact.</em></>}
          description="A selection of our recent work across product design, branding, web experiences, and more."
        />
        <div className="project-toolbar" data-reveal-group="60">
          <div>{filters.map((filter) => <button className={filter === "Landing Page" ? "active" : ""} key={filter} data-reveal="pop">{filter}</button>)}</div>
          <Link href="#contact" className="button button-primary button-small" data-reveal="right">See all projects ↗</Link>
        </div>
        <article className="featured-project" data-reveal-group="120">
          <div className="project-meta" data-reveal><div><strong>Bloom</strong><span>Landing Page · 2025</span></div><b>1/<span>5</span></b></div>
          {/* Preview wipes open from the bottom edge */}
          <div className="project-preview" data-reveal="clip" data-delay="160">
            <Image src="/assets/project-quid.png" alt="Bloom landing page project" fill sizes="(max-width: 768px) 90vw, 720px" />
          </div>
          <div className="project-arrows" data-reveal="pop" data-delay="520"><button aria-label="Previous project">←</button><button aria-label="Next project">→</button></div>
        </article>
      </div>
    </section>
  );
}

export function WhyChooseUsSection() {
  return (
    <section className="section">
      <div className="site-container">
        <SectionHeading
          eyebrow="WHY CHOOSE US"
          title={<>Why <span className="azuri-badge">azuri</span> beats every <em>alternative.</em></>}
          description="We built Azuri to solve the exact problems founders have with agencies, freelancers, and in-house hires."
        />
        <div className="comparison-wrap" data-reveal-group="80">
          <div className="comparison-grid comparison-header" data-reveal>
            {["Features", "Traditional Agency", "Freelancer", "In house hire", "azuri"].map((item) => <strong key={item}>{item}</strong>)}
          </div>
          {/* Rows cascade in; the azuri ticks spring in just after each row lands */}
          {comparison.map((row) => (
            <div className="comparison-grid comparison-row" key={row[0]} data-reveal>
              {row.map((cell, index) => <span className={index === 4 ? "azuri-cell" : cell === "—" ? "negative" : ""} key={`${row[0]}-${index}`}>{index === 4 ? <i className="tick">{cell}</i> : cell}</span>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="section">
      <div className="site-container">
        <SectionHeading
          eyebrow="PRICING PLAN"
          title={<>Transparent <em>Pricing</em><br />No Surprises.</>}
          description="All plans include unlimited revisions, full IP ownership, and a 2-week money-back guarantee. Pause or cancel anytime."
        />
        {/* Outer cards first, featured plan lands last and a touch larger; features tick in per card */}
        <div className="pricing-grid" data-reveal-group>
          {plans.map((plan, planIndex) => {
            const cardDelay = plan.featured ? 320 : planIndex * 120;
            return (
            <article
              className={`pricing-card ${plan.featured ? "pricing-featured" : ""}`}
              key={plan.name}
              data-reveal={plan.featured ? "scale" : "up"}
              data-delay={String(cardDelay)}
              data-tilt="3"
            >
              <p className="plan-name">{plan.name}</p>
              <p className="plan-price"><sup>$</sup>{plan.price}<span>/ month.</span><small> pause anytime</small></p>
              <p className="plan-description">{plan.description}</p>
              <ul>
                {plan.features.map((feature, i) => <li key={feature} data-reveal="left" data-delay={String(cardDelay + 300 + i * 60)}><span>✓</span>{feature}</li>)}
                {plan.unavailable?.map((feature, i) => <li className="unavailable" key={feature} data-reveal="left" data-delay={String(cardDelay + 300 + (plan.features.length + i) * 60)}><span>×</span>{feature}</li>)}
              </ul>
              <Link href="#contact" className={`button ${plan.featured ? "button-light" : "button-primary"}`}>Get started</Link>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="section section-tint">
      <div className="site-container">
        <SectionHeading
          eyebrow="WHAT CLIENTS SAY"
          title={<>Trusted by builders<br />who move <em>fast.</em></>}
          description="Don't take our word for it — here's what 20+ teams have to say about working with us."
        />
        <div className="testimonials">
          {/* Photo slides in from the left, the quote card from the right, then the stars light up one by one */}
          {testimonials.map((testimonial) => (
            <article className="testimonial" key={testimonial.quote} data-reveal-group>
              <div className="testimonial-image" data-reveal="left" data-delay="0" data-tilt="4"><Image src={testimonial.image} alt="" fill sizes="(max-width: 768px) 100vw, 420px" /></div>
              <div className="quote-card" data-reveal="right" data-delay="120">
                <blockquote>“{testimonial.quote}”</blockquote>
                <div>
                  <span><strong>{testimonial.name}</strong><small>{testimonial.role}</small></span>
                  <b aria-label="5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((star) => <i key={star} data-reveal="pop" data-delay={String(420 + star * 80)}>★</i>)}
                  </b>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="carousel-dots" data-reveal><i /><i /><i /><i /></div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="faqs" className="section">
      <div className="site-container">
        <SectionHeading
          eyebrow="FAQs"
          title={<>Got <em>Questions?</em><br />We’ve got <em>Answers!</em></>}
          description="All plans include unlimited revisions, full IP ownership, and a 2-week money-back guarantee. Pause or cancel anytime."
        />
        <div className="faq-list" data-reveal-group="90">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0} data-reveal>
              <summary>{question}<span /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
        <div className="faq-cta" data-reveal="scale">
          <div><strong>Can&apos;t find what you need?</strong><span>Book a free 30-min call and we&apos;ll walk you through everything.</span></div>
          <Link href="#contact" className="button button-primary">Book a call</Link>
        </div>
      </div>
    </section>
  );
}

export function GetStartedSection() {
  return (
    <section id="contact" className="section cta-section" data-reveal-group="120">
      {/* Tiles drop in, then bob forever (see .floating-tile) */}
      <div className="floating-tile tile-one" data-reveal="drop" data-delay="200">●</div>
      <div className="floating-tile tile-two" data-reveal="drop" data-delay="340">◆</div>
      <div className="floating-tile tile-three" data-reveal="drop" data-delay="480">✦</div>
      <div className="site-container">
        <SectionHeading
          eyebrow="GET STARTED"
          title={<>Ready to build<br />Something <em>great?</em></>}
          description="Join 200+ startups building faster with Azuri. First delivery within 48 hours of onboarding — guaranteed."
        />
        <div className="button-row">
          <Link href="#projects" className="button button-secondary" data-reveal="pop" data-delay="420">See projects</Link>
          <a href="mailto:hello@azuristudio.co" className="button button-primary" data-reveal="pop" data-delay="500">Book a call</a>
        </div>
        <p className="cta-note" data-reveal data-delay="620">No long-term contracts · Pause or cancel anytime · 2-week money-back guarantee</p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer" data-reveal-group="110">
      <div className="site-container footer-grid">
        <div className="footer-brand" data-reveal>
          <div className="brand" aria-label="Azuri Studios"><Logo className="brand-logo" markFill="rgba(255, 255, 255, 0.12)" /></div>
          <p>World-class design and development for startups, founders, and growing teams.</p>
          <div className="socials"><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="X">𝕏</a></div>
        </div>
        <FooterLinks title="SERVICES" links={["Web Development", "Mobile Apps", "UI/UX Design", "AI Integration"]} />
        <FooterLinks title="LEGAL" links={["Legal", "Privacy Policy", "Terms", "Refund Policy", "Cookies"]} />
        <FooterLinks title="COMPANY" links={["About us", "Work"]} />
      </div>
      <div className="site-container footer-bottom" data-reveal data-delay="500">
        <span>© 2026 azuristudios.co All rights reserved.</span>
        <a href="mailto:hello@azuristudio.co">✉ hello@azuristudio.co</a>
      </div>
      {/* Wordmark rises from below the fold */}
      <div className="footer-wordmark" data-reveal="rise" data-delay="150">azuristudios.co</div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="footer-links" data-reveal>
      <strong>{title}</strong>
      {links.map((link) => <a href="#" key={link}>{link}</a>)}
    </div>
  );
}