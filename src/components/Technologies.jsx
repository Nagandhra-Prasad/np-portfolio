import { motion } from "framer-motion";
import { SKILLS, getSectionNum } from "../constants";

const categories = ["Frontend", "Backend", "Database", "AI & Tools"];

const Technologies = () => (
  <section id="skills" className="py-24 lg:py-32">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section-heading"
    >
      <span><span className="section-num">{getSectionNum('skills')}.</span> Skills</span>
    </motion.h2>

    <div className="grid sm:grid-cols-2 gap-8">
      {categories.map((category) => (
        <div key={category}>
          <h3 className="font-mono text-sm text-green mb-4">{category}</h3>
          <ul>
            {SKILLS.filter((s) => s.category === category).map((skill) => (
              <li key={skill.name} className="skill-item">{skill.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Technologies;
