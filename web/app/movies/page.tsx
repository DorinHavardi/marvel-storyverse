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
      <div className="py-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sortedMovies?.map((movie, index) => (
          <MovieCard key={movie._id} movie={movie} index={index} />
        ))}
      </div>
    );
  }, [isLoading, error, sortedMovies]);

  return (
    <PageLayout bgImage={bgImage} overlayColorClass={overlayColorClass}>
      {renderContent()}
    </PageLayout>
  );
}
