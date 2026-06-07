import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HistoryService } from '../../services/historyService';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!window.history.state || !window.history.state.lang) {
      HistoryService.replaceState({ lang: i18n.language });
    }

    const handlePopState = (e: PopStateEvent) => {
      if (e.state && e.state.lang && e.state.lang !== i18n.language) {
        i18n.changeLanguage(e.state.lang);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [i18n]);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'es' ? 'en' : 'es';
    HistoryService.pushState({ lang: nextLang });
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
