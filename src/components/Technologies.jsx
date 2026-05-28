import { motion } from "framer-motion";
import { SKILLS } from "../constants";
import { SiAngular, SiMongodb, SiMysql, SiSpringboot, SiPython, SiFastapi, SiTypescript, SiSass, SiDocker, SiGit, SiPostman, SiReactivex, SiOpenai } from "react-icons/si";
import { FaJava, FaHtml5 } from "react-icons/fa6";

const iconMap = {
  angular: SiAngular,
  typescript: SiTypescript,
  rxjs: SiReactivex,
  html: FaHtml5,
  sass: SiSass,
  java: FaJava,
  python: SiPython,
  springboot: SiSpringboot,
  fastapi: SiFastapi,
  mongodb: SiMongodb,
  mysql: SiMysql,
  ai: SiOpenai,
  docker: SiDocker,
  git: SiGit,
  postman: SiPostman,
};

const categories = ["Frontend", "Backend", "Database", "AI & Tools"];

const Technologies = () => {
  return (
    <section id="skills" className="py-24">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading"
      >
        Skills & Technologies
      </motion.h2>

      {categories.map((category, catIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          className="mb-12"
        >
          <h3 className="text-lg font-display font-semibold text-neutral-400 mb-6 text-center">
            {category}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {SKILLS.filter((s) => s.category === category).map((skill, index) => {
              const Icon = iconMap[skill.icon];
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-hover tilt-card p-6 flex flex-col items-center gap-3 cursor-default group"
                >
                  <Icon className={`text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-sm font-medium text-neutral-300">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Technologies;
