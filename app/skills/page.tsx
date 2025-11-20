import SkillsSection from "../../components/SkillsSection";
export const metadata = {
  title: "Skills | Nati",
  description: "Skills that I have",
};

const skillCategories = [
  {
    title: "Frontend Development",
    subcategories: [
      {
        name: "Frameworks & Libraries",
        skills: ["React.js", "Next.js"],
      },
      {
        name: "Styling",
        skills: ["Tailwind CSS", "ShadCN UI"],
      },
      {
        name: "State Management",
        skills: ["Redux", "Zustand", "Tanstack Query"],
      },
      {
        name: "Animation & UI",
        skills: ["Framer Motion"],
      },
      {
        name: "Tooling",
        skills: ["TypeScript", "Vite"],
      },
    ],
  },
  {
    title: "Backend Development",
    subcategories: [
      {
        name: "Languages & Runtimes",
        skills: ["Node.js", "TypeScript", "Go", "Python"],
      },
      {
        name: "Frameworks",
        skills: ["Express.js"],
      },
      {
        name: "Database & ORM",
        skills: ["MongoDB", "Mongoose"],
      },
      {
        name: "APIs & Communication",
        skills: ["REST"],
      },
    ],
  },
  {
    title: "DevOp (Learning)",
    subcategories: [
      {
        name: "Containers & Orchestration",
        skills: ["Docker", "Kubernetes"],
      },

      {
        name: "CI/CD & Monitoring",
        skills: ["GitHub Actions"],
      },
      {
        name: "Cloud & Infrastructure",
        skills: ["Linux", "Bash"],
      },
    ],
  },
  {
    title: "Mobile Development",
    subcategories: [
      {
        name: "Frameworks & Tools",
        skills: ["React Native", "Expo"],
      },
    ],
  },
];

const SkillsPage = () => {
  return <SkillsSection categories={skillCategories} />;
};

export default SkillsPage;
