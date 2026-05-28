import { motion } from "framer-motion";
import { EXPERIENCES, EDUCATION, ACHIEVEMENTS } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading"
      >
        Experience & Education
      </motion.h2>

      <div className="relative max-w-3xl mx-auto mb-16">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-purple via-accent-cyan to-accent-pink md:-translate-x-px" />

        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={exp.role + exp.company}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-start gap-8 mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-accent-purple border-4 border-dark-900 -translate-x-1/2 mt-6 z-10 shadow-lg shadow-accent-purple/50" />

            <div className={`ml-14 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
              <div className="glass-hover p-6 rounded-2xl tilt-card text-left">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-accent-purple/20 text-accent-purple mb-3">
                  {exp.year}
                </span>
                <h3 className="text-xl font-display font-bold text-white">{exp.role}</h3>
                <p className="text-accent-cyan text-sm font-medium mt-1">{exp.company}</p>
                <p className="text-neutral-400 text-sm mt-3 leading-relaxed">{exp.description}</p>
                {exp.highlights && (
                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((point) => (
                      <li key={point} className="text-neutral-400 text-xs leading-relaxed flex gap-2">
                        <span className="text-accent-cyan shrink-0">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {EDUCATION.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-start gap-8 mb-12 ${
              (EXPERIENCES.length + index) % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-accent-cyan border-4 border-dark-900 -translate-x-1/2 mt-6 z-10 shadow-lg shadow-accent-cyan/50" />

            <div className={`ml-14 md:ml-0 md:w-1/2 ${(EXPERIENCES.length + index) % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
              <div className="glass-hover p-6 rounded-2xl tilt-card text-left">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-accent-cyan/20 text-accent-cyan mb-3">
                  {edu.year}
                </span>
                <h3 className="text-xl font-display font-bold text-white">{edu.degree}</h3>
                <p className="text-accent-purple text-sm font-medium mt-1">{edu.institution}</p>
                <p className="text-neutral-400 text-sm mt-3">{edu.grade}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-display font-bold text-center text-white mb-8">
          Key <span className="gradient-text">Achievements</span>
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {ACHIEVEMENTS.map((achievement) => (
            <div key={achievement} className="glass p-4 rounded-xl flex gap-3 items-start">
              <span className="text-accent-purple text-lg shrink-0">★</span>
              <p className="text-neutral-300 text-sm leading-relaxed">{achievement}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
