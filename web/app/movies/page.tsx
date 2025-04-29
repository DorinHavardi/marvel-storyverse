'use client';

import { ErrorNotice } from '@/components/ErrorNotice/ErrorNotice.cmp';
import { MovieCard } from '@/components/MovieCard/MovieCard.cmp';
import { useMovies } from '@/hooks/useMovies.hook';
import { useTranslation } from 'react-i18next';

export default function MoviesPage() {
  const { t } = useTranslation();
  const { data: movies, isLoading, error } = useMovies();

  if (isLoading) return <div className="p-10 text-center">{t('loading')}</div>;
  if (error) return <ErrorNotice />;

  if (!movies?.length) {
    return (
      <div className="p-10 text-center text-gray-400">No movies found 😢</div>
    );
  }

  const sortedMovies = [...movies].sort((a, b) => {
    const timelineA = Number(a.timelineDate);
    const timelineB = Number(b.timelineDate);

    if (timelineA !== timelineB) {
      return timelineA - timelineB; // קודם כל לפי timeline
    }

    // אם timeline שווה — נמיין לפי releaseDate
    const releaseA = new Date(a.releaseDate).getTime();
    const releaseB = new Date(b.releaseDate).getTime();

    return releaseA - releaseB;
  });

  return (
    <div className="relative p-8">
      {/* הקו של הציר */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2" />

      <div className="flex flex-col gap-12">
        {sortedMovies.map((movie, index) => (
          <MovieCard
            key={movie._id}
            movie={movie}
            align={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </div>
  );
}
