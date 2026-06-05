import { STATS, CONTACT, RESUME, PAGE_SECTIONS } from '../constants';
import { HiDownload } from 'react-icons/hi';
import { useSectionScrollProgress } from '../hooks/useSectionScrollProgress';

const TOP_SKILLS = ['Angular', 'Python', 'TypeScript', 'FastAPI', 'MongoDB', 'LLM / AI'];

const RightPanel = ({ activeSection }) => {
  const sectionProgress = useSectionScrollProgress(activeSection);
  const activeLabel = PAGE_SECTIONS.find((s) => s.id === activeSection)?.label || 'Portfolio';
  const percent = Math.round(sectionProgress * 100);

  return (
    <aside className="hidden xl:flex flex-col gap-5 w-[280px] shrink-0 sticky top-0 h-screen py-12 pr-8 pl-4 justify-center">
      <div className="right-panel-card">
        <div className="flex items-center gap-2 mb-3">
          <span className="status-dot" />
          <span className="font-mono text-xs text-green">Open to opportunities</span>
        </div>
        <p className="text-xs text-slate leading-relaxed">
          Based in {CONTACT.address.split(',')[0]}, India. Building AI-driven web apps.
        </p>
      </div>

      <div className="right-panel-card">
        <div className="flex items-center justify-between mb-3">
          <p className="font-mono text-[0.65rem] uppercase tracking-wider text-slate">Currently viewing</p>
          <span className="font-mono text-[0.65rem] text-accent">{percent}%</span>
        </div>
        <p className="text-heading font-semibold text-sm">{activeLabel}</p>
        <div className="mt-3 h-1.5 rounded-full bg-[var(--navy-lighter)] overflow-hidden">
          <div
            className="h-full bg-accent rounded-full will-change-[width]"
            style={{
              width: `${percent}%`,
              transition: 'width 0.15s ease-out',
            }}
          />
        </div>
        <p className="font-mono text-[0.6rem] text-slate mt-2">Section scroll progress</p>
      </div>

      <div className="right-panel-card">
        <p className="font-mono text-[0.65rem] uppercase tracking-wider text-slate mb-3">At a glance</p>
        <div className="space-y-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex justify-between items-baseline">
              <span className="text-xs text-slate">{stat.label}</span>
              <span className="font-mono text-sm font-semibold text-accent">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="right-panel-card">
        <p className="font-mono text-[0.65rem] uppercase tracking-wider text-slate mb-3">Core stack</p>
        <div className="flex flex-wrap gap-1.5">
          {TOP_SKILLS.map((skill) => (
            <span key={skill} className="tag">{skill}</span>
          ))}
        </div>
      </div>

      <a
        href={RESUME.url}
        download={RESUME.fileName}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline text-center flex items-center justify-center gap-2"
      >
        <HiDownload size={14} />
        Download Resume
      </a>
    </aside>
  );
};

export default RightPanel;
