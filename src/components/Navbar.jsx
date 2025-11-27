import { useEffect, useState } from "react";
import { FiHome, FiUser, FiCode, FiBriefcase, FiMail } from "react-icons/fi";
import { Link } from "react-scroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", to: "home", icon: <FiHome size={16} /> }, // <-- change '#' to 'home'
    { name: "About", to: "about", icon: <FiUser size={16} /> },
    { name: "Skills", to: "skills", icon: <FiCode size={16} /> },
    { name: "Projects", to: "projects", icon: <FiBriefcase size={16} /> },
    { name: "Experience", to: "experience", icon: <FiBriefcase size={16} /> },
    { name: "Contact", to: "contact", icon: <FiMail size={16} /> },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div
        className={`flex justify-center max-md:hidden items-center backdrop-blur-md border border-white/20 bg-white/20 dark:bg-black/20 rounded-4xl px-6 py-2 transition-all duration-300 ${
          scrolled ? "shadow-lg" : "shadow-md"
        }`}
      >
        <ul className="flex space-x-6 text-base sm:text-lg">
          {links.map((link) => (
            <li key={link.to} className="flex items-center space-x-2">
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                spy={true}
                offset={-70}
                activeClass="text-black dark:text-white"
                className="relative cursor-pointer dark:text-gray-300 text-gray-700 font-semibold transition group flex items-center gap-1 px-3 py-1 hover:bg-white/30 dark:hover:bg-black/30 rounded-md"
              >
                {link.icon}
                <span>{link.name}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black dark:bg-white transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
