import { ArrowLeft } from "lucide-react";
import type { Project } from "../../data/portfolio";
import { useTranslation } from "react-i18next";

interface ProjectDetailHeaderProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetailHeader({ project, onClose }: ProjectDetailHeaderProps) {
  const { t } = useTranslation();

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4 md:px-edge-margin-desktop py-8 flex justify-between items-start pointer-events-none">
      <button 
        onClick={onClose}
        className="pointer-events-auto flex items-center gap-2 group interactive-element"
      >
        <ArrowLeft className="w-6 h-6 text-on-surface group-hover:-translate-x-2 transition-transform duration-300" />
        <span className="font-label-caps text-label-caps text-on-surface">{t('actions.back')}</span>
      </button>

      <div className="pointer-events-auto text-right">
        <h1 className="font-display-xl text-3xl md:text-5xl leading-none">
          {project.title}
        </h1>
        <p className="font-label-caps text-label-caps text-on-surface-variant mt-2">
          {project.category} {project.year ? `(${project.year})` : ''}
        </p>
      </div>
    </header>
  );
}
