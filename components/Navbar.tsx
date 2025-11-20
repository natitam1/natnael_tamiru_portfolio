"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  LuUser,
  LuSparkles,
  LuLayers,
  LuBriefcase,
  LuMessageCircle,
} from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";

// Navigation items centralized for easy updates
const navItems = [
  { label: "Home", href: "/", icon: IoHomeOutline },
  { label: "About", href: "/about", icon: LuUser },
  { label: "Skills", href: "/skills", icon: LuSparkles },
  { label: "Projects", href: "/projects", icon: LuLayers },
  { label: "Experience", href: "/experience", icon: LuBriefcase },
  { label: "Contact", href: "/contact", icon: LuMessageCircle },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex w-full items-center justify-center px-4">
      <nav className="relative flex w-full max-w-5xl items-center justify-between rounded-full border border-white/12 bg-white/5 px-4 py-2 text-lg font-semibold shadow-[0_6px_18px_rgba(0,0,0,0.32)] sm:px-6 sm:py-2">
        {/* Decorative gradient background — toned down to avoid bright glow */}
        <div className="pointer-events-none absolute inset-0 rounded-full border border-yellow-50/10 bg-linear-to-r from-amber-200/25 via-yellow-300/20 to-orange-300/15 opacity-30" />

        {/* Desktop nav: visible on md+ */}
        <div className="hidden w-full md:flex md:items-center md:justify-center md:gap-1.5">
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="group relative flex min-w-[88px] items-center justify-center gap-2 rounded-full px-4 py-1.5 text-white/85 transition-all duration-200 hover:text-white sm:min-w-[105px] sm:px-5 sm:py-2"
            >
              <span className="absolute inset-0 -z-10 scale-75 rounded-full bg-white/10 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100" />
              <Icon className="text-lg text-yellow-100 transition-transform duration-200 group-hover:-translate-y-0.5 sm:text-xl" />
              <span className="tracking-wide">{label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile: show compact button on small screens */}
        <div className="flex w-full items-center justify-between md:hidden">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-wide">Natnael</span>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="rounded-full bg-white/6 p-2 text-white/90 shadow hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            {/* Simple hamburger icon (three bars) */}
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown menu: rendered when open */}
        {open && (
          <>
            {/* Backdrop to increase contrast and capture outside clicks */}
            <div
              className="fixed inset-0 z-30 bg-black/40 md:hidden"
              onClick={() => setOpen(false)}
            />

            <div className="absolute top-full left-1/2 z-40 w-[90%] max-w-md -translate-x-1/2 rounded-2xl border border-white/10 bg-linear-to-b from-[#062033]/95 to-[#031224]/95 p-3 shadow-2xl md:hidden">
              <div className="flex flex-col gap-2">
                {navItems.map(({ label, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-white hover:bg-yellow-400/10 transition-colors"
                  >
                    <Icon className="text-lg text-yellow-200" />
                    <span className="font-medium">{label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
