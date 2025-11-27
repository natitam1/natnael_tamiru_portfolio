import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaLightbulb } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-16 bg-white dark:bg-black text-black dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full text-center md:text-left space-y-8"
      >
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        {/* Description */}
        <p className="text-lg leading-relaxed mb-10">
          Hey! I'm a full-stack developer and Computer Science student at Addis
          Ababa University (2025–2030) who loves building impactful projects. I
          work on both web and mobile applications, moving easily between
          frontend and backend—crafting clean UIs, reliable backends, and smooth
          user experiences. Recently, I’ve been exploring DevOps and AI agents,
          consistently experimenting with new tools, building projects, and
          sharing what I learn. If there’s an idea worth building, I’m all in.
        </p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-center p-6 rounded-xl border border-black dark:border-white hover:scale-105 transition-transform shadow-md">
            <FaGraduationCap size={36} className="mb-3" />
            <h3 className="font-semibold text-lg mb-2">Education</h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              BSc Computer Science, Addis Ababa University (2025–2030)
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 rounded-xl border border-black dark:border-white hover:scale-105 transition-transform shadow-md">
            <FaLaptopCode size={36} className="mb-3" />
            <h3 className="font-semibold text-lg mb-2">Work Focus</h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Building full-stack web & mobile apps, experimenting with DevOps,
              AI agents, and modern tools.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 rounded-xl border border-black dark:border-white hover:scale-105 transition-transform shadow-md">
            <FaLightbulb size={36} className="mb-3" />
            <h3 className="font-semibold text-lg mb-2">Passion</h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Learning, experimenting, and creating impactful solutions. If
              there’s an idea worth building, I’m all in.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
