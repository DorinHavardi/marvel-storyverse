'use client';

import { WorldCard } from '@/components/WorldCard/WorldCard.cmp';
import { useWorlds } from '@/hooks/useWorlds.hook';
import { useTranslation } from 'react-i18next';

export default function WorldsPage() {
  const { t } = useTranslation();
  const { data: worlds, isLoading, error } = useWorlds();

  if (isLoading) return <div className="p-10 text-center">{t('loading')}</div>;
  if (error)
    return <div className="p-10 text-center text-red-500">{t('error')}</div>;

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {worlds?.map(world => <WorldCard key={world?._id} world={world} />)}
    </div>
  );
}
