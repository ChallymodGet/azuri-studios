"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { caseStudyButtonLabel } from "@/lib/content/case-study-label";
import type { ProjectItem } from "@/lib/content/types";

const FILTER_ORDER = [
  "App Design",
  "WebApp Design",
  "Landing Page",
  "Website",
  "Branding",
  "Others",
] as const;

type ProjectsSectionProps = {
  projects: ProjectItem[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const filters = useMemo(() => {
    const fromContent = new Set(projects.map((p) => p.category));
    const ordered = FILTER_ORDER.filter((f) => fromContent.has(f));
    const rest = [...fromContent].filter((c) => !FILTER_ORDER.includes(c as (typeof FILTER_ORDER)[number]));
    return [...ordered, ...rest.sort()];
  }, [projects]);

  const defaultFilter =
    projects.find((p) => p.featured)?.category ?? filters[0] ?? "Landing Page";

  const [activeFilter, setActiveFilter] = useState(defaultFilter);
  const filtered = useMemo(
    () => projects.filter((p) => p.category === activeFilter),
    [projects, activeFilter],
  );

  const [index, setIndex] = useState(0);
  const safeIndex = filtered.length ? Math.min(index, filtered.length - 1) : 0;
  const current = filtered[safeIndex];
  const caseStudy = current?.caseStudy?.href ? current.caseStudy : null;

  const go = (delta: number) => {
    if (!filtered.length) return;
    setIndex((i) => (i + delta + filtered.length) % filtered.length);
  };

  const onFilter = (filter: string) => {
    setActiveFilter(filter);
    setIndex(0);
  };

  return (
    <section id="projects" className="section section-tint">
      <div className="site-container">
        <SectionHeading
          eyebrow="SELECTED PROJECTS"
          title={
            <>
              Designing digital experiences that drive <em>real impact.</em>
            </>
          }
          description="A selection of our recent work across product design, branding, web experiences, and more."
        />
        <div className="project-toolbar" data-reveal-group="60">
          <div>
            {filters.map((filter) => (
              <button
                type="button"
                className={filter === activeFilter ? "active" : ""}
                key={filter}
                data-reveal="pop"
                onClick={() => onFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <Link href="#projects" className="button button-primary button-small" data-reveal="right">
            See all projects ↗
          </Link>
        </div>
        {current ? (
          <article className="featured-project" data-reveal-group="120">
            <div className="project-meta" data-reveal>
              <div>
                <strong>{current.title}</strong>
                <span>
                  {current.category} · {current.year}
                </span>
                {caseStudy ? (
                  <a
                    href={caseStudy.href}
                    className="button button-secondary button-small project-case-study"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {caseStudyButtonLabel(caseStudy)}
                  </a>
                ) : null}
              </div>
              <b>
                {safeIndex + 1}/<span>{filtered.length}</span>
              </b>
            </div>
            <div className="project-preview" data-reveal="clip" data-delay="160">
              <Image
                src={current.image}
                alt={`${current.title} project`}
                fill
                sizes="(max-width: 768px) 90vw, 720px"
              />
            </div>
            <div className="project-arrows" data-reveal="pop" data-delay="520">
              <button type="button" aria-label="Previous project" onClick={() => go(-1)}>
                ←
              </button>
              <button type="button" aria-label="Next project" onClick={() => go(1)}>
                →
              </button>
            </div>
          </article>
        ) : null}
      </div>
    </section>
  );
}
