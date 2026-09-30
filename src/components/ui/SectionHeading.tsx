import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${className}`} data-reveal-group="130">
      <p className="section-eyebrow" data-reveal>{eyebrow}</p>
      <h2 data-reveal="blur">{title}</h2>
      {description ? <p className="section-description" data-reveal>{description}</p> : null}
    </div>
  );
}
