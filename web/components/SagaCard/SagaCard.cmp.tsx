'use client';

import { useLocales } from '@/hooks/useLocales.hook';
import { SagaType } from '@/types/sagas.types';

interface SagaCardProps {
  saga: SagaType;
}

export const SagaCard = ({ saga }: SagaCardProps) => {
  const { lang } = useLocales();

  const { name, description, phases } = saga;

  return (
    <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition p-4 bg-white">
      <div className="mb-4">
        <h2 className="text-20 font-bold mb-2">{name?.[lang]}</h2>
        <p className="text-16">{description?.[lang]}</p>
      </div>
      {phases && phases.length > 0 && (
        <div>
          {phases.map(phase => (
            <div className="pb-4 mb-4 border-b border-black/50">
              <p className="text-18 font-semibold">{phase?.name}</p>
              <p className="text-16">{phase?.description?.[lang]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
