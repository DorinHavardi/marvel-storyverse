'use client';

import { useMovies } from '@/hooks/useMovies.hook';
import { useCallback, useMemo, useState } from 'react';
import { ErrorNotice, Loader, MovieCard, PageLayout } from '@/components';
import { filterAndSortMovies, MovieFilterOptions } from '@/bl/movies.bl';
import { ESortBy } from '@/enum/movies.enum';
import MovieFilters from '@/components/MovieCard/MovieFilters.cmp';

export default function MoviesPage() {
  const { data: movies, isLoading, error } = useMovies();
  console.log('movies', movies);
  const bgImage = '/images/design/space/galaxy_4.jpg';
  const overlayColorClass = 'bg-yellow-400/30';

  const [filters, setFilters] = useState<MovieFilterOptions>({
    sortBy: ESortBy.releaseDesc,
    sagas: [],
    phases: [],
    characters: [],
  });

  const filteredMovies = useMemo(() => {
    return movies ? filterAndSortMovies(movies, filters) : [];
  }, [movies, filters]);

  const allSagas = useMemo(() => {
    const sagaMap = new Map();
    movies?.forEach(movie => {
      if (movie.saga?._id) sagaMap.set(movie.saga._id, movie.saga);
    });
    return Array.from(sagaMap.values());
  }, [movies]);

  const allPhases = useMemo(() => {
    const phaseMap = new Map();
    movies?.forEach(movie => {
      if (movie.phase?._id) phaseMap.set(movie.phase._id, movie.phase);
    });
    return Array.from(phaseMap.values());
  }, [movies]);

  const allCharacters = useMemo(() => {
    const charMap = new Map();
    movies?.forEach(movie => {
      movie.characters?.forEach(char => {
        if (char?._id) charMap.set(char._id, char);
      });
    });
    return Array.from(charMap.values());
  }, [movies]);

  const renderContent = useCallback(() => {
    if (isLoading) return <Loader color="#60a5fa" />;
    if (error) return <ErrorNotice />;
    return (
      <div className="relative py-8">
        <MovieFilters
          allSagas={allSagas}
          allPhases={allPhases}
          allCharacters={allCharacters}
          onChange={setFilters}
        />
        {/* Glowing vertical timeline */}
        <div className="absolute top-0 bottom-0 left-1/2 w-2 -translate-x-1/2 bg-white blur-sm" />
        {/* Movie grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {filteredMovies?.map((movie, index) => (
            <MovieCard key={movie._id} movie={movie} index={index} />
          ))}
        </div>
      </div>
    );
  }, [isLoading, error, filteredMovies, allSagas, allPhases, allCharacters]);

  return (
    <PageLayout bgImage={bgImage} overlayColorClass={overlayColorClass}>
      {renderContent()}
    </PageLayout>
  );
}
