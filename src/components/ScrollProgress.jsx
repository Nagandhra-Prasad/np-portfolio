import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-[var(--divider)]">
      <motion.div
        className="h-full w-full origin-left bg-gradient-to-r from-accent to-accent-secondary"
        style={{ scaleX: progress }}
      />
    </div>
  );
};

export default ScrollProgress;
