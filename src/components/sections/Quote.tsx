import { AnimatedSection } from "../ui/AnimatedSection";

interface QuoteProps {
  text?: string;
  author?: string;
}

export function Quote({
  text = "“No es sólo lo que dices lo que mueve a la gente. Es la manera en la que lo dices”",
  author = "Marçal Moliné",
}: QuoteProps) {
  // Split the quote to highlight the second sentence
  const sentenceIndex = text.indexOf(". ");
  let firstPart = text;
  let secondPart = "";

  if (sentenceIndex !== -1) {
    firstPart = text.substring(0, sentenceIndex + 1);
    secondPart = text.substring(sentenceIndex + 2);
  }

  return (
    <AnimatedSection className="px-4 md:px-edge-margin-desktop py-section-padding bg-surface-container-lowest select-none">
      <blockquote className="max-w-6xl mx-auto">
        <p className="font-headline-lg text-4xl md:text-headline-lg leading-none tracking-tight">
          {firstPart}{" "}
          {secondPart && (
            <span className="text-on-surface-variant/50">{secondPart}</span>
          )}
        </p>
        <cite className="block mt-24 font-label-caps text-label-caps text-primary not-italic opacity-70 text-lg">
          — {author}
        </cite>
      </blockquote>
    </AnimatedSection>
  );
}
