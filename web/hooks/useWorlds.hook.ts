import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/sanity/fetcher';
import { WorldType } from '@/types/worlds.types';
import { getWorldById, getWorldsQuery } from '@/sanity/queries/worlds.query';

export const useWorlds = () =>
  useQuery<WorldType[]>({
    queryKey: ['worlds'],
    queryFn: () => fetcher<WorldType[]>(getWorldsQuery),
  });

export const useGetWorldByIdQuery = (id: string) =>
  useQuery<WorldType>({
    queryKey: ['world', id],
    queryFn: () => fetcher(getWorldById(id)),
    enabled: !!id,
  });
