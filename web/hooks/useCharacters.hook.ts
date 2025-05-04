import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/sanity/fetcher';
import { CharacterType } from '@/types/characters.types';
import { getCharactersQuery } from '@/sanity/queries/characters.query';
import { queryConfig } from '@/config/query.config';

export const useCharacters = () => {
  return useQuery<CharacterType[]>({
    queryKey: ['characters'],
    queryFn: () => fetcher<CharacterType[]>(getCharactersQuery),
    ...queryConfig,
  });
};
