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
    if (timelineA !== timelineB) return timelineA - timelineB;

    const releaseA = new Date(a.releaseDate).getTime();
    const releaseB = new Date(b.releaseDate).getTime();
    return releaseA - releaseB;
  });

  return (
    <div className="relative px-4 py-12">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-300 md:left-1/2 transform md:-translate-x-1/2" />

      <div className="flex flex-col gap-20">
        {sortedMovies.map((movie, index) => (
          <div
            key={movie._id}
            className="relative flex flex-col md:flex-row md:items-start"
          >
            {/* Timeline dot */}
            <div
              className={`
                absolute w-4 h-4 rounded-full bg-primary-500
                top-2
                ${index % 2 === 0 ? 'left-4 md:left-1/2 md:-translate-x-1/2' : 'left-4 md:left-1/2 md:-translate-x-1/2'}
              `}
            />

            {/* Card */}
            <div
              className={`
                mt-6 md:mt-2
                md:w-1/2
                ${index % 2 === 0 ? 'md:pl-[calc(1rem+8px)] md:pr-4 md:text-right md:self-start' : 'md:pl-4 md:pr-[calc(1rem+8px)] md:self-end'}
              `}
            >
              <MovieCard movie={movie} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
