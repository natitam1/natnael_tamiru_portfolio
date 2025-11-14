"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "/" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Desktop Navigation - Centered */}
        <div className="navbar-menu-desktop">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`navbar-link ${
                isActive(item.href) ? "navbar-link-active" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
      </div>

      <div className="relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className="px-4 py-2 bg-gradient-to-r from-[#fcaf0b]/10 via-[#fcaf0b]/15 to-[#fcaf0b]/10; rounded-full md:hidden absolute top-2 right-4"
        >
          {isMenuOpen ? <FiX size={25} /> : <FiMenu size={25} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-16 right-4 w-fit min-w-[200px] bg-gradient-to-r from-[#fcaf0b]/10 via-[#fcaf0b]/15 to-[#fcaf0b]/10 backdrop-blur-md border border-[#fcaf0b]/20 rounded-3xl shadow-lg overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-6 py-3 text-gray-700 font-medium transition-all duration-300 hover:text-[#fcaf0b] hover:bg-[#fcaf0b]/20 border-l-4 ${
                isActive(item.href)
                  ? "text-[#fcaf0b] border-[#fcaf0b] bg-[#fcaf0b]/20"
                  : "border-transparent"
              } first:rounded-t-3xl last:rounded-b-3xl`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
