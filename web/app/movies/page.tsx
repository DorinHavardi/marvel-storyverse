'use client';

import { MovieCard } from '@/components/MovieCard/MovieCard.cmp';
import { useMovies } from '@/hooks/useMovies.hook';
import { useTranslation } from 'react-i18next';

export default function MoviesPage() {
  const { t } = useTranslation();
  const { data: movies, isLoading, error } = useMovies();

  if (isLoading)
    return <div className="p-10 text-center">{t('common.loading')}</div>;
  if (error)
    return (
      <div className="p-10 text-center text-red-500">
        {t('errors.something_went_wrong')}
      </div>
    );

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {movies?.map(movie => <MovieCard key={movie._id} movie={movie} />)}
    </div>
  );
}
