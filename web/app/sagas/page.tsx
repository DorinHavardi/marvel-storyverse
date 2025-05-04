'use client';

import { ErrorNotice } from '@/components/ErrorNotice/ErrorNotice.cmp';
import PageLayout from '@/components/Layout/PageLayouts.cmp';
import Loader from '@/components/Loader/Loader.cmp';
import { SagaCard } from '@/components/SagaCard/SagaCard.cmp';
import { useSagas } from '@/hooks/useSagas.hook';
import { useCallback } from 'react';

export default function SagasPage() {
  const { data: sagas, isLoading, error } = useSagas();

  const bgImage = '/images/design/space/galaxy_2.jpg';
  const overlayColorClass = 'bg-blue-400/20';

  const renderContent = useCallback(() => {
    if (isLoading) return <Loader color="#60a5fa" />;
    if (error) return <ErrorNotice />;
    if (!sagas?.length)
      return <div className="text-center py-10">No sagas found.</div>;

    return (
      <div className="py-8 px-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sagas.map(saga => (
          <SagaCard key={saga?._id} saga={saga} />
        ))}
      </div>
    );
  }, [isLoading, error, sagas]);

  return (
    <PageLayout bgImage={bgImage} overlayColorClass={overlayColorClass}>
      {renderContent()}
    </PageLayout>
  );
}
