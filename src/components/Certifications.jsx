import { CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const Certifications = () => {
  return (
    <section id="certifications" className="py-24">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading"
      >
        Certifications
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="glass-hover p-6 rounded-2xl tilt-card"
          >
            <FaCertificate className="text-3xl text-accent-purple mb-4" />
            <span className="tag mb-3">{cert.type}</span>
            <h3 className="text-lg font-display font-bold text-white mt-3 leading-snug">
              {cert.title}
            </h3>
            <p className="text-accent-cyan text-sm font-medium mt-2">{cert.issuer}</p>
            <p className="text-neutral-500 text-xs mt-1">{cert.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
