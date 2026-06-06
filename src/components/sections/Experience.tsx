import type { Experience as ExpType } from "../../data/portfolio";
import { ExperienceCard } from "../ui/ExperienceCard";
import { AnimatedSection } from "../ui/AnimatedSection";

interface ExperienceProps {
  experiences: ExpType[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <section className="px-4 md:px-edge-margin-desktop py-section-padding bg-surface-container overflow-hidden" id="experiencia">
      <div className="flex flex-col gap-16">
        <AnimatedSection tag="div" className="">
          <h2 className="font-display-xl text-5xl md:text-display-xl leading-none mb-4">
            Experiencia
          </h2>
          <p className="font-label-caps text-label-caps text-primary">(+Destacada)</p>
        </AnimatedSection>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-24 mt-12"
        >
          {experiences.map((exp, index) => {
            const isLast = index === experiences.length - 1;
            return (
              <ExperienceCard 
                key={exp.id} 
                exp={exp} 
                isLast={isLast} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
