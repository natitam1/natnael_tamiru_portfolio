import React from "react";

export default function SkillCard({ title, skills }) {
  return (
    <div className="bg-white dark:bg-black shadow-lg rounded-xl p-6 flex flex-col space-y-4 hover:shadow-2xl transition">
      <h3 className="text-lg font-semibold text-black dark:text-white">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
