import { AnimatedSection } from "../ui/AnimatedSection";
import { useTranslation } from "react-i18next";

interface AboutProps {
  avatarUrl?: string;
  bioParagraphs?: string[];
}

export function About({ avatarUrl, bioParagraphs }: AboutProps) {
  const { t } = useTranslation();

  // Opción A: si no hay párrafos de bio, no renderizar la sección About
  if (!bioParagraphs || bioParagraphs.length === 0) {
    return null;
  }

  return (
    <section 
      className="px-4 md:px-edge-margin-desktop py-section-padding grid grid-cols-1 md:grid-cols-12 gap-gutter items-center overflow-hidden" 
      id="sobre-mi"
    >
      {/* Opción B: si no hay avatarUrl, ocultar el bloque de imagen por completo */}
      {avatarUrl && (
        <AnimatedSection tag="div" className="md:col-span-5">
          <div className="relative group">
            <img 
              className="w-full aspect-[4/5] object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
              src={avatarUrl}
              alt="Espe Moragues"
            />
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-asterisk opacity-20 blur-3xl" />
          </div>
        </AnimatedSection>
      )}
      
      <AnimatedSection 
        className={`flex flex-col gap-8 mt-12 md:mt-0 ${
          avatarUrl 
            ? "md:col-span-6 md:col-start-7" 
            : "md:col-span-8 md:col-start-3"
        }`}
      >
        <h2 className="font-display-xl text-5xl md:text-display-xl leading-none">
          {t('sections.about.title')}
        </h2>
        <div className="space-y-6 opacity-80 font-body-lg text-lg md:text-body-lg text-on-surface-variant">
          {bioParagraphs.map((para, index) => {
            const isHighlight = index === bioParagraphs.length - 1;
            return (
              <p 
                key={index}
                className={isHighlight ? "font-headline-md text-2xl md:text-headline-md text-on-surface leading-tight mt-12" : ""}
              >
                {para}
              </p>
            );
          })}
        </div>
      </AnimatedSection>
    </section>
  );
}
