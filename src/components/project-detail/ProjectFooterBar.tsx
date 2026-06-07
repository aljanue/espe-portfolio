import type { Project } from "../../data/portfolio";

interface ProjectFooterBarProps {
  project: Project;
}

export function ProjectFooterBar({ project }: ProjectFooterBarProps) {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 project-footer-bar px-4 md:px-edge-margin-desktop py-4 flex justify-between items-center select-none">
      <span className="font-label-caps text-sm text-on-surface-variant">Espe Moragues</span>
      <span className="font-label-caps text-sm text-on-surface font-bold">{project.title}</span>
      <span className="font-label-caps text-sm text-on-surface-variant">{project.year || new Date().getFullYear()}</span>
    </div>
  );
}
