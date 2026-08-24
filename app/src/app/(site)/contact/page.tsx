// app/(site)/contact/page.tsx
import type { Metadata } from "next";
import { Mail } from "lucide-react";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact | James Crowe",
};

export default function ContactPage() {
  return (
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
      </div>
    </Section>
  );
}
