// app/blog/9-21-25/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Rebuilding My Site!",
  description: "tech stack, design choices, and lessons learned.",
};

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      {/* Back to home */}
      <div className="mb-6">
        <Link href="/">
          <Button className="rounded-2xl bg-white text-black hover:bg-gray-100">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Gray panel like homepage cards */}
      <div className="rounded-2xl border border-[var(--border)]/60 bg-[var(--panel)] p-6 md:p-10">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--text)]">
            Rebuilding My Site
          </h1>
          <p className="mt-2 text-sm text-[var(--subtext)]">
            Published Sep 21, 2025 • by James Crowe
          </p>
        </header>

        {/* Content with indentation + spacing between sections */}
        <section className="prose prose-invert max-w-none">
          <p>
            Hello and welcome to my new personal site! I overhauled the old one and incorporated a dark palette and crow-styled theme.
            I created the site using tools similar to the old version such as Next.js (App Router), Tailwind, Framer Motion, and small UI primitives.
          </p>

          {/* Goals */}
          <div className="mt-8 pl-6 border-l border-[var(--border)]/60">
            <h2>Goals:</h2>
            <ul>
              <li>The main goal of this overhaul was to make my personal site more visually pleasing as well as contain more information.</li>
              <li>Showcase projects and write posts without a heavy CMS.</li>
              <li>Touch up on html, css, and various React libraries.</li>
            </ul>
          </div>

          {/* Tech stack */}
          <div className="mt-8 pl-6 border-l border-[var(--border)]/60">
            <h2>Tech stack:</h2>
            <ul>
              <li>Next.js App Router + Route Groups</li>
              <li>Tailwind (custom CSS variables for colors)</li>
              <li>Framer Motion for micro-interactions</li>
              <li>Next/Image for optimized media</li>
            </ul>
          </div>

          {/* What's next */}
          <div className="mt-8 pl-6 border-l border-[var(--border)]/60">
            <h2>What’s next:</h2>
            <ul>
              <li>Since this is my first blog post I will keep it short!</li>
              <li>The next steps for this website is to consistently add new content and write blog posts on a regular basis.</li>
            </ul>
          </div>
        </section>
      </div>
    </article>
  );
}

