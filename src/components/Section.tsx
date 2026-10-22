import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionProps {
  id: string;
  eyebrow?: string;
  title?: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, lead, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32 ${className}`}
    >
      {(eyebrow || title || lead) && (
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          {eyebrow && (
            <p className="mb-4 text-[0.7rem] uppercase tracking-[0.4em] text-lavender/70">{eyebrow}</p>
          )}
          {title && (
            <h2 className="glow-text font-display text-4xl leading-[1.05] text-soft sm:text-5xl md:text-6xl">
              {title}
            </h2>
          )}
          {lead && <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-silver">{lead}</p>}
        </Reveal>
      )}
      {children}
    </section>
  );
}

export default Section;
