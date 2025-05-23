'use client';

import { ErrorNotice, WorldCard } from '@/components';
import { useWorlds } from '@/hooks/useWorlds.hook';
import { useTranslation } from 'react-i18next';

export default function WorldsPage() {
  const { t } = useTranslation();
  const { data: worlds, isLoading, error } = useWorlds();
  if (isLoading) return <div className="p-10 text-center">{t('loading')}</div>;
  if (error) return <ErrorNotice />;

  return (
    <div className="p-8 pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {worlds?.map(world => <WorldCard key={world?._id} world={world} />)}
    </div>
  );
}
