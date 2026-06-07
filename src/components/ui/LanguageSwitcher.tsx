import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="overflow-hidden rounded-full bg-surface-container-highest border border-outline-variant hover:border-primary transition-colors duration-300 interactive-element flex items-center group"
      aria-label="Toggle language"
    >
      <div className={`px-3 py-1.5 text-xs font-label-caps tracking-wider transition-colors duration-300 ${i18n.language === 'es' ? 'text-white' : 'text-[#666] group-hover:text-[#999]'}`}>
        ES
      </div>
      <div className="w-[1px] h-4 bg-[#333]"></div>
      <div className={`px-3 py-1.5 text-xs font-label-caps tracking-wider transition-colors duration-300 ${i18n.language === 'en' ? 'text-white' : 'text-[#666] group-hover:text-[#999]'}`}>
        EN
      </div>
    </button>
  );
}
