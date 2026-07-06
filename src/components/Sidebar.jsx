import { useState } from 'react';
import { PAGE_SECTIONS, SOCIAL_LINKS, CONTACT, getSectionNum } from '../constants';
import { FaGithub, FaLinkedin, FaInstagram, FaCopy, FaCheck } from 'react-icons/fa6';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import msportLogo from '../assets/msport-logo.png';
const SIDEBAR_LINKS = PAGE_SECTIONS.filter((s) => s.id !== 'home');

const Sidebar = ({ activeSection }) => {
  const { isDark, toggleTheme } = useTheme();
  const [copied, setCopied] = useState(false);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside className="hidden lg:flex flex-col justify-between fixed top-0 left-0 w-[320px] h-screen px-8 py-10 border-r border-[var(--navy-lighter)] bg-[var(--navy)]/90 backdrop-blur-md z-40">
      <div>
        <div className="m-sport-sidebar-badge mb-5">
          <img
            src={msportLogo}
            alt="M Sport"
            className="m-sport-sidebar-logo"
            width={150}
            height={51}
            draggable={false}
          />
        </div>
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
          className="font-mono text-2xl font-bold tracking-tight italic"
        >
          <span className="about-monogram-n">N</span>
          <span className="about-monogram-p">P</span>
        </a>
        <p className="mt-2 text-sm text-slate font-medium">Nagandhra Prasad</p>
        <p className="text-xs text-slate mt-0.5">Software Developer</p>

        <nav className="mt-14 space-y-1">
          {SIDEBAR_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={`sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}
              >
                <span className="link-num">{getSectionNum(link.id)}.</span>
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>

      <div className="space-y-5">
        <div className="sidebar-email-box">
          <p className="sidebar-email-label">Email me at</p>
          <a href={`mailto:${CONTACT.email}`} className="sidebar-email-link">
            {CONTACT.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="mt-3 flex items-center gap-1.5 font-mono text-[0.65rem] text-slate hover:text-accent transition-colors"
          >
            {copied ? <FaCheck className="text-accent" /> : <FaCopy />}
            {copied ? 'Copied!' : 'Copy address'}
          </button>
        </div>

        <div className="flex items-center gap-3 text-base">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
            <FaInstagram />
          </a>
          <button type="button" onClick={toggleTheme} className="theme-btn ml-auto" aria-label="Toggle theme">
            {isDark ? <HiSun size={16} /> : <HiMoon size={16} />}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
