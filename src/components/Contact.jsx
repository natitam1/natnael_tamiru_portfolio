import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // LeetCode icon
import ContactCard from "./ContactCard";
import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    {
      title: "Email",
      detail: "natnaeltamiru98@gmail.com",
      icon: <FaEnvelope size={28} />,
      link: "mailto:natnaeltamiru98@gmail.com",
    },
    {
      title: "GitHub",
      detail: "natitam1",
      icon: <FaGithub size={28} />,
      link: "https://github.com/natitam1",
    },
    {
      title: "LinkedIn",
      detail: "natitam1",
      icon: <FaLinkedin size={28} />,
      link: "https://www.linkedin.com/in/natitam1",
    },
    {
      title: "Phone",
      detail: "+251994627985",
      icon: <FaPhone size={28} />,
      link: "tel:+251994627985",
    },
    {
      title: "Telegram",
      detail: "@natnaeltamiru",
      icon: <FaTelegramPlane size={28} />,
      link: "https://t.me/natnaeltamiru",
    },
    {
      title: "LeetCode",
      detail: "natitam1",
      icon: <SiLeetcode size={28} />,
      link: "https://leetcode.com/natitam1",
    },
    {
      title: "X (Twitter)",
      detail: "@natitam11",
      icon: <FaTwitter size={28} />,
      link: "https://twitter.com/natitam11",
    },
    {
      title: "Location",
      detail: "Addis Ababa, Ethiopia",
      icon: <FaMapMarkerAlt size={28} />,
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-16 bg-white dark:bg-black text-black dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full text-center space-y-8"
      >
        <h2 className="text-4xl font-bold mb-12">Contact Me</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {contacts.map((contact, idx) => (
            <ContactCard
              key={idx}
              title={contact.title}
              detail={contact.detail}
              icon={contact.icon}
              link={contact.link}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
