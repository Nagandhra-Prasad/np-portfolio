import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-hover tilt-card overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-60" />
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={project.link} className="glass p-2 rounded-lg hover:bg-white/20 transition-colors">
                  <HiExternalLink className="text-white text-lg" />
                </a>
              </div>
            </div>

            <div className="p-6 space-y-3">
              <div>
                <h3 className="text-xl font-display font-bold text-white group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-accent-purple text-xs font-medium mt-1">{project.subtitle}</p>
                )}
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
