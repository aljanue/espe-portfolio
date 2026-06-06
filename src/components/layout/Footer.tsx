import { AnimatedSection } from "../ui/AnimatedSection";
import { AsteriskIcon } from "../ui/AsteriskIcon";

interface FooterProps {
  email: string;
  phone: string;
  socials: { label: string; url: string }[];
}

export function Footer({ email, phone, socials }: FooterProps) {
  return (
    <footer 
      className="w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-edge-margin-desktop py-section-padding border-t border-outline-variant bg-surface overflow-hidden relative" 
      id="contacto"
    >
      <AnimatedSection tag="div" className="z-10 flex flex-col gap-12 max-w-2xl">
        <h2 className="font-display-xl text-5xl md:text-display-xl tracking-tight">Hablemos.</h2>
        <div className="flex flex-col gap-4">
          <a 
            className="font-headline-md text-xl md:text-headline-md hover:text-primary transition-colors interactive-element" 
            href={`mailto:${email}`}
          >
            {email}
          </a>
          <a 
            className="font-headline-md text-xl md:text-headline-md hover:text-primary transition-colors interactive-element" 
            href={`tel:${phone.replace(/\s+/g, "")}`}
          >
            {phone}
          </a>
        </div>
        <div className="flex gap-8 mt-4">
          {socials.map((social, index) => (
            <a 
              key={index}
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors interactive-element" 
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
      </AnimatedSection>
      
      <AnimatedSection 
        tag="div" 
        className="z-10 mt-24 md:mt-0 flex flex-col items-center md:items-end gap-12" 
        style={{ transitionDelay: "200ms" }}
      >
        <div className="relative w-32 h-32 animate-rotate-very-slow footer-asterisk cursor-pointer">
          <AsteriskIcon className="w-full h-full text-gradient" />
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant opacity-50">
          © {new Date().getFullYear()} Espe Moragues — Creative Art Director
        </p>
      </AnimatedSection>

      {/* Background Ambient Element */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-asterisk opacity-10 blur-[120px]" />
    </footer>
  );
}
