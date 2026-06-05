import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX, HiSun, HiMoon } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../constants";
import { useTheme } from "../context/ThemeContext";

const Navbar = ({ activeSection = 'home' }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 80 || y < lastY);
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <nav className="nav-pill max-w-3xl mx-auto px-4 py-2 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="font-display font-bold text-sm heading-text tracking-tight"
        >
          NP
        </a>

        <div className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.filter((l) => l.href !== '#home').map((link) => {
            const id = link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`nav-link ${activeSection === id ? 'nav-link-active' : ''}`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? <HiSun size={16} /> : <HiMoon size={16} />}
          </button>
          <button
            className="md:hidden theme-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <HiX size={16} /> : <HiMenuAlt3 size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="nav-pill max-w-3xl mx-auto mt-2 p-3 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="nav-link text-left"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
