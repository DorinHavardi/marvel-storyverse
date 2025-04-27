'use client';
import { useEffect, useState } from 'react';
import i18n from '@/i18n';

export const useLocales = () => {
  const [dir, setDir] = useState<'rtl' | 'ltr'>('ltr');
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const currentLang = i18n.language || 'en';
    const direction = currentLang === 'he' ? 'rtl' : 'ltr';

    setDir(direction);
    setLang(currentLang);

    const handleLanguageChanged = (lng: string) => {
      const newDirection = lng === 'he' ? 'rtl' : 'ltr';
      setDir(newDirection);
      setLang(lng);
    };

    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  return { dir, lang };
};
