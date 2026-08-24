// app/(site)/projects/page.tsx
import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Projects | James Crowe",
};

const projects = [
  {
    title: "Rogue Lineage Neural Net",
    desc: "Built a CNN to classify in-game character features with custom dataset and augmentations.",
    link: "#",
  },
  {
    title: "Gift Recommender (Hackathon)",
    desc: "AI-powered suggestions using Amazon purchase data; web app developed in 24 hours.",
    link: "https://github.com/VishnuR121/presently",
  },
];

export default function ProjectsPage() {
  return (
    <Section id="projects" title="Projects" eyebrow="Check out my work">
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <Card key={idx} className="bg-[var(--panel)] border-[var(--border)]/60 rounded-2xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-[var(--text)]">{p.title}</CardTitle>
              <CardDescription className="text-[var(--subtext)]">{p.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <a href={p.link} className="inline-flex items-center gap-1 text-sm text-[var(--text)] hover:underline">
                Visit Repository <ExternalLink size={16} />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
