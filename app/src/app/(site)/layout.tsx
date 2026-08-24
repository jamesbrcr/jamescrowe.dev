// app/(site)/layout.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SkipLink = () => (
  <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded">Skip to content</a>
);

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] antialiased selection:bg-[var(--accent2)]/30 selection:text-white">
      <SkipLink />
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
