'use client';

import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">{t('common.loading')}</h1>
    </main>
  );
}
