// app/layout.tsx
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Domine } from "next/font/google";
import "./globals.css";

const domine = Domine({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-domine",
});

export const metadata: Metadata = {
  title: "James Crowe",
  description: "Personal site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${domine.variable} min-h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
