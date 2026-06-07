import type { ProjectSection } from "../../../data/portfolio";
import { AnimatedSection } from "../../ui/AnimatedSection";

interface HeroFullBleedLayoutProps {
  section: ProjectSection;
  accentColor?: string;
}

export function HeroFullBleedLayout({ section, accentColor }: HeroFullBleedLayoutProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      {section.backgroundImageUrl && (
        <div className="absolute inset-0">
          <img 
            src={section.backgroundImageUrl} 
            alt="Hero background" 
            className="w-full h-full object-cover parallax-image"
          />
        </div>
      )}
      
      {/* Color Overlay */}
      <div 
        className="absolute inset-0 project-overlay mix-blend-multiply"
        style={{ 
          backgroundColor: accentColor || '#131313',
          opacity: 0.6,
        }} 
      />

      {/* Content */}
      <AnimatedSection tag="div" className="relative z-10 px-4 md:px-edge-margin-desktop w-full text-center">
        {section.overlayText && (
          <h2 className="font-display-xl text-5xl md:text-[8rem] text-white leading-none tracking-tighter mix-blend-overlay opacity-90">
            {section.overlayText}
          </h2>
        )}
      </AnimatedSection>
    </section>
  );
}
