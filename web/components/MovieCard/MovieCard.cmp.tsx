'use client';

import { useLocales } from '@/hooks/useLocales.hook';
import { MovieType } from '@/types/movies.types';
import { urlFor } from '@/sanity/client';
import Image from 'next/image';
import { isValidImageSource } from '@/utils/image.util';

interface MovieCardProps {
  movie: MovieType;
  align?: 'left' | 'right';
}

export const MovieCard = ({ movie, align }: MovieCardProps) => {
  const { lang } = useLocales();

  const DEFAULT_POSTER_URL = '/images/default-poster.jpg';
  const posterUrl = isValidImageSource(movie.poster)
    ? urlFor(movie.poster).width(250).height(370).url()
    : DEFAULT_POSTER_URL;

  return (
    <div
      className={`relative w-full flex ${align === 'left' ? 'justify-start' : 'justify-end'}`}
    >
      <div className="relative w-[250px] h-[370px] rounded-xl overflow-hidden shadow-md">
        {posterUrl && (
          <Image
            src={posterUrl}
            alt={movie?.title?.[lang] || 'Movie poster'}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
          <p className="text-sm text-gray-300 mb-1">{movie?.timelineDate}</p>
          <h3 className="text-lg font-semibold text-white mb-2">
            {movie?.title?.[lang]}
          </h3>
          <p className="text-xs text-gray-300">{movie?.releaseDate}</p>
        </div>
      </div>
    </div>
  );
};
