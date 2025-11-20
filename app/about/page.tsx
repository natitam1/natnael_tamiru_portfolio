import Link from "next/link";

export const metadata = {
  title: "About | Nati",
  description:
    "Learn more about Natnael Tamiru, a teenage developer from Ethiopia.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col items-center overflow-hidden px-4 py-10 text-center sm:px-6 sm:py-16 mt-16">
      <section
        id="about"
        className="flex w-full flex-col items-center justify-center gap-8 text-white"
      >
        {/* Section Title */}
        <h1 className=" text-4xl  font-extrabold text-transparent bg-clip-text bg-linear-to-r from-yellow-200 via-amber-300 to-orange-300 drop-shadow-[0_0_35px_rgba(253,224,71,0.55)]">
          About Me
        </h1>

        {/* Card */}
        <div className="relative max-w-4xl w-full rounded-2xl border border-white/10 bg-white/5 px-12 py-10 text-left shadow-lg shadow-yellow-200/10 sm:px-16 sm:py-12">
          <p className="text-base text-white/70 sm:text-lg">
            Hey! I’m a teenage developer from Ethiopia, currently a 2nd-year CS
            major at Addis Ababa University. I’m passionate about building cool
            stuff on the web—I’m a full-stack developer, and these days I’m
            diving deep into backend systems and mastering DevOps.
          </p>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            I love exploring new technologies and experimenting with ways to
            make applications faster, smarter, and more user-friendly. When I’m
            not coding, you’ll probably find me reading about AI, tinkering with
            side projects, or just bingeing on tech tutorials.
          </p>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            I’m all about learning by doing—every project, no matter how small,
            is a chance to level up. I also enjoy collaborating with others and
            sharing knowledge; there’s something satisfying about turning an
            idea into something real that people can interact with.
          </p>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Besides tech, I enjoy music, reading, and occasionally sketching out
            ideas for future projects. Basically, I’m someone who loves
            creating, learning, and growing—one line of code at a time.
          </p>
        </div>
      </section>
    </main>
  );
}
