import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  tech,
  live,
  github,
  image,
}) {
  return (
    <div className="group flex flex-col bg-white dark:bg-black border border-black dark:border-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      {/* Project Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      )}

      {/* Card Content */}
      <div className="p-6 flex flex-col justify-between gap-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>

        {tech && (
          <div className="mt-2 flex flex-wrap gap-2">
            {tech.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-4 mt-4">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1 border border-black dark:border-white rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              Live <FaExternalLinkAlt size={14} />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1 border border-black dark:border-white rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              GitHub <FaGithub size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
