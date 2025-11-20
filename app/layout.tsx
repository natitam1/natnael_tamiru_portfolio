import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Natnael Tamiru",
  description:
    "Portfolio of Natnael Tamiru, a passionate teenage developer from Ethiopia specializing in full-stack web development, mobile apps, DevOps, and modern JavaScript frameworks. Explore my projects, skills, and journey in software engineering.",
};

// layout.tsx

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // Set body to min-h-screen but allow content overflow to scroll
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#03030d] text-white overflow-y-auto`}
      >
        {/* Remove the outer "relative min-h-screen overflow-hidden" div completely
            to let the body manage the primary scroll. */}

        {/* This div contains the radial gradients and will remain fixed or full-screen */}
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(253,224,71,0.45),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.35),transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(249,115,22,0.25),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(234,88,12,0.15),transparent_55%)]" />
        </div>

        {/* This div becomes the main content wrapper */}
        <div className="relative z-10 flex min-h-screen flex-col items-center">
          <Navbar />
          {/* w-full flex-1 is fine here. It will stretch to fit the content. */}
          <div className="w-full flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
