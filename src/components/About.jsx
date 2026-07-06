import { motion } from "framer-motion";
import { ABOUT_TEXT, getSectionNum } from "../constants";

const About = () => (
  <section id="about" className="py-24 lg:py-32">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section-heading"
    >
      <span><span className="section-num">{getSectionNum('about')}.</span> About Me</span>
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-center"
    >
      <div className="space-y-4 text-slate leading-relaxed min-w-0">
        <p>{ABOUT_TEXT}</p>
        <p>Here are a few technologies I've been working with recently:</p>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-2 mt-4 font-mono text-sm text-slate-light">
          {['Angular', 'TypeScript', 'Python', 'FastAPI', 'MongoDB', 'LLM / AI'].map((tech) => (
            <li key={tech} className="skill-item">{tech}</li>
          ))}
        </ul>
      </div>

      <div className="about-visual mx-auto md:mx-0 md:ml-auto w-full max-w-[320px]">
        <div className="about-card-offset" aria-hidden="true" />
        <div className="about-card">
          <span className="about-monogram select-none" aria-hidden="true">
            <span className="about-monogram-n">N</span>
            <span className="about-monogram-p">P</span>
          </span>
        </div>
      </div>
    </motion.div>
  </section>
);

export default About;
