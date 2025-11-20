"use client";

import React, { useState } from "react";

const categories = [
  {
    key: "web",
    label: "Websites & Full Stack",
  },
  {
    key: "mobile",
    label: "Mobile Apps",
  },
  {
    key: "bots",
    label: "Telegram Bots",
  },
  {
    key: "ai",
    label: "AI/ML",
  },
  {
    key: "other",
    label: "Other",
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState(categories[0].key);
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <h2 className="mb-10 mt-16 text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-yellow-200 via-amber-300 to-orange-300 text-center">
        Projects
      </h2>
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelected(cat.key)}
            className={`px-6 py-2 rounded-full font-semibold border transition-all text-sm shadow-sm hover:bg-yellow-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-300 ${
              selected === cat.key
                ? "bg-yellow-300 text-black border-yellow-300"
                : "bg-[#23232a] text-white border-white/10"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        <div className="text-white/70">No projects in this category yet.</div>
      </div>
    </section>
  );
};

export default ProjectsSection;
