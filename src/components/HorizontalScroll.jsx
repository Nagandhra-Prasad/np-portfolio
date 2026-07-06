import { useRef, useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const HorizontalScroll = ({ children, className = '', hint = 'Scroll horizontally' }) => {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, [children]);

  const scrollBy = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.75;
    el.scrollBy({ left: direction * amount, behavior: 'smooth' });
    setTimeout(updateArrows, 400);
  };

  return (
    <div className={`relative group/scroll ${className}`}>
      <p className="text-xs muted-text text-center mb-4 flex items-center justify-center gap-2">
        <span className="inline-block w-8 h-px bg-gradient-to-r from-transparent to-accent/50" />
        {hint}
        <span className="inline-block w-8 h-px bg-gradient-to-l from-transparent to-accent-secondary/50" />
      </p>

      {canScrollLeft && (
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 glass p-2 rounded-full opacity-0 group-hover/scroll:opacity-100 transition-opacity hidden md:flex items-center justify-center hover:scale-110"
          aria-label="Scroll left"
        >
          <HiChevronLeft className="text-xl heading-text" />
        </button>
      )}

      {canScrollRight && (
        <button
          type="button"
          onClick={() => scrollBy(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 glass p-2 rounded-full opacity-0 group-hover/scroll:opacity-100 transition-opacity hidden md:flex items-center justify-center hover:scale-110"
          aria-label="Scroll right"
        >
          <HiChevronRight className="text-xl heading-text" />
        </button>
      )}

      <div
        ref={trackRef}
        onScroll={updateArrows}
        className="horizontal-track flex gap-6 overflow-x-auto pb-4 px-1 snap-x snap-mandatory scroll-smooth"
      >
        {children}
      </div>
    </div>
  );
};

export const HorizontalCard = ({ children, className = '' }) => (
  <div className={`horizontal-card snap-center shrink-0 ${className}`}>{children}</div>
);

export default HorizontalScroll;
