import { RotatingBadge } from "../ui/RotatingBadge";
import { BackgroundAsterisk } from "../ui/BackgroundAsterisk";
import { AnimatedSection } from "../ui/AnimatedSection";

interface HeroProps {
  name: string;
  subheadline: string;
}

export function Hero({ name, subheadline }: HeroProps) {
  const handleBadgeClick = () => {
    const target = document.querySelector("#contacto");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative min-h-screen flex sm:items-end items-start px-4 md:px-edge-margin-desktop pb-32 pt-32 overflow-hidden select-none">
      {/* Background Asterisk Decoration */}
      <BackgroundAsterisk className="top-0 sm:-top-[5rem] md:-top-[10rem] sm:-left-[50%] -left-[0%] w-[200%] sm:w-[120%] aspect-square sm:opacity-50 opacity-30" />

      <AnimatedSection tag="div" className="z-10 w-full flex flex-col md:items-end md:text-right sm:mt-auto mt-20">
        <h1 className="font-display-xl text-5xl md:text-display-xl tracking-tighter leading-none mb-4 md:mb-0">
          {name}<span className="text-gradient ml-1 inline-block font-sans origin-left">®</span>
        </h1>
        <p className="font-headline-md text-2xl md:text-headline-md mt-6 text-on-surface-variant max-w-3xl md:ml-auto leading-tight">
          {subheadline}
        </p>
      </AnimatedSection>

      {/* Rotating Badge component */}
      <AnimatedSection 
        tag="div"
        className="absolute bottom-12 left-6 md:left-auto md:right-edge-margin-desktop md:top-1/4 md:bottom-auto z-20" 
        style={{ transitionDelay: "300ms" }}
      >
        <RotatingBadge onClick={handleBadgeClick} />
      </AnimatedSection>
    </header>
  );
}
