import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT, SOCIAL_LINKS, getSectionNum } from "../constants";
import { FaLinkedin, FaGithub, FaInstagram, FaCopy, FaCheck } from "react-icons/fa";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 min-h-[70vh] flex flex-col justify-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        <span><span className="section-num">{getSectionNum('contact')}.</span> Get In Touch</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl"
      >
        <p className="text-slate text-lg leading-relaxed mb-8">
          I'm currently open to new opportunities and interesting projects.
          Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        <a href={`mailto:${CONTACT.email}`} className="btn-outline inline-block mb-8">
          Say Hello
        </a>

        <div className="flex items-center gap-2 mb-10">
          <button
            type="button"
            onClick={copyEmail}
            className="font-mono text-sm text-slate hover:text-green transition-colors flex items-center gap-2"
          >
            {copied ? <FaCheck className="text-green" /> : <FaCopy />}
            {CONTACT.email}
          </button>
        </div>

        <div className="flex gap-5 text-xl">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="social-link"><FaGithub /></a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedin /></a>
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="social-link"><FaInstagram /></a>
        </div>
      </motion.div>

      <footer className="mt-24 pt-8 border-t border-[var(--navy-lighter)]">
        <p className="font-mono text-xs text-slate text-center">
          Designed & Built by Nagandhra Prasad · {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
};

export default Contact;
