import { useState, useEffect } from 'react';
import { PAGE_SECTIONS } from '../constants';

const SECTION_IDS = PAGE_SECTIONS.map((s) => s.id);

function getActiveSection() {
  const scrollY = window.scrollY;
  const trigger = scrollY + window.innerHeight * 0.3;

  let active = SECTION_IDS[0];

  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= trigger) {
      active = id;
    }
  }

  return active;
}

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const update = () => setActiveSection(getActiveSection());

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return activeSection;
}
