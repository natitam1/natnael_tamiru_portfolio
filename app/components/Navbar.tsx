'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '/' },
    { name: 'Skills', href: '/skills' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
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
              className={`navbar-link ${isActive(item.href) ? 'navbar-link-active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="navbar-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`navbar-menu-icon ${isMenuOpen ? 'navbar-menu-icon-open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`navbar-menu-mobile ${isMenuOpen ? 'navbar-menu-mobile-open' : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`navbar-link-mobile ${isActive(item.href) ? 'navbar-link-active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

