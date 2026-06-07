import { useEffect, useState } from "react";
import type { Project } from "../../data/portfolio";
import { ProjectDetailHeader } from "./ProjectDetailHeader";
import { ProjectFooterBar } from "./ProjectFooterBar";
import { SectionRenderer } from "./SectionRenderer";
import { AnimatedSection } from "../ui/AnimatedSection";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Pequeño delay para asegurar que la animación de entrada se vea
    requestAnimationFrame(() => {
      setMounted(true);
    });

    // Bloquear scroll del body
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    setMounted(false);
    setTimeout(onClose, 600); // Esperar a que termine la animación
  };

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-surface overflow-y-auto project-detail-enter ${mounted ? 'project-detail-active' : ''}`}
    >
      <ProjectDetailHeader project={project} onClose={handleClose} />
      
      <main className="min-h-screen pb-20"> {/* pb-20 para espacio del footer bar */}
        {project.sections && project.sections.length > 0 ? (
          project.sections.map((section, index) => (
            <SectionRenderer key={index} section={section} accentColor={project.accentColor} />
          ))
        ) : (
          <div className="min-h-screen flex items-center justify-center">
            <AnimatedSection tag="div" className="text-center max-w-2xl px-4">
              <h2 className="font-display-xl text-5xl md:text-7xl mb-8">{project.title}</h2>
              <p className="font-body-lg text-xl text-on-surface-variant leading-relaxed">
                {project.description}
              </p>
            </AnimatedSection>
          </div>
        )}
      </main>

      <ProjectFooterBar project={project} />
    </div>
  );
}
