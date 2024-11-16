'use client';

import { useLocale } from 'next-intl';
import { FC } from 'react';
import { localesMap } from '@/core/i18n/config';
import { setLocale } from '@/core/i18n/locale';
import { Locale } from '@/core/i18n/types';

export const LocaleSwitcher: FC = () => {
  const locale = useLocale();

  const onChange = (value: string) => {
    const locale = value as Locale;
    setLocale(locale);
  };

  return (
    <div className="relative">
      <select 
        value={locale} 
        onChange={({ target }) => onChange(target.value)}
        className="appearance-none bg-[var(--tg-theme-secondary-bg-color)] 
          text-[var(--tg-theme-text-color)] rounded-lg px-4 py-2 pr-8
          text-sm font-medium border border-[var(--tg-theme-hint-color)]
          focus:outline-none focus:ring-2 focus:ring-[var(--tg-theme-button-color)]
          focus:border-transparent transition-all duration-200 ease-in-out
          hover:border-[var(--tg-theme-button-color)]"
      >
        {localesMap.map((locale) => (
          <option 
            key={locale.key} 
            value={locale.key}
            className="bg-[var(--tg-theme-bg-color)] text-[var(--tg-theme-text-color)] py-2"
          >
            {locale.title}
          </option>
        ))}
      </select>
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg className="w-4 h-4 text-[var(--tg-theme-hint-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};
