import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/sanity/fetcher';
import { WorldType } from '@/types/worlds.types';
import {
  getWorldByIdQuery,
  getWorldsQuery,
} from '@/sanity/queries/worlds.query';
import { queryConfig } from '@/config/query.config';

export const useWorlds = () =>
  useQuery<WorldType[]>({
    queryKey: ['worlds'],
    queryFn: () => fetcher<WorldType[]>(getWorldsQuery),
    ...queryConfig,
  });

export const useGetWorldByIdQuery = (id: string) =>
  useQuery<WorldType>({
    queryKey: ['world', id],
    queryFn: () => fetcher(getWorldByIdQuery(id)),
    enabled: !!id,
    ...queryConfig,
  });
