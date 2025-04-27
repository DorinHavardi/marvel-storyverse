'use client';

import { Saga } from '@/types/sagas.types';

interface SagaCardProps {
  saga: Saga;
}

export const SagaCard = ({ saga }: SagaCardProps) => {
  return (
    <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition p-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{saga?.name?.en}</h2>
      <p className="text-gray-600 text-sm">{saga?.description?.en}</p>
    </div>
  );
};
