"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "skills",
    path: "/skills",
  },
  {
    name: "experience",
    path: "/experience",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const NavLinks = ({ containerStyles }) => {
  const pathname = usePathname();
  return (
    <ul className={containerStyles}>
      {links.map((link, index) => {
        // Determine if the current link matches the active route
        const isActive = pathname === link.path;
        const charLength = link.name.length;
        const lineWidth = charLength > 5 ? "after:w-[120%]" : "after:w-[90%]";
        return (
          <Link
            className={`relative text-lg uppercase text-white ${
              isActive &&
              `after:content-[''] after:block after:absolute after:left-0 after:top-1/2 ${lineWidth} after:h-[4px] after:bg-accent after:-translate-y-1/2 after:z-0`
            }`}
            href={link.path}
            key={index}
          >
            <span className="relative z-10"> {link.name}</span>
          </Link>
        );
      })}
    </ul>
  );
};

export default NavLinks;
