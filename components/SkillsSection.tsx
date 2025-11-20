import React from "react";
import SkillCard, { SkillSubcategory } from "./SkillCard";

export interface SkillCategory {
  title: string;
  subcategories: SkillSubcategory[];
}

interface SkillsSectionProps {
  categories: SkillCategory[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ categories }) => (
  <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
    <h2 className="mb-10 mt-16 text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-yellow-200 via-amber-300 to-orange-300 text-center">
      Skills
    </h2>
    <div className="flex flex-wrap gap-6 justify-center">
      {categories.map((cat) => (
        <SkillCard
          key={cat.title}
          title={cat.title}
          subcategories={cat.subcategories}
        />
      ))}
    </div>
  </section>
);

export default SkillsSection;
