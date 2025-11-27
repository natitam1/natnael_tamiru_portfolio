import React from "react";
import { motion } from "framer-motion";
import { FaRegCalendarAlt, FaRegLightbulb, FaLaptopCode } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      title: "No professional experience yet",
      role: "Open for internships, projects, and learning opportunities",
      period: "2025 – Present",
      icon: <FaRegLightbulb size={28} />,
    },
    {
      title: "Education & Learning",
      role: "Full-Stack Web & Mobile Development, AI & DevOps experimentation",
      period: "2025 – 2030",
      icon: <FaLaptopCode size={28} />,
    },
    {
      title: "Projects",
      role: "Completed personal and academic projects to build real-world skills",
      period: "Ongoing",
      icon: <FaRegCalendarAlt size={28} />,
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-16 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full text-center md:text-left space-y-8"
      >
        <h2 className="text-4xl font-bold mb-10 text-black dark:text-white">
          Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-transform hover:-translate-y-1"
            >
              <div className="mb-3 text-gray-500 dark:text-gray-400">
                {exp.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{exp.title}</h3>
              <p className="text-center text-sm mb-2">{exp.role}</p>
              <span className="text-xs text-gray-400">{exp.period}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
