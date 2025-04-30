import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/sanity/fetcher';
import { getMoviesQuery } from '@/sanity/queries/movies.query';
import { MovieType } from '@/types/movies.types';

export const useMovies = () => {
  return useQuery<MovieType[]>({
    queryKey: ['movies'],
    queryFn: () => fetcher<MovieType[]>(getMoviesQuery),
  });
};
