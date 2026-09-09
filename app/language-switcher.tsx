'use client';

import type { Language } from './i18n';
import { siteCopy } from './i18n';

const options = [
  { value: 'ru', shortLabel: 'РУ' },
  { value: 'en', shortLabel: 'ENG' },
] as const;

export function LanguageSwitcher({
  language,
  onChange,
}: {
  language: Language;
  onChange: (language: Language) => void;
}) {
  const labels = siteCopy[language].language;

  return (
    <fieldset className="language-switcher" data-language={language}>
      <legend className="sr-only">{labels.legend}</legend>
      <span className="language-slider" aria-hidden="true" />
      {options.map((option) => {
        const label = option.value === 'ru' ? labels.russian : labels.english;

        return (
          <label className="language-choice" title={label} key={option.value}>
            <input
              type="radio"
              name="site-language"
              value={option.value}
              checked={language === option.value}
              onChange={() => onChange(option.value)}
              aria-label={label}
            />
            <span>{option.shortLabel}</span>
          </label>
        );
      })}
    </fieldset>
  );
}
