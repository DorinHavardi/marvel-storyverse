'use client';

import { ErrorNotice } from '@/components/ErrorNotice/ErrorNotice.cmp';
import { MovieCard } from '@/components/MovieCard/MovieCard.cmp';
import { useMovies } from '@/hooks/useMovies.hook';
import { useTranslation } from 'react-i18next';
import PageLoading from './loading';
import Image from 'next/image';
import backgroundImage from '@/public/images/design/red_galaxy_bg.jpg';

export default function MoviesPage() {
  const { t } = useTranslation();
  const { data: movies, isLoading, error } = useMovies();

  if (isLoading) return <PageLoading />;
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
    <div className="relative w-full h-screen overflow-hidden">
      {/* רקע קבוע */}
      <img
        src="/images/design/red_galaxy_bg.jpg"
        alt="Galaxy Background"
        className="absolute inset-0 w-full h-full object-cover object-top -z-10"
      />

      {/* שכבת תוכן - גלילה פנימית */}
      <div className="relative z-10 w-full h-full px-4 py-6 flex flex-col">
        {/* מיכל עם גלילה אנכית פנימית */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent pr-2">
          <div className="relative">
            {/* קו ציר זמן */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/20 transform -translate-x-1/2 z-0" />

            {/* כרטיסים */}
            <div className="flex flex-col gap-20 relative z-10">
              {sortedMovies.map(movie => (
                <MovieCard key={movie._id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
