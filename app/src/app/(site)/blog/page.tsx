// app/(site)/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog | James Crowe",
};

export default function BlogIndexPage() {
  return (
    <Section id="blog" title="Personal Blog" eyebrow="Writing">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-[var(--panel)] border-[var(--border)]/60 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-[var(--text)]">9-21-25 - Rebuilding my site!</CardTitle>
            <CardDescription className="text-[var(--subtext)]">
              Crow themed website overhaul (stack, design, lessons).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/blog/9-21-25" className="inline-flex items-center gap-1 text-sm text-[var(--text)] hover:underline">
              Read post <ExternalLink size={16} />
            </Link>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
