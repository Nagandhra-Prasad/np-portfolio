import { motion } from "framer-motion";
import { EXPERIENCES, EDUCATION, ACHIEVEMENTS, getSectionNum } from "../constants";

const Experience = () => (
  <section id="experience" className="py-24 lg:py-32">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section-heading"
    >
      <span><span className="section-num">{getSectionNum('experience')}.</span> Experience</span>
    </motion.h2>

    <div className="space-y-6">
      {EXPERIENCES.map((exp, i) => (
        <motion.div
          key={exp.role}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="exp-card"
        >
          <div className="flex flex-wrap justify-between gap-2 mb-3">
            <div>
              <h3 className="text-lg font-semibold text-heading">{exp.role}</h3>
              <p className="text-green text-sm font-mono mt-1">{exp.company}</p>
            </div>
            <span className="font-mono text-xs text-slate bg-[var(--accent-tint)] px-3 py-1 rounded-full h-fit">
              {exp.year}
            </span>
          </div>
          <p className="text-slate text-sm leading-relaxed mb-4">{exp.description}</p>
          {exp.highlights && (
            <ul className="space-y-2 mb-4">
              {exp.highlights.map((point) => (
                <li key={point} className="skill-item text-sm">{point}</li>
              ))}
            </ul>
          )}
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    <h3 className="font-mono text-sm text-green mt-12 mb-6">Education</h3>
    <div className="space-y-4">
      {EDUCATION.map((edu) => (
        <div key={edu.degree} className="flex flex-wrap justify-between gap-2 border-l-2 border-accent pl-4">
          <div>
            <p className="text-heading font-medium">{edu.degree}</p>
            <p className="text-slate text-sm">{edu.institution}</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-xs text-slate">{edu.year}</p>
            <p className="text-sm text-green">{edu.grade}</p>
          </div>
        </div>
      ))}
    </div>

    <h3 className="font-mono text-sm text-green mt-12 mb-6">Highlights</h3>
    <ul className="grid sm:grid-cols-2 gap-3">
      {ACHIEVEMENTS.map((item) => (
        <li key={item} className="skill-item text-sm">{item}</li>
      ))}
    </ul>
  </section>
);

export default Experience;
