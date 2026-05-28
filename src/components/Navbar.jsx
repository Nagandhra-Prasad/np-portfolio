import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SOCIAL_LINKS } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3 mx-4 mt-4 rounded-2xl' : 'py-4 bg-dark-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" onClick={() => handleNavClick('#home')} className="flex items-center gap-2 shrink-0">
          <span className="font-display text-2xl md:text-3xl font-bold gradient-text tracking-widest">NP</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4 text-xl">
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer"
             className="text-neutral-400 hover:text-accent-cyan transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer"
             className="text-neutral-400 hover:text-white transition-colors duration-300">
            <FaGithub />
          </a>
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
             className="text-neutral-400 hover:text-accent-pink transition-colors duration-300">
            <FaInstagram />
          </a>
        </div>

        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mx-4 mt-2 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-neutral-300 hover:text-white py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-4 pt-2 text-xl border-t border-white/10">
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-accent-cyan"><FaLinkedin /></a>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white"><FaGithub /></a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-accent-pink"><FaInstagram /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
