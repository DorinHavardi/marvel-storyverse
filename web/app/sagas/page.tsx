'use client';

import { ErrorNotice } from '@/components/ErrorNotice/ErrorNotice.cmp';
import { SagaCard } from '@/components/SagaCard/SagaCard.cmp';
import { useSagas } from '@/hooks/useSagas.hook';
import { useTranslation } from 'react-i18next';

export default function SagasPage() {
  const { t } = useTranslation();
  const { data: sagas, isLoading, error } = useSagas();

  // if (isLoading) return <div className="p-10 text-center">{t('loading')}</div>;
  if (error) return <ErrorNotice />;

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {sagas?.map(saga => <SagaCard key={saga?._id} saga={saga} />)}
    </div>
  );
}
