'use client';

import { ErrorNotice, Loader, PageLayout, SagaCard } from '@/components';
import { SAGAS_BG_IMAGE } from '@/constants/images.const';
import { useSagas } from '@/hooks/useSagas.hook';
import { useCallback } from 'react';

export default function SagasPage() {
  const { data: sagas, isLoading, error } = useSagas();

  const overlayColorClass = 'bg-blue-400/20';

  const renderContent = useCallback(() => {
    if (isLoading) return <Loader color="#60a5fa" />;
    if (error) return <ErrorNotice />;
    return (
      <div className="py-8 px-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sagas?.map(saga => <SagaCard key={saga?._id} saga={saga} />)}
      </div>
    );
  }, [isLoading, error, sagas]);

  return (
    <PageLayout bgImage={SAGAS_BG_IMAGE} overlayColorClass={overlayColorClass}>
      {renderContent()}
    </PageLayout>
  );
}
