"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import JamesPic from "@/images/James4.jpg";
import Header from "@/components/Header";

const FeatherParticles = dynamic(
  () => import("../components/FeatherParticles"),
  { ssr: false }
);

export default function CroweHome() {
  return (
    <div className="h-dvh overflow-hidden flex flex-col bg-[var(--bg)] text-[var(--text)] antialiased selection:bg-[var(--accent2)]/30 selection:text-white">
      <Header />

      <section className="relative isolate overflow-hidden flex-1 flex items-center">
        <FeatherParticles />
        <div className="mx-auto max-w-6xl px-4 w-full">
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
                <Link href="/about" className="inline-flex items-center text-[var(--subtext)] hover:text-[var(--text)]">
                  Learn more <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center md:justify-end">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
                className="relative w-[260px] h-[260px] md:w-[380px] md:h-[380px]">
                <div className="absolute inset-0 rounded-full bg-[var(--panel)] border border-[var(--border)]/70 shadow-[0_0_120px_rgba(139,92,246,0.08)]" />
                <div className="absolute -inset-1 rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(139,92,246,0.12),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[88%] h-[88%] rounded-full overflow-hidden">
                    <Image
                      src={JamesPic}
                      alt="James Crowe portrait"
                      fill
                      sizes="(min-width: 768px) 380px, 260px"
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
