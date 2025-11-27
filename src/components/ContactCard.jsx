import React from "react";
import { motion } from "framer-motion";

export default function ContactCard({ icon, title, detail, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-col items-center justify-center p-6 bg-white dark:bg-black border border-black dark:border-white rounded-xl shadow-md hover:shadow-xl transition-transform text-center"
    >
      <div className="mb-3 text-black dark:text-white">{icon}</div>
      <h3 className="font-semibold text-lg mb-1 text-black dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{detail}</p>
    </motion.a>
  );
}
