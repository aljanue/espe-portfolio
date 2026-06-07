import type { ProjectSection } from "../../../data/portfolio";
import { AnimatedSection } from "../../ui/AnimatedSection";

interface MediaShowcaseLayoutProps {
  section: ProjectSection;
}

export function MediaShowcaseLayout({ section }: MediaShowcaseLayoutProps) {
  const mediaCount = section.mediaItems?.length || 0;
  
  return (
    <section className="py-section-padding px-4 md:px-edge-margin-desktop bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        
        {/* Left side text if available */}
        {(section.headline || section.description) && (
          <AnimatedSection tag="div" className="lg:col-span-4 mb-16 lg:mb-0 lg:sticky lg:top-32">
            {section.headline && (
              <h3 className="font-headline-md text-3xl md:text-5xl leading-tight mb-8">
                {section.headline}
              </h3>
            )}
            {section.description && (
              <div className="flex gap-4">
                <span className="font-headline-md text-xl text-on-surface-variant flex-shrink-0 mt-1">—</span>
                <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
                  {section.description}
                </p>
              </div>
            )}
          </AnimatedSection>
        )}

        {/* Right side media grid */}
        <div className={`lg:col-span-8 ${!section.headline && !section.description ? 'lg:col-start-3' : ''}`}>
          <div className={`grid grid-cols-1 ${mediaCount > 1 ? 'md:grid-cols-2' : ''} gap-12`}>
            {section.mediaItems?.map((item, index) => (
              <AnimatedSection 
                tag="div" 
                key={index} 
                className={`relative group ${item.type === 'phone-mockup' ? 'px-8 md:px-16' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`overflow-hidden ${item.type === 'phone-mockup' ? 'phone-mockup aspect-[9/19.5]' : 'aspect-[4/5] md:aspect-square'} bg-surface-container-low`}>
                  <img 
                    src={item.imageUrl} 
                    alt={item.caption || "Project media"} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {item.caption && (
                  <p className="mt-6 font-label-caps text-sm text-on-surface-variant text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </p>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
