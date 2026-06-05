import { motion } from 'framer-motion';

const SectionHeader = ({ label, title, subtitle }) => (
  <motion.header
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.45 }}
    className="mb-10"
  >
    {label && <p className="section-label">{label}</p>}
    <h2 className="section-title">{title}</h2>
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
  </motion.header>
);

export default SectionHeader;
