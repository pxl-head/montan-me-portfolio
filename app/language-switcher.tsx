import type { Language } from './i18n';
import { siteCopy } from './i18n';
import { assetPath } from './asset-path';

const options = [
  { value: 'ru', shortLabel: 'РУ' },
  { value: 'en', shortLabel: 'ENG' },
] as const;

export function LanguageSwitcher({ language }: { language: Language }) {
  const labels = siteCopy[language].language;

  return (
    <nav
      className="language-switcher"
      data-language={language}
      aria-label={labels.legend}
    >
      <span className="language-slider" aria-hidden="true" />
      {options.map((option) => {
        const label = option.value === 'ru' ? labels.russian : labels.english;

        return (
          <a
            className="language-choice"
            href={assetPath(option.value === 'ru' ? '/' : '/en/')}
            hrefLang={option.value}
            lang={option.value}
            aria-label={label}
            aria-current={language === option.value ? 'page' : undefined}
            title={label}
            key={option.value}
          >
            <span>{option.shortLabel}</span>
          </a>
        );
      })}
    </nav>
  );
}
