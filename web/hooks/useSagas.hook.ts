import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/sanity/fetcher';
import { SagaType } from '@/types/sagas.types';
import { getSagasQuery } from '@/sanity/queries/sagas.query';
import { queryConfig } from '@/config/query.config';

export const useSagas = () => {
  return useQuery<SagaType[]>({
    queryKey: ['sagas'],
    queryFn: () => fetcher<SagaType[]>(getSagasQuery),
    ...queryConfig,
  });
};
