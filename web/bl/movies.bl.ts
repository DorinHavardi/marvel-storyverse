import { ESortBy } from '@/enum/movies.enum';
import { MovieType } from '@/types/movies.types';

export interface MovieFilterOptions {
  sagas?: string[]; // array of saga IDs or names
  phases?: string[]; // array of phase names/numbers
  characters?: string[]; // array of character IDs or names
  sortBy?: ESortBy;
}

export const filterAndSortMovies = (
  movies: MovieType[],
  filters: MovieFilterOptions,
): MovieType[] => {
  let filtered = [...movies];

  // FILTERS
  if (filters?.sagas?.length) {
    filtered = filtered?.filter(
      movie => movie?.saga && filters?.sagas?.includes(movie?.saga?._id),
    );
  }

  if (filters?.phases?.length) {
    filtered = filtered?.filter(movie =>
      filters?.phases?.includes(movie?.phase?._id),
    );
  }

  if (filters?.characters?.length) {
    filtered = filtered?.filter(movie =>
      movie?.characters?.some(char => filters?.characters?.includes(char?._id)),
    );
  }

  // SORTING
  switch (filters?.sortBy) {
    case ESortBy.releaseAsc:
      filtered?.sort(
        (a, b) =>
          new Date(a?.releaseDate)?.getTime() -
          new Date(b?.releaseDate)?.getTime(),
      );
      break;
    case ESortBy.releaseDesc:
      filtered?.sort(
        (a, b) =>
          new Date(b?.releaseDate)?.getTime() -
          new Date(a?.releaseDate)?.getTime(),
      );
      break;
    case ESortBy.timelineAsc:
      filtered?.sort(
        (a, b) => Number(a?.timelineDate) - Number(b?.timelineDate),
      );
      break;
    case ESortBy.timelineDesc:
      filtered?.sort(
        (a, b) => Number(b?.timelineDate) - Number(a?.timelineDate),
      );
      break;
  }

  return filtered;
};
