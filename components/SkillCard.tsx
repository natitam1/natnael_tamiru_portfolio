import React from "react";

export interface SkillSubcategory {
  name: string;
  skills: string[];
}

interface SkillCardProps {
  title: string;
  subcategories: SkillSubcategory[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, subcategories }) => (
  <div className="group relative flex flex-col rounded-2xl border border-white/10 bg-linear-to-br from-[#18181b] via-[#23232a] to-[#111112] p-6 shadow-lg shadow-yellow-200/10 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] mb-6">
    <h3 className="mb-2 text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-yellow-200 via-amber-300 to-orange-300">
      {title}
    </h3>
    <hr className="mb-4 border-t border-white/20" />
    <div className="flex flex-col gap-4">
      {subcategories.map((sub) => (
        <div key={sub.name}>
          <div className="mb-2 text-base font-semibold text-white">
            {sub.name}
          </div>
          <div className="flex flex-wrap gap-2">
            {sub.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-[#23232a] px-3 py-1 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#35353e]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillCard;
