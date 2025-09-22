"use client";
import React, { useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ChevronRight, ArrowDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
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

// Simple crow silhouette SVG
const CrowSVG = ({ className = "w-64 h-64" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 512 512" fill="currentColor" aria-hidden>
    <path d="M470 240c-26 10-56-4-67-29-12-25-6-52 12-70-40-9-87 6-115 39-8 10-15 21-20 33-4-1-8-2-12-2-31 0-59 21-68 50-5 2-9 4-13 7-20 14-32 36-33 60-13-9-24-21-31-36-2-5-7-8-12-8-39 0-72-27-81-65-1-5-6-8-11-7-8 2-14 10-13 18 8 60 59 105 120 105 3 0 6 1 8 3 26 27 62 43 101 43 74 0 136-53 148-124 1-4 5-7 9-7 15 0 28-6 37-16 6-6 0-16-8-14z" />
  </svg>
);

// Feather particle component
const FeatherParticles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const feathers = useMemo(() => Array.from({ length: 22 }, (_, i) => i), []);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden">
      {feathers.map((i) => {
        const delay = Math.random() * 8;
        const duration = 14 + Math.random() * 12;
        const startX = Math.random() * 100; // vw
        const size = 6 + Math.random() * 14; // px
        return (
          <motion.div
            key={i}
            initial={{ y: -100, x: `${startX}vw`, opacity: 0 }}
            animate={{ y: "110vh", opacity: [0, 0.6, 0.2, 0], x: [`${startX}vw`, `${startX + (Math.random() * 20 - 10)}vw`] }}
            transition={{ duration, delay, repeat: Infinity, ease: "easeOut" }}
            className="absolute"
          >
            <div
              className="rotate-12"
              style={{
                width: size,
                height: size * 3,
                borderRadius: size,
                background: `linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))`,
                boxShadow: `0 0 12px rgba(255,255,255,0.06)`,
                filter: "blur(0.2px)",
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

// Magnetic button effect (subtle)
const Magnetic: React.FC<React.ComponentProps<typeof motion.div>> = ({ children, ...props }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handle = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      node.style.transform = `translate(${x * 0.04}px, ${y * 0.04}px)`;
    };
    const reset = () => (node.style.transform = "translate(0,0)");
    node.addEventListener("mousemove", handle);
    node.addEventListener("mouseleave", reset);
    return () => {
      node.removeEventListener("mousemove", handle);
      node.removeEventListener("mouseleave", reset);
    };
  }, []);
  return (
    <motion.div ref={ref} {...props}>
      {children}
    </motion.div>
  );
};

// Mock project data
const projects = [
  {
    title: "Rogue Lineage Neural Net",
    desc: "Built a CNN to classify in-game character features with custom dataset and augmentations.",
    link: "#",
  },
  {
    title: "Gift Recommender (Hackathon)",
    desc: "AI-powered suggestions using Amazon purchase data; web app shipped in 24 hours.",
    link: "#",
  },
  {
    title: "Equity Models",
    desc: "Multi-year DCF & comps for KO, PEP, TMUS, and more; scenario analysis tooling.",
    link: "#",
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
              <CrowSVG className="w-8 h-8" />
            </div>
            <span className="text-sm md:text-base tracking-wider uppercase text-[var(--text)]/80">James Crowe</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-[var(--subtext)]">
            <a href="#work" className="hover:text-[var(--text)] transition">Flight</a>
            <a href="#about" className="hover:text-[var(--text)] transition">Nest</a>
            <a href="#notes" className="hover:text-[var(--text)] transition">Caws</a>
            <a href="#contact" className="hover:text-[var(--text)] transition">Flock</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#" aria-label="GitHub" className="p-2 rounded hover:bg-white/5"><Github size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded hover:bg-white/5"><Linkedin size={18} /></a>
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
              <div className="text-sm tracking-widest uppercase text-[var(--subtext)] mb-3">Where code takes wing</div>
              <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05]">
                Gothic Minimal. <span className="text-[var(--subtext)]">Crow(e) Crafted.</span>
              </h1>
              <p className="mt-5 text-[var(--subtext)] max-w-prose">
                I’m James, a CS + Data Science student blending low-level systems, AI, and finance. This is my
                corner of the web—dark, clean, and a little bit raven‑esque.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <Button className="bg-[var(--text)] text-black hover:bg-white rounded-2xl px-6 py-6 text-sm">
                    View Projects <ChevronRight className="ml-2 inline" size={16} />
                  </Button>
                </Magnetic>
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
                <div className="absolute inset-0 flex items-center justify-center text-[var(--text)]/90">
                  <CrowSVG className="w-72 h-72" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        {/* Work */}
        <Section id="work" title="Selected Flights" eyebrow="Projects">
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, idx) => (
              <Card key={idx} className="bg-[var(--panel)] border-[var(--border)]/60 rounded-2xl overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-[var(--text)]">{p.title}</CardTitle>
                  <CardDescription className="text-[var(--subtext)]">{p.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={p.link} className="inline-flex items-center gap-1 text-sm text-[var(--text)] hover:underline">
                    Read case study <ExternalLink size={16} />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* About */}
        <Section id="about" title="About the Crowe" eyebrow="Nest">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="text-[var(--subtext)] leading-relaxed">
              <p>
                I split my time between systems programming, applied ML, and financial modeling. I enjoy reverse‑engineering
                binaries (CS 354), training models on messy real‑world data, and translating numbers into stories.
              </p>
              <p className="mt-4">
                Lately I’ve been building <em>clean, minimal</em> interfaces that feel tactile: micro‑interactions, subtle
                motion, and a palette inspired by raven feathers.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--border)]/60 bg-[var(--panel)] p-6">
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-[var(--subtext)]">Focus</dt>
                  <dd className="text-[var(--text)] mt-1">AI/ML, Systems, Finance</dd>
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

        {/* Notes / Blog preview */}
        <Section id="notes" title="Caws & Notes" eyebrow="Writing">
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <Card key={i} className="bg-[var(--panel)] border-[var(--border)]/60 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-[var(--text)]">Post title {i}</CardTitle>
                  <CardDescription className="text-[var(--subtext)]">A short description of the post goes here.</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="#" className="inline-flex items-center gap-1 text-sm text-[var(--text)] hover:underline">
                    Read post <ExternalLink size={16} />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Join the Flock" eyebrow="Contact">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[var(--subtext)] max-w-prose">
                Have a project, internship, or collaboration in mind? I’d love to chat.
              </p>
              <div className="mt-6">
                <a href="mailto:jbcrowe@wisc.edu" className="inline-flex items-center rounded-2xl border border-[var(--border)]/60 bg-white/5 px-5 py-3 hover:bg-white/10">
                  <Mail size={18} className="mr-2" /> Email James
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-[var(--border)]/60 bg-[var(--panel)] p-6">
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
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-[var(--border)]/60">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-[var(--subtext)] flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <CrowSVG className="w-5 h-5" />
            <span>© {new Date().getFullYear()} James Crowe</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[var(--text)]">Resume</a>
            <a href="#" className="hover:text-[var(--text)]">GitHub</a>
            <a href="#" className="hover:text-[var(--text)]">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
