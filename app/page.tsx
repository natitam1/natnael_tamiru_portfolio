import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex h-screen max-w-6xl flex-col items-center overflow-hidden px-4 max-sm:pt-[-10] pb-6 text-center sm:px-6 sm:pt-30 sm:pb-10">
      <section
        id="home"
        className="flex h-full w-full flex-col items-center justify-center gap-8 text-white"
      >
        <p className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.3em] text-yellow-100/80 sm:px-6 sm:text-sm">
          MERN <span className="max-sm:hidden">STACK SPECIALIST</span> ·
          <span className="max-sm:hidden">~</span>1 YEAR EXPERIENCE
        </p>

        <div className="flex flex-col items-center gap-4">
          <h1 className="bg-linear-to-r from-yellow-200 via-amber-300 to-orange-300 bg-clip-text text-balance text-4xl font-black uppercase tracking-widest text-transparent drop-shadow-[0_0_35px_rgba(253,224,71,0.55)] sm:text-6xl md:text-7xl">
            Natnael Tamiru
          </h1>
          <div className="relative rounded-full border border-white/10 bg-white/5 px-6 py-2 text-lg font-semibold tracking-wider text-white sm:px-8 sm:py-3 sm:text-2xl">
            <span className="absolute inset-x-6 top-1/2 -z-10 h-16 -translate-y-1/2 rounded-full bg-linear-to-r from-yellow-200/40 via-amber-300/45 to-orange-300/35 blur-3xl" />
            Full-Stack Developer
          </div>
        </div>

        <p className="max-w-3xl text-base sm:text-lg text-white/70 mt-8 px-2">
          I’m a self-taught developer who loves learning and leveling up every
          day. I enjoy building clean and modern digital experiences.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="flex items-center gap-2 rounded-full hover:-translate-y-0.5 border border-emerald-300/40 bg-emerald-300/10 px-4 py-2 text-xs font-semibold text-emerald-100 sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
            Available for Work ⚡
          </span>
          <Link
            href={"/projects"}
            className="flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-2 text-xs font-semibold uppercase  tracking-wide text-black shadow-[0_10px_25px_rgba(250,204,21,0.4)] transition hover:-translate-y-0.5 hover:bg-yellow-300 sm:px-6 sm:py-3 sm:text-sm"
          >
            Explore My Universe
          </Link>
          <a
            href="/resume.pdf"
            className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white/80 transition hover:-translate-y-0.5 hover:border-white/40 hover:text-white sm:px-6 sm:py-3 sm:text-sm"
          >
            Download Resume ↗
          </a>
        </div>

        <Link
          href={"/about"}
          className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/60 transition hover:text-white sm:text-sm"
        >
          Discover More
        </Link>
      </section>
    </main>
  );
}
