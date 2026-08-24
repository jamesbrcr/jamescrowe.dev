// components/Section.tsx
import React from "react";

export default function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id?: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          {eyebrow && (
            <div className="mb-2 text-sm tracking-widest uppercase text-[var(--subtext)]">{eyebrow}</div>
          )}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--text)]">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
