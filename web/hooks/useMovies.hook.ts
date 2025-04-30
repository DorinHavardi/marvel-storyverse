import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/sanity/fetcher';
import {
  getMovieByIdQuery,
  getMoviesQuery,
} from '@/sanity/queries/movies.query';
import { MovieType } from '@/types/movies.types';

export const useMovies = () =>
  useQuery<MovieType[]>({
    queryKey: ['movies'],
    queryFn: () => fetcher<MovieType[]>(getMoviesQuery),
  });

export const useMovieById = (id: string) =>
  useQuery<MovieType>({
    queryKey: ['movie', id],
    queryFn: () => fetcher(getMovieByIdQuery(id)),
    enabled: !!id,
  });
