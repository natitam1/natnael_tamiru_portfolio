import React from "react";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

export default function Skills() {
  const skillsData = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Go", "C++"],
    },
    {
      title: "Frontend Development",
      skills: [
        "HTML5",
        "CSS3",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "ShadCN UI",
        "Redux",
        "Zustand",
        "Tanstack Query",
        "Framer Motion",
        "Vite",
        "React Router",
      ],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Django"],
    },
    {
      title: "Database & ORM",
      skills: ["MongoDB", "Mongoose"],
    },
    {
      title: "Mobile Development",
      skills: ["React Native", "Expo"],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 bg-white dark:bg-black text-black dark:text-white py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full text-center"
      >
        <h2 className="text-4xl font-bold mb-12">My Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <SkillCard
              key={idx}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
