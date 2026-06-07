import type { ProjectSection } from "../../../data/portfolio";
import { AnimatedSection } from "../../ui/AnimatedSection";

interface BrandIntroLayoutProps {
  section: ProjectSection;
}

export function BrandIntroLayout({ section }: BrandIntroLayoutProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-edge-margin-desktop py-section-padding bg-surface-container">
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        {/* Left side: Logo / Client Name */}
        <AnimatedSection tag="div" className="md:col-span-5 md:col-start-2 mb-12 md:mb-0">
          <h2 className="font-display-xl text-6xl md:text-[8rem] leading-none tracking-tighter">
            {section.logoText}
          </h2>
        </AnimatedSection>
        
        {/* Right side: Description with dash */}
        <AnimatedSection tag="div" className="md:col-span-4 md:col-start-8 flex gap-6" style={{ transitionDelay: '200ms' }}>
          <span className="font-headline-md text-2xl text-on-surface-variant flex-shrink-0 mt-1">—</span>
          <p className="font-body-lg text-lg md:text-xl text-on-surface-variant leading-relaxed text-justify">
            {section.description}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
