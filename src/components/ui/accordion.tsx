import type { ReactNode } from "react";

type AccordionItemProps = {
  title: string;
  children: ReactNode;
};

type AccordionProps = {
  items: AccordionItemProps[];
  className?: string;
};

export function Accordion({ items, className = "" }: AccordionProps) {
  return (
    <div className={`accordion${className ? ` ${className}` : ""}`}>
      {items.map(({ title, children }) => (
        <details key={title}>
          <summary>{title}</summary>
          <div className="accordion__content">{children}</div>
        </details>
      ))}
    </div>
  );
}
