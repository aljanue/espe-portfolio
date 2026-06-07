import type { Project } from "../../data/portfolio";
import { ProjectCard } from "../ui/ProjectCard";
import { AnimatedSection } from "../ui/AnimatedSection";
import { useTranslation } from "react-i18next";

interface ProjectsProps {
  projects: Project[];
  onProjectSelect?: (project: Project) => void;
}

export function Projects({ projects, onProjectSelect }: ProjectsProps) {
  const { t } = useTranslation();

  return (
    <section className="px-4 md:px-edge-margin-desktop py-section-padding" id="proyectos">
      <AnimatedSection tag="div" className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <h2 className="font-display-xl text-5xl md:text-display-xl leading-none">
          {t('sections.projects.title')}
        </h2>
        <span className="font-label-caps text-label-caps text-on-surface-variant mb-4">
          {t('sections.projects.subtitle')}
        </span>
      </AnimatedSection>

      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-16" 
        id="project-grid"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={onProjectSelect} />
        ))}
      </div>
    </section>
  );
}
