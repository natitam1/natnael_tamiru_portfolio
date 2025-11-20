import React from "react";

export const metadata = {
  title: "Experience | Nati",
  description: "A look at my learning journey, projects, and education.",
};

const EducationSection = () => (
  <section className="mx-auto py-8 w-full max-w-2xl flex flex-col items-center">
    <h3 className="mt-4 text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-yellow-200 via-amber-300 to-orange-300 drop-shadow-[0_1px_25px_rgba(253,224,71,0.36)]">
      Education
    </h3>
    <div className="mt-4 px-8 py-6 rounded-2xl bg-[#1c1c26] border border-yellow-200/30 flex items-center gap-6 shadow-md shadow-yellow-200/10 w-full justify-between">
      <div>
        <div className="text-white text-md font-semibold">2025 – 2029</div>
        <div className="text-yellow-300 text-sm font-bold mt-1">
          BSc in Computer Science
        </div>
        <div className="text-white/80 text-sm mt-1">Addis Ababa University</div>
      </div>
      <span className="hidden sm:block text-yellow-200 text-2xl">🎓</span>
    </div>
  </section>
);

export default function ExperiencePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col items-center overflow-hidden px-4 py-10 sm:px-6 sm:py-16 mt-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-yellow-200 via-amber-300 to-orange-300 drop-shadow-[0_1px_25px_rgba(253,224,71,0.36)]">
          Experience
        </h1>
        <p className="mt-2 text-lg text-white/70">
          My Learning Journey &amp; Projects
        </p>
      </header>
      <section className="flex flex-col items-center w-full">
        <div className="max-w-2xl w-full px-8 py-6 rounded-2xl bg-[#1c1c26] border border-yellow-200/30 flex items-center text-center gap-2 shadow-md shadow-yellow-200/10">
          <div className="w-full">
            <h2 className="text-xl font-bold text-yellow-200 mb-2">
              No Work Experience Yet
            </h2>
            <p className="text-white/80 mb-3">
              I don&apos;t have formal work experience yet, but I&apos;m
              actively learning and building projects.
            </p>
            <p className="text-yellow-200 mt-2 font-semibold">
              Open to internship and work opportunities.
            </p>
          </div>
        </div>
      </section>
      <EducationSection />
    </main>
  );
}
