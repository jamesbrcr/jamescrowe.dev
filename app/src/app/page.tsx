"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, ExternalLink } from "lucide-react";
import { Bird } from "lucide-react";
//import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import JamesPic from "@/images/James4.jpg";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// --- Theme tokens ---
const colors = {
  bg: "#0b0b0d", // near-black
  panel: "#121216",
  text: "#e6e6ea",
  subtext: "#9a9aa3",
  accent: "#8b5cf6", // muted violet (can be swapped with deep crimson if desired)
  accent2: "#6d28d9",
  border: "#23232a",
};

const FeatherParticles = dynamic(() => import("@/components/FeatherParticles"), { ssr: false });

// project data
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

// Section wrappers
const Section: React.FC<{ id?: string; title: string; eyebrow?: string; children: React.ReactNode }>=({ id, title, eyebrow, children }) => (
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

// Skip link for a11y
const SkipLink = () => (
  <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded">Skip to content</a>
);

export default function CroweHome() {
  useEffect(() => {
    document.documentElement.style.setProperty("--bg", colors.bg);
    document.documentElement.style.setProperty("--panel", colors.panel);
    document.documentElement.style.setProperty("--text", colors.text);
    document.documentElement.style.setProperty("--subtext", colors.subtext);
    document.documentElement.style.setProperty("--accent", colors.accent);
    document.documentElement.style.setProperty("--accent2", colors.accent2);
    document.documentElement.style.setProperty("--border", colors.border);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased selection:bg-[var(--accent2)]/30 selection:text-white">
      <SkipLink />

      {/* Top nav */}
      <header className="sticky top-0 z-40 border-b border-[var(--border)]/60 bg-[var(--bg)]/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-[var(--text)]/80">
            <Bird className="w-8 h-8" />
            </div>
            <span className="text-sm md:text-base tracking-wider uppercase text-[var(--text)]/80">James Crowe</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-[var(--subtext)]">
            <a href="#about" className="hover:text-[var(--text)] transition">About</a>
            <a href="#projects" className="hover:text-[var(--text)] transition">Projects</a>
            <a href="#blog" className="hover:text-[var(--text)] transition">Blog</a>
            <a href="#contact" className="hover:text-[var(--text)] transition">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="https://github.com/jamesbrcr" aria-label="GitHub" className="p-2 rounded hover:bg-white/5"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/james-b-crowe/" aria-label="LinkedIn" className="p-2 rounded hover:bg-white/5"><Linkedin size={18} /></a>
            <a href="#contact" aria-label="Email" className="p-2 rounded hover:bg-white/5"><Mail size={18} /></a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <FeatherParticles />
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-28 md:pt-28 md:pb-36">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-sm tracking-widest uppercase text-[var(--subtext)] mb-3">Get Ready to Take-off</div>
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                Hello!
                <span className="block text-[var(--subtext)]">I&apos;m James Crowe.</span>
              </h1>
              <p className="mt-5 text-[var(--subtext)] max-w-prose">
                Computer Science + Data Science student at the University of Wisconsin-Madison. I ship models, tools, and small games.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#about" className="inline-flex items-center text-[var(--subtext)] hover:text-[var(--text)]">
                  Learn more <ArrowDown className="ml-2" size={16} />
                </a>
              </div>
            </div>
            <div className="relative flex justify-center md:justify-end">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
                className="relative w-[360px] h-[360px] md:w-[420px] md:h-[420px]">
                <div className="absolute inset-0 rounded-full bg-[var(--panel)] border border-[var(--border)]/70 shadow-[0_0_120px_rgba(139,92,246,0.08)]" />
                <div className="absolute -inset-1 rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(139,92,246,0.12),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[88%] h-[88%] rounded-full overflow-hidden">
                    <Image
                      src={JamesPic}
                      alt="James Crowe portrait"
                      fill
                      sizes="(min-width: 768px) 420px, 360px"
                      priority
                      className="object-cover"
                      // placeholder="blur"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <main id="main">

        {/* About */}
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

        {/* Work/Projects */}
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

        {/* Notes / Blog preview */}
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

        {/* Contact */}
        <Section id="contact" title="Contact" eyebrow="join the flock">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[var(--subtext)] max-w-prose">
                Have a project or collaboration in mind? I’d love to chat.
              </p>
              <div className="mt-6">
                <a href="mailto:crowe@cs.wisc.edu" className="inline-flex items-center rounded-2xl border border-[var(--border)]/60 bg-white/5 px-5 py-3 hover:bg-white/10">
                  <Mail size={18} className="mr-2" /> Email me!
                </a>
              </div>
            </div>
            
            {/* was originally a contact section similar to a newsletter sign up but would prefer to display icon of technical skills*/}

            {/* <div className="rounded-2xl border border-[var(--border)]/60 bg-[var(--panel)] p-6">
              <form onSubmit={(e) => e.preventDefault()} className="grid gap-4">
                <label className="grid gap-1 text-sm">
                  <span className="text-[var(--subtext)]">Your email</span>
                  <input className="rounded-xl bg-transparent border border-[var(--border)]/60 px-3 py-2 outline-none focus:border-[var(--accent)]" placeholder="you@domain.com" />
                </label>
                <label className="grid gap-1 text-sm">
                  <span className="text-[var(--subtext)]">Message</span>
                  <textarea className="rounded-xl bg-transparent border border-[var(--border)]/60 px-3 py-2 min-h-[120px] outline-none focus:border-[var(--accent)]" placeholder="Say hello…" />
                </label>
                <div>
                  <Button type="submit" className="rounded-2xl bg-[var(--accent)] hover:bg-[var(--accent2)] text-white">Send</Button>
                </div>
              </form>
            </div> */}

          </div>
        </Section>
      </main>

      <footer className="border-t border-[var(--border)]/60">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-[var(--subtext)] flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Bird className="w-8 h-8" />
            <span>© {new Date().getFullYear()} James Crowe</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text)]"
            >
              Resume
            </a>
            <a href="https://github.com/jamesbrcr" className="hover:text-[var(--text)]">GitHub</a>
            <a href="https://www.linkedin.com/in/james-b-crowe/" className="hover:text-[var(--text)]">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
