import type { ReactNode } from "react";

type SectionStubProps = {
  id: string;
  title: string;
  children?: ReactNode;
  headingLevel?: "h1" | "h2";
};

export function SectionStub({
  id,
  title,
  children,
  headingLevel = "h2",
}: SectionStubProps) {
  const Heading = headingLevel;

  return (
    <section className="section-stub" id={id} aria-labelledby={`${id}-heading`}>
      <Heading id={`${id}-heading`}>{title}</Heading>
      {children}
    </section>
  );
}
