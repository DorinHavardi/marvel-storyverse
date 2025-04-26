import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/sanity/fetcher';
import { Saga } from '@/types/sagas.types';
import { getSagasQuery } from '@/sanity/queries/sagas.query';

export const useSagas = () => {
  return useQuery<Saga[]>({
    queryKey: ['sagas'],
    queryFn: () => fetcher<Saga[]>(getSagasQuery),
  });
};
