// components/Header.tsx
import Link from "next/link";
import { Bird, Github, Linkedin, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)]/60 bg-[var(--bg)]/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="text-[var(--text)]/80">
            <Bird className="w-8 h-8" />
          </div>
          <span className="text-sm md:text-base tracking-wider uppercase text-[var(--text)]/80">James Crowe</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-[var(--subtext)]">
          <Link href="/about" className="hover:text-[var(--text)] transition">About</Link>
          <Link href="/projects" className="hover:text-[var(--text)] transition">Projects</Link>
          <Link href="/blog" className="hover:text-[var(--text)] transition">Blog</Link>
          <Link href="/contact" className="hover:text-[var(--text)] transition">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://github.com/jamesbrcr" aria-label="GitHub" className="p-2 rounded hover:bg-white/5"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/james-b-crowe/" aria-label="LinkedIn" className="p-2 rounded hover:bg-white/5"><Linkedin size={18} /></a>
          <Link href="/contact" aria-label="Email" className="p-2 rounded hover:bg-white/5"><Mail size={18} /></Link>
        </div>
      </div>
    </header>
  );
}
