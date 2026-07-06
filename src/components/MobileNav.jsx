import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PAGE_SECTIONS, getSectionNum } from '../constants';
import { HiMenuAlt3, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

const MobileNav = ({ activeSection }) => {
  const [open, setOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const scrollTo = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[var(--navy)]/95 backdrop-blur-md border-b border-[var(--navy-lighter)]">
      <div className="flex items-center justify-between px-5 py-4">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
          className="font-mono text-lg font-bold italic tracking-tight"
        >
          <span className="about-monogram-n">N</span>
          <span className="about-monogram-p">P</span>
        </a>
        <div className="flex items-center gap-3">
          <button type="button" onClick={toggleTheme} className="theme-btn" aria-label="Toggle theme">
            {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
          </button>
          <button type="button" onClick={() => setOpen(!open)} className="text-heading text-2xl" aria-label="Menu">
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[var(--navy-lighter)]"
          >
            <div className="px-5 py-4 flex flex-col gap-2">
              {PAGE_SECTIONS.map((link) => {
                const num = getSectionNum(link.id);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className={`sidebar-link ${activeSection === link.id ? 'sidebar-link-active' : ''}`}
                  >
                    {num && <span className="link-num">{num}.</span>}
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default MobileNav;
