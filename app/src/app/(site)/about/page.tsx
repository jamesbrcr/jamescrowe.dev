// app/(site)/about/page.tsx
import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "About | James Crowe",
};

export default function AboutPage() {
  return (
    <Section id="about" title="About" eyebrow="Nest">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="text-[var(--subtext)] leading-relaxed">
          <p>
            Full-stack software developer from Los Angeles, California. I enjoy training models on real‑world data, creating small games, and listening to music!
          </p>
          <p className="mt-4">
            Lately I’ve been building neural networks, creating mobile applications, and reading One Piece!
          </p>
        </div>
        <div className="rounded-2xl border border-[var(--border)]/60 bg-[var(--panel)] p-6">
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-[var(--subtext)]">Focus</dt>
              <dd className="text-[var(--text)] mt-1">AI/ML, Game development, Software development</dd>
            </div>
            <div>
              <dt className="text-[var(--subtext)]">Tools</dt>
              <dd className="text-[var(--text)] mt-1">Python, C, React, PyTorch</dd>
            </div>
            <div>
              <dt className="text-[var(--subtext)]">Based</dt>
              <dd className="text-[var(--text)] mt-1">UW–Madison</dd>
            </div>
            <div>
              <dt className="text-[var(--subtext)]">Interests</dt>
              <dd className="text-[var(--text)] mt-1">Low‑level, modeling, design</dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}
