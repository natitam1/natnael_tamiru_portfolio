import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import profilePic from "../assets/x.png";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const TYPING_WORDS = [
  "Full-Stack Developer",
  "MERN Stack Specialist",
  "Learning DevOps",
  "AI & ML Enthusiast",
];

const TypingEffect = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("typing");
  const [cursorVisible, setCursorVisible] = useState(true);

  const TYPING_SPEED = 85;
  const DELETING_SPEED = 40;
  const PAUSE_AFTER_TYPED = 950;
  const PAUSE_AFTER_DELETED = 400;

  useEffect(() => {
    const cursorTimer = setInterval(() => setCursorVisible((v) => !v), 380);
    return () => clearInterval(cursorTimer);
  }, []);

  useEffect(() => {
    const current = TYPING_WORDS[index];
    let timeout;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          TYPING_SPEED
        );
      } else {
        timeout = setTimeout(() => setPhase("pause"), PAUSE_AFTER_TYPED);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("deleting"), 450);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), DELETING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setIndex((index + 1) % TYPING_WORDS.length);
          setPhase("typing");
        }, PAUSE_AFTER_DELETED);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, index]);

  return (
    <span className="inline-block">
      {text}
      <span
        className={`ml-0.5 ${cursorVisible ? "opacity-100" : "opacity-30"}`}
      >
        |
      </span>
    </span>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen md:mt-7 mt-4 bg-white text-black flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      {/* Profile Image */}
      <motion.img
        src={profilePic}
        alt="Natnael Tamiru"
        className="w-36 h-36 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-black shadow-xl bg-white mb-4 sm:mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />

      {/* Name */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 tracking-wide text-center">
        Natnael Tamiru
      </h1>

      {/* Typing Animation */}
      <div className="h-14 sm:h-16 text-xl sm:text-2xl font-mono font-semibold flex items-center mb-6 sm:mb-8 text-center">
        <TypingEffect />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 max-w-md w-full justify-center">
        <Link
          to="contact"
          smooth={true}
          duration={600}
          offset={-70}
          className="flex-1"
        >
          <button className="w-full px-5 py-3 bg-black text-white font-bold rounded border-2 border-black hover:bg-white hover:text-black transition duration-200 text-sm sm:text-base text-center">
            Hire Me
          </button>
        </Link>

        <a
          href="/resume (2).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <button className="w-full px-5 py-3 bg-white text-black font-bold rounded border-2 border-black hover:bg-black hover:text-white transition duration-200 text-sm sm:text-base text-center">
            Download Resume
          </button>
        </a>
      </div>

      {/* Social Links */}
      <div className="flex flex-row gap-5 sm:gap-7 mb-12 justify-center">
        <a
          href="https://github.com/natitam1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:scale-110 hover:text-blue-500 transition-transform"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/natitam1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:scale-110 hover:text-blue-700 transition-transform"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/natitam11"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:scale-110 hover:text-sky-500 transition-transform"
        >
          <FaTwitter />
        </a>
        <a
          href="mailto:natnaeltamiru98@gmail.com"
          className="text-2xl hover:scale-110 hover:text-rose-500 transition-transform"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Discover More */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer">
        <span className="animate-bounce">
          <svg
            width="32"
            height="32"
            fill="none"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M12 4v16m0 0l7-7m-7 7l-7-7" />
          </svg>
        </span>
        <span className="mt-2 text-xs tracking-wide">Discover More</span>
      </div>
    </section>
  );
};

export default Hero;
