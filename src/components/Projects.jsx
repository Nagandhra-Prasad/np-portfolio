import { WORK_PROJECTS, PERSONAL_PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass-hover tilt-card group"
  >
    <div className="p-6 space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-display font-bold heading-text group-hover:text-accent-cyan transition-colors">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-accent-purple text-xs font-medium mt-1">{project.subtitle}</p>
          )}
        </div>
        {project.link && project.link !== "#" && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-2 rounded-lg project-link-btn transition-colors shrink-0"
            aria-label={`View ${project.title}`}
          >
            <HiExternalLink className="heading-text text-lg" />
          </a>
        )}
      </div>
      <p className="body-text text-sm leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 pt-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectGrid = ({ projects, startIndex = 0 }) => (
  <div className="grid md:grid-cols-2 gap-8">
    {projects.map((project, index) => (
      <ProjectCard key={project.title} project={project} index={startIndex + index} />
    ))}
  </div>
);

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

      <ProjectGrid projects={WORK_PROJECTS} />

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-display font-bold gradient-text text-center mt-20 mb-12"
      >
        Personal Projects
      </motion.h3>

      <ProjectGrid projects={PERSONAL_PROJECTS} startIndex={WORK_PROJECTS.length} />
    </section>
  );
};

export default Projects;
