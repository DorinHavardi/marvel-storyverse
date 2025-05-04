import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/sanity/fetcher';
import { Character } from '@/types/characters.types';
import { getCharactersQuery } from '@/sanity/queries/characters.query';
import { queryConfig } from '@/config/query.config';

export const useCharacters = () => {
  return useQuery<Character[]>({
    queryKey: ['characters'],
    queryFn: () => fetcher<Character[]>(getCharactersQuery),
    ...queryConfig,
  });
};
