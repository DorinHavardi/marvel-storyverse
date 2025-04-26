import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/sanity/fetcher';
import { getMoviesQuery } from '@/sanity/queries/movies.query';
import { Movie } from '@/types/movies.types';

export const useMovies = () => {
  return useQuery<Movie[]>({
    queryKey: ['movies'],
    queryFn: () => fetcher<Movie[]>(getMoviesQuery),
  });
};
