import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import QuickImg from "../assets/quick.png";
import WormImg from "../assets/worm2.jpg";
import dj1 from "../assets/dj1.png";

export default function Projects() {
  const projects = [
    {
      title: "QuickBlog – Full-Stack Blogging Platform",
      description:
        "A full-stack blogging platform built with the MERN stack, integrating Google Gemini for AI-assisted writing and ImageKit for image optimization. Includes a clean UI, admin dashboard, and full CRUD functionality.",
      tech: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Google Gemini API",
        "ImageKit API",
      ],
      live: "https://quick-blog-natnael.vercel.app/",
      github: "https://github.com/natitam1/QuickBlog-Natnael",
      image: QuickImg,
    },
    {
      title: "Bookworm – Cross-Platform Full-Stack Book App",
      description:
        "A cross-platform full-stack book application for web, Android, and iOS. Users can authenticate, add books, manage their collection, and browse an infinite scrolling feed with multiple themes.",
      tech: [
        "React Native",
        "Expo",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Cloudinary",
      ],
      github: "https://github.com/natitam1/QuickBlog-Natnael",
      image: WormImg,
    },
    {
      title: "Little Lemon Restaurant Website",
      description:
        "A full-stack restaurant website for Little Lemon, a family-owned Mediterranean restaurant in Chicago, showcasing seasonal menus, special offers, table booking, and opening hours. The site features a modern design with sections for Home, About, Menu, and Booking.",
      tech: ["Django", "HTML", "CSS", "JavaScript"],
      live: "https://littlelemon-1-57ni.onrender.com/home/",
      github: "https://github.com/natitam1/littlelemon",
      image: dj1,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 bg-white dark:bg-black text-black dark:text-white py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full text-center"
      >
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              description={project.description}
              tech={project.tech}
              live={project.live}
              github={project.github}
              image={project.image}
            />
          ))}
        </div>

        <p className="mt-8 text-gray-600 dark:text-gray-400">
          Other Projects:{" "}
          <a
            href="https://github.com/natitam1"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-black dark:hover:text-white transition"
          >
            GitHub
          </a>
        </p>
      </motion.div>
    </section>
  );
}
