import React, { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = availableLanguages.find(
    (lang) => lang.code === currentLanguage
  );

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-surface/80 dark:bg-surface-dark-muted/80 backdrop-blur-sm rounded-lg border border-border/50 dark:border-border-dark/50 hover:shadow-lg transition-all duration-200 hover:border-brand-500 dark:hover:border-brand-500"
      >
        <svg
          className="w-4 h-4 text-foreground-subtle"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>

        <span className="text-sm font-medium text-foreground-muted dark:text-foreground-dark-muted">
          {currentLang?.name}
        </span>
        <svg
          className={`w-4 h-4 text-foreground-subtle transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-surface dark:bg-surface-dark-muted rounded-lg shadow-xl border border-border dark:border-border-dark overflow-hidden z-50">
          {availableLanguages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-surface-muted dark:hover:bg-surface-dark-muted/70 transition-colors duration-200 ${
                currentLanguage === lang.code
                  ? "bg-brand-50 dark:bg-brand-950/20"
                  : ""
              }`}
            >
              <span className="text-sm font-medium text-foreground-muted dark:text-foreground-dark-muted">
                {lang.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
