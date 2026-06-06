import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <AnimatedSection tag="div" className="group stagger-item select-none cursor-pointer">
      {/* Image container */}
      <div className="overflow-hidden mb-6 aspect-[4/5] relative">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
        />
        {/* Overlay hover description */}
        <div className="absolute inset-0 project-card-overlay flex flex-col justify-end p-8">
          <p className="font-body-md text-white/90 leading-relaxed mb-4 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {project.description}
          </p>
        </div>
      </div>

      {/* Info footer */}
      <div className="flex justify-between items-start interactive-element mt-6">
        <div className="pr-4">
          <h3 className="font-headline-md text-2xl md:text-headline-md leading-none">
            {project.title}
          </h3>
          <p className="font-label-caps text-label-caps text-on-surface-variant/50 mt-4">
            {project.category}
          </p>
        </div>
        <ArrowUpRight className="text-primary group-hover:rotate-45 transition-transform duration-300 w-6 h-6 flex-shrink-0" />
      </div>
    </AnimatedSection>
  );
}
