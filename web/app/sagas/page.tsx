'use client';

import { ErrorNotice } from '@/components/ErrorNotice/ErrorNotice.cmp';
import PageLayout from '@/components/Layout/PageLayouts.cmp';
import { SagaCard } from '@/components/SagaCard/SagaCard.cmp';
import { useSagas } from '@/hooks/useSagas.hook';
import { useTranslation } from 'react-i18next';

export default function SagasPage() {
  const { t } = useTranslation();
  const { data: sagas, isLoading, error } = useSagas();

  const bgImage = '/images/design/space/galaxy_2.jpg';
  const overlayColorClass = 'bg-blue-400/20';

  if (isLoading) return <div className="p-10 text-center">{t('loading')}</div>;
  if (error) return <ErrorNotice />;

  return (
    <PageLayout bgImage={bgImage} overlayColorClass={overlayColorClass}>
      <div className="py-8 px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sagas?.map(saga => <SagaCard key={saga?._id} saga={saga} />)}
      </div>
    </PageLayout>
  );
}
