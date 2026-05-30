import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { HiMenuAlt3, HiX, HiDownload, HiSun, HiMoon } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SOCIAL_LINKS, RESUME } from "../constants";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

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
        scrolled ? 'glass py-3 mx-4 mt-4 rounded-2xl' : 'py-4 backdrop-blur-sm nav-shell'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" onClick={() => handleNavClick('#home')} className="flex items-center gap-2 shrink-0">
          <span className="font-display text-2xl md:text-3xl font-bold gradient-text tracking-widest">NP</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
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
          <a
            href={RESUME.url}
            download={RESUME.fileName}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            <HiDownload />
            Resume
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3 text-xl">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleTheme();
            }}
            className="theme-toggle relative z-[60] cursor-pointer"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <HiSun className="text-lg" /> : <HiMoon className="text-lg" />}
          </button>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="icon-muted">
            <FaLinkedin />
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="social-icon social-icon-pink">
            <FaInstagram />
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleTheme();
            }}
            className="theme-toggle relative z-[60] cursor-pointer"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <HiSun className="text-lg" /> : <HiMoon className="text-lg" />}
          </button>
          <button
            className="text-2xl heading-text"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
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
                  className="subtle-text link-hover py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={RESUME.url}
                download={RESUME.fileName}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 accent-purple-text hover:text-accent-cyan py-2 transition-colors font-semibold"
              >
                <HiDownload />
                {RESUME.label}
              </a>
              <div className="flex gap-4 pt-2 text-xl divider-border border-t">
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="icon-muted"><FaLinkedin /></a>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="social-icon social-icon-pink"><FaInstagram /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
