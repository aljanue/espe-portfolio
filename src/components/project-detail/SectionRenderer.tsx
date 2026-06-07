import type { ProjectSection } from "../../data/portfolio";
import { BrandIntroLayout } from "./layouts/BrandIntroLayout";
import { HeroFullBleedLayout } from "./layouts/HeroFullBleedLayout";
import { MediaShowcaseLayout } from "./layouts/MediaShowcaseLayout";
import { SplitContentLayout } from "./layouts/SplitContentLayout";

interface SectionRendererProps {
  section: ProjectSection;
  accentColor?: string;
}

export function SectionRenderer({ section, accentColor }: SectionRendererProps) {
  switch (section.type) {
    case 'brand-intro':
      return <BrandIntroLayout section={section} />;
    case 'hero-fullbleed':
      return <HeroFullBleedLayout section={section} accentColor={accentColor} />;
    case 'media-showcase':
      return <MediaShowcaseLayout section={section} />;
    case 'split-content':
      return <SplitContentLayout section={section} accentColor={accentColor} />;
    default:
      return null;
  }
}
