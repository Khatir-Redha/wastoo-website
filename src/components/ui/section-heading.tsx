import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  className?: string;
  headingId?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className = "",
  headingId,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading${className ? ` ${className}` : ""}`}>
      {eyebrow ? (
        <p className="section-heading__eyebrow">{eyebrow}</p>
      ) : null}
      <h2 className="section-heading__title" id={headingId}>
        {title}
      </h2>
      {lead ? <p className="section-heading__lead">{lead}</p> : null}
    </div>
  );
}
