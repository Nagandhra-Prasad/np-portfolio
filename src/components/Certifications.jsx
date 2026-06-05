import { motion } from "framer-motion";
import { CERTIFICATIONS, getSectionNum } from "../constants";

const Certifications = () => (
  <section id="certifications" className="py-24 lg:py-32">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section-heading"
    >
      <span><span className="section-num">{getSectionNum('certifications')}.</span> Certifications</span>
    </motion.h2>

    <div className="space-y-4">
      {CERTIFICATIONS.map((cert, i) => (
        <motion.div
          key={cert.title}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04 }}
          className="exp-card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
        >
          <div>
            <h3 className="text-heading font-medium">{cert.title}</h3>
            <p className="text-slate text-sm mt-1">{cert.issuer}</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="tag">{cert.type}</span>
            <span className="font-mono text-xs text-slate">{cert.date}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Certifications;
