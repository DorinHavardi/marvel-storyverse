'use client';

import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { ErrorNotice } from '@/components/ErrorNotice/ErrorNotice.cmp';
import { isValidImageSource } from '@/utils/image.util';
import { urlFor } from '@/sanity/client';
import Image from 'next/image';
import { DEFAULT_POSTER_URL } from '@/constants/images.const';
import { MovieCard } from '@/components/MovieCard/MovieCard.cmp';
import { useGetWorldByIdQuery } from '@/hooks/useWorlds.hook';
import { useLocales } from '@/hooks/useLocales.hook';

export default function WorldPage() {
  const { t } = useTranslation();
  const { lang } = useLocales();

  const params = useParams();
  const worldId = params?.id as string;

  const { data: world, isLoading, error } = useGetWorldByIdQuery(worldId);

  if (isLoading) return <div className="p-10 text-center">{t('loading')}</div>;
  if (error || !world) return <ErrorNotice />;

  const { name, description, image, movies, longDescription } = world;

  const imageUrl = isValidImageSource(image)
    ? urlFor(image).width(800).height(300).url()
    : DEFAULT_POSTER_URL;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative w-full h-64 rounded-xl rounded-t-none overflow-hidden mb-6">
        <Image
          src={imageUrl}
          alt={name?.[lang] || 'World image'}
          fill
          className="object-cover"
        />
      </div>
      <div className="px-4">
        <h1 className="text-3xl font-bold text-neutral-text mb-4">
          {name?.[lang]}
        </h1>
        <p className="text-neutral-text mb-10 text-base">
          {description?.[lang]}
        </p>
        {longDescription && (
          <p className="text-neutral-text mb-10 text-base">
            {longDescription?.[lang]}
          </p>
        )}

        {movies?.length && (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {movies.map(movie => (
              <MovieCard key={movie._id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
