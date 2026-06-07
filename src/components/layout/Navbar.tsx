import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";

interface NavbarProps {
  name: string;
}

export function Navbar({ name }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-edge-margin-desktop glass-nav transition-all duration-500 ${
        isScrolled ? "py-4 shadow-2xl" : "py-8"
      }`}
    >
      <div className="font-headline-md text-xl md:text-headline-md font-bold tracking-tighter text-on-surface interactive-element select-none">
        {name}
      </div>
      <div className="hidden md:flex gap-12">
        <a
          className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 interactive-element"
          href="#proyectos"
          onClick={(e) => handleLinkClick(e, "#proyectos")}
        >
          {t('nav.projects')}
        </a>
        <a
          className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 interactive-element"
          href="#sobre-mi"
          onClick={(e) => handleLinkClick(e, "#sobre-mi")}
        >
          {t('nav.about')}
        </a>
        <a
          className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 interactive-element"
          href="#experiencia"
          onClick={(e) => handleLinkClick(e, "#experiencia")}
        >
          {t('nav.experience')}
        </a>
        <a
          className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300 interactive-element"
          href="#contacto"
          onClick={(e) => handleLinkClick(e, "#contacto")}
        >
          {t('nav.contact')}
        </a>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden sm:block text-on-surface-variant font-label-caps text-xs md:text-label-caps opacity-50 select-none">
          Creative Art Director
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
