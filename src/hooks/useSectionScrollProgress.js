import { useState, useEffect } from 'react';

function calcSectionProgress(sectionId) {
  const el = document.getElementById(sectionId);
  if (!el) return 0;

  const scrollY = window.scrollY;
  const viewport = window.innerHeight;
  const rect = el.getBoundingClientRect();
  const sectionHeight = rect.height;

  if (sectionHeight <= 0) return 0;

  // Document offset of section top
  const sectionTop = scrollY + rect.top;

  // 0% when section top reaches viewport top
  // 100% when section bottom reaches viewport bottom
  const scrollRange = sectionHeight - viewport;

  if (scrollRange <= 0) {
    // Section shorter than viewport — map visibility instead
    const visible = Math.min(viewport, sectionTop + sectionHeight - scrollY);
    return Math.min(1, Math.max(0, visible / sectionHeight));
  }

  const progress = (scrollY - sectionTop) / scrollRange;
  return Math.min(1, Math.max(0, progress));
}

export function useSectionScrollProgress(activeSection) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      setProgress(calcSectionProgress(activeSection));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [activeSection]);

  return progress;
}
