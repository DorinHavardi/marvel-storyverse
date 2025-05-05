'use client';

import { useParams } from 'next/navigation';
import { useLocales } from '@/hooks/useLocales.hook';
import { isValidImageSource } from '@/utils/image.util';
import { urlFor } from '@/sanity/client';
import Image from 'next/image';
import { useMovieById } from '@/hooks/useMovies.hook';
import { useTranslation } from 'react-i18next';
import { ErrorNotice } from '@/components';

export default function MovieDetailPage() {
  const { id } = useParams();
  const { lang } = useLocales();
  const { t } = useTranslation();
  const { data: movie, isLoading, error } = useMovieById(id as string);

  if (isLoading) return <div className="p-10 text-center">Loading...</div>;
  if (error || !movie) return <ErrorNotice />;

  const posterUrl = isValidImageSource(movie?.poster)
    ? urlFor(movie?.poster).width(400).height(600).url()
    : '/images/default-poster.jpg';

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <Image
            priority
            src={posterUrl}
            alt={movie?.title?.[lang] || 'Poster'}
            width={400}
            height={600}
            className="rounded shadow-md"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-4 text-accent-deep">
            {movie?.title?.[lang]}
          </h1>
          <p className="text-sm text-neutral-text mb-2">
            {movie?.releaseDate?.slice(0, 10)} | {movie?.timelineDate}
          </p>
          <p className="text-base text-gray-700 mb-6">
            {movie?.synopsis?.[lang]}
          </p>

          {/* Placeholder for related content */}
          <div className="mt-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">
                {t('movie_screen.characters')}
              </h2>
              {movie?.characters && movie?.characters > 0 ? (
                <div className="flex flex-row">
                  {movie?.characters?.map(character => (
                    <div>{character?.name}</div>
                  ))}
                </div>
              ) : (
                <p className="text-md">{t('movie_screen.TBD')}</p>
              )}
            </div>
            {/* <h2 className="text-xl font-semibold mb-2">Appears In:</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>{t('movie_screen.characters')}: TBD</li>
              <li>Worlds: TBD</li>
              <li>Sagas: TBD</li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}
