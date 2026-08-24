// components/Footer.tsx
import { Bird } from "lucide-react";

export default function Footer() {
  return (
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
  );
}
