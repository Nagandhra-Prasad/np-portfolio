import { WORK_PROJECTS, PERSONAL_PROJECTS, getSectionNum } from "../constants";
import { motion } from "framer-motion";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import TiltCard from "./TiltCard";

const ALL_PROJECTS = [
  ...WORK_PROJECTS.map((p) => ({ ...p, featured: true })),
  ...PERSONAL_PROJECTS.map((p) => ({ ...p, featured: false })),
];

const ProjectRow = ({ project, index }) => {
  const reversed = index % 2 !== 0;
  const hasLink = project.link && project.link !== '#';
  const initial = project.title.charAt(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`grid lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-20 last:mb-0 ${
        reversed ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div className={`lg:col-span-7 ${reversed ? 'lg:col-start-6' : ''}`}>
        <p className="font-mono text-xs text-green mb-2">
          {project.featured ? 'Featured Project' : 'Project'}
        </p>
        <h3 className="text-2xl font-bold text-heading mb-4 hover:text-green transition-colors">
          {hasLink ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 group">
              {project.title}
              <HiArrowTopRightOnSquare className="text-green opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
            </a>
          ) : project.title}
        </h3>
        <div className="exp-card mb-4">
          <p className="text-slate text-sm leading-relaxed">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
      </div>

      <div className={`lg:col-span-5 ${reversed ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
        <TiltCard maxTilt={8}>
          <a
            href={hasLink ? project.link : '#projects'}
            target={hasLink ? '_blank' : undefined}
            rel={hasLink ? 'noopener noreferrer' : undefined}
            className="block project-box aspect-video project-box-3d"
          >
            <div className="project-overlay" />
            <div className="project-box-inner">{initial}</div>
            <div className="project-shine" />
          </a>
        </TiltCard>
      </div>
    </motion.div>
  );
};

const Projects = () => (
  <section id="projects" className="py-24 lg:py-32">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section-heading"
    >
      <span><span className="section-num">{getSectionNum('projects')}.</span> Some Things I've Built</span>
    </motion.h2>

    <div>
      {ALL_PROJECTS.map((project, i) => (
        <ProjectRow key={project.title} project={project} index={i} />
      ))}
    </div>
  </section>
);

export default Projects;
