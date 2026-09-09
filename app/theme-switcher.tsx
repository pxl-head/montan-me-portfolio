'use client';

import { useEffect, useState, type CSSProperties } from 'react';

import { siteCopy, type Language } from './i18n';

const themes = [
  { value: 'pink', color: '#FF0090' },
  { value: 'green', color: '#00FF01' },
  { value: 'purple', color: '#AD00FC' },
] as const;

type Theme = (typeof themes)[number]['value'];

function isTheme(value: string): value is Theme {
  return themes.some((theme) => theme.value === value);
}

export function ThemeSwitcher({ language }: { language: Language }) {
  const [theme, setTheme] = useState<Theme>('purple');
  const labels = siteCopy[language].theme;

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('montan-theme');
    if (!savedTheme || !isTheme(savedTheme)) return;

    document.documentElement.setAttribute('data-theme', savedTheme);
    const frame = window.requestAnimationFrame(() => setTheme(savedTheme));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const changeTheme = (value: string) => {
    if (!isTheme(value)) return;

    setTheme(value);
    document.documentElement.setAttribute('data-theme', value);
    window.localStorage.setItem('montan-theme', value);
  };

  return (
    <fieldset className="theme-switcher">
      <legend className="sr-only">{labels.legend}</legend>
      {themes.map((option) => {
        const label = labels[option.value];

        return (
          <label
            className="theme-choice"
            title={label}
            style={{ '--swatch': option.color } as CSSProperties}
            key={option.value}
          >
            <input
              type="radio"
              name="color-theme"
              value={option.value}
              checked={theme === option.value}
              onChange={() => changeTheme(option.value)}
              aria-label={label}
            />
          </label>
        );
      })}
    </fieldset>
  );
}
