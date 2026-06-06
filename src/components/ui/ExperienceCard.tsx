import type { Experience } from "../../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";

interface ExperienceCardProps {
  exp: Experience;
  isLast?: boolean;
}

export function ExperienceCard({ exp, isLast = false }: ExperienceCardProps) {
  return (
    <AnimatedSection
      tag="div"
      className={`flex flex-col md:flex-row gap-8 items-start ${
        isLast ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""
      }`}
    >
      {/* Brand typographic logo */}
      <div
        className={`font-bold tracking-tighter text-on-surface-variant/40 leading-none w-full md:w-1/3 select-none ${
          exp.logoText === "kids."
            ? "text-[60px] md:text-[80px] italic"
            : exp.logoText === "&"
            ? "text-[80px] md:text-[100px]"
            : "font-light tracking-[0.1em] text-lg md:text-xl uppercase"
        }`}
      >
        {exp.logoText}
      </div>

      {/* Role and description */}
      <div className="w-full md:w-2/3">
        <h4 className="font-headline-md text-xl md:text-headline-md uppercase">
          {exp.company}
        </h4>
        <p className="font-body-md text-body-md text-primary font-bold mt-2">
          {exp.role} * {exp.period}
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant mt-4 leading-relaxed">
          {exp.description}
        </p>
      </div>
    </AnimatedSection>
  );
}
