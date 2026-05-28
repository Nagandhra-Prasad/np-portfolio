import { useState } from "react";
import { CONTACT, SOCIAL_LINKS } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCopy, FaCheck, FaGlobe } from "react-icons/fa";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactItems = [
    { icon: FaMapMarkerAlt, label: "Location", value: CONTACT.address, href: null },
    { icon: FaPhone, label: "Phone", value: CONTACT.phoneNo, href: `tel:${CONTACT.phoneNo.replace(/\s/g, '')}` },
    { icon: FaEnvelope, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: FaGlobe, label: "Website", value: "nagandhraprasad.dev", href: CONTACT.website },
  ];

  return (
    <section id="contact" className="py-24">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading"
      >
        Get In Touch
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-neutral-400 text-lg mb-12 max-w-2xl mx-auto"
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </motion.p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-hover p-6 text-center tilt-card"
            >
              <item.icon className="text-3xl text-accent-purple mx-auto mb-3" />
              <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="text-neutral-200 hover:text-accent-cyan transition-colors text-sm font-medium">
                  {item.value}
                </a>
              ) : (
                <p className="text-neutral-200 text-sm font-medium">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl text-center space-y-6"
        >
          <p className="text-neutral-300">
            Prefer email? Click below to copy my address or send a message directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={copyEmail} className="btn-primary flex items-center gap-2">
              {copied ? <FaCheck /> : <FaCopy />}
              {copied ? "Copied!" : "Copy Email"}
            </button>
            <a href={`mailto:${CONTACT.email}`} className="btn-outline flex items-center gap-2">
              <FaEnvelope /> Send Email
            </a>
          </div>

          <div className="flex justify-center gap-6 pt-4 text-2xl">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer"
               className="text-neutral-400 hover:text-accent-cyan transition-all duration-300 hover:scale-110">
              <FaLinkedin />
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer"
               className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110">
              <FaGithub />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
               className="text-neutral-400 hover:text-accent-pink transition-all duration-300 hover:scale-110">
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-white/5"
        >
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Nagandhra Prasad Pasupathy. Built with React & Three.js.
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
