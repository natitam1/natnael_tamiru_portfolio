import React from "react";
import {
  FaGithub,
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";

const socials = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/example",
    icon: <FaLinkedin />,
  },
  {
    name: "GitHub",
    url: "https://github.com/example",
    icon: <FaGithub />,
  },
  {
    name: "Email",
    url: "mailto:example@email.com",
    icon: <FaEnvelope />,
  },
  {
    name: "Telegram",
    url: "https://t.me/example",
    icon: <FaTelegramPlane />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/example",
    icon: <FaTwitter />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/example",
    icon: <FaInstagram />,
  },
];

const ContactSection = () => (
  <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
    <h2 className="mb-10 mt-16 text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-yellow-200 via-amber-300 to-orange-300 text-center">
      Contact
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start w-full">
      {/* Social Links - left card */}
      <div className="flex-1 flex flex-col rounded-2xl bg-[#18181b] border border-white/10 p-8 shadow-lg shadow-yellow-200/10 items-center justify-center w-full">
        <h3 className="text-lg font-bold text-yellow-200 mb-4 w-full text-left">Connect With Me</h3>
        <div className="flex flex-wrap gap-4 w-full justify-start">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#23232a] px-5 py-3 text-white text-lg font-semibold shadow hover:bg-yellow-400/10 hover:text-yellow-300 transition"
            >
              {social.icon}
              <span className="sm:inline">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
      {/* Email/Form - right card */}
      <form className="flex-1 flex flex-col gap-4 bg-[#18181b] rounded-2xl border border-white/10 p-8 shadow-lg shadow-yellow-200/10 w-full">
        <h3 className="text-lg font-bold text-yellow-200 mb-4">Send an Email</h3>
        <label className="text-white font-semibold" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="rounded bg-[#23232a] px-3 py-2 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          placeholder="Your Email"
        />
        <label className="text-white font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="rounded bg-[#23232a] px-3 py-2 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          placeholder="Your Message"
        />
        <button
          type="submit"
          className="mt-4 rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold uppercase text-black shadow-[0_10px_25px_rgba(250,204,21,0.4)] transition hover:-translate-y-0.5 hover:bg-yellow-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default ContactSection;
