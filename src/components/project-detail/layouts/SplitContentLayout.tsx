import type { ProjectSection } from "../../../data/portfolio";
import { AnimatedSection } from "../../ui/AnimatedSection";

interface SplitContentLayoutProps {
  section: ProjectSection;
  accentColor?: string;
}

export function SplitContentLayout({ section, accentColor }: SplitContentLayoutProps) {
  const isImageLeft = section.imagePosition !== 'right';

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-surface">
      {/* Image Side */}
      <div className={`h-[50vh] md:h-screen relative overflow-hidden ${isImageLeft ? 'md:order-1' : 'md:order-2'}`}>
        {section.imageUrl && (
          <img 
            src={section.imageUrl} 
            alt={section.headline || "Project image"} 
            className="absolute inset-0 w-full h-full object-cover parallax-image"
          />
        )}
      </div>

      {/* Text Side */}
      <div 
        className={`flex items-center justify-center p-8 md:p-24 relative ${isImageLeft ? 'md:order-2' : 'md:order-1'}`}
        style={{
          background: accentColor ? `linear-gradient(to bottom, rgba(19,19,19,1) 0%, ${accentColor}15 100%)` : undefined
        }}
      >
        <AnimatedSection tag="div" className="max-w-xl">
          {section.headline && (
            <h3 className="font-display-xl text-5xl md:text-7xl leading-none mb-12">
              {section.headline}
            </h3>
          )}
          {section.description && (
            <div className="flex gap-6">
              <span className="font-headline-md text-2xl text-on-surface-variant flex-shrink-0 mt-1">—</span>
              <p className="font-body-lg text-lg md:text-xl text-on-surface-variant leading-relaxed">
                {section.description}
              </p>
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
