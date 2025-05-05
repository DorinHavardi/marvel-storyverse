'use client';

import { useMovies } from '@/hooks/useMovies.hook';
import { useCallback, useMemo } from 'react';
import { ErrorNotice, Loader, MovieCard, PageLayout } from '@/components';

export default function MoviesPage() {
  const { data: movies, isLoading, error } = useMovies();

  const bgImage = '/images/design/space/galaxy_4.jpg';
  const overlayColorClass = 'bg-yellow-400/30';

  const sortedMovies = useMemo(
    () =>
      movies?.sort((a, b) => {
        const timelineA = Number(a.timelineDate);
        const timelineB = Number(b.timelineDate);
        if (timelineA !== timelineB) return timelineB - timelineA;

        const releaseA = new Date(a.releaseDate).getTime();
        const releaseB = new Date(b.releaseDate).getTime();
        return releaseA - releaseB;
      }),
    [movies],
  );

  const renderContent = useCallback(() => {
    if (isLoading) return <Loader color="#60a5fa" />;
    if (error) return <ErrorNotice />;
    return (
      <div className="relative py-8">
        {/* Glowing vertical timeline */}
        <div className="absolute top-0 bottom-0 left-1/2 w-2 -translate-x-1/2 bg-white blur-sm" />

        {/* Movie grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {sortedMovies?.map((movie, index) => (
            <MovieCard key={movie._id} movie={movie} index={index} />
          ))}
        </div>
      </div>
    );
  }, [isLoading, error, sortedMovies]);

  return (
    <PageLayout bgImage={bgImage} overlayColorClass={overlayColorClass}>
      {renderContent()}
    </PageLayout>
  );
}
