import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/sanity/fetcher';
import { World } from '@/types/worlds.types';
import { getWorldsQuery } from '@/sanity/queries/worlds.query';

export const useWorlds = () => {
  return useQuery<World[]>({
    queryKey: ['worlds'],
    queryFn: () => fetcher<World[]>(getWorldsQuery),
  });
};
