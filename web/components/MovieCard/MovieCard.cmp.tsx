'use client';

import { useLocales } from '@/hooks/useLocales.hook';
import { MovieType } from '@/types/movies.types';
import { urlFor } from '@/sanity/client';
import Image from 'next/image';
import { isValidImageSource } from '@/utils/image.util';
import { useRouter } from 'next/navigation';
import { DEFAULT_POSTER_URL } from '@/constants/images.const';
import { ENavigationLinks } from '@/enum/navigation.enum';

interface MovieCardProps {
  movie: MovieType;
  align?: 'left' | 'right';
}

const MovieCard = ({ movie, align }: MovieCardProps) => {
  const router = useRouter();
  const { lang } = useLocales();

  const posterUrl = isValidImageSource(movie?.poster)
    ? urlFor(movie?.poster).width(250).height(370).url()
    : DEFAULT_POSTER_URL;

  const desktopAlignment =
    align === 'left'
      ? 'md:justify-start md:text-left'
      : 'md:justify-end md:text-right';

  return (
    <div className="flex flex-col items-center">
      <div className="px-3 py-1 mb-4 rounded-md bg-accent-deep shadow-glow">
        <p className="text-lg font-bold text-gray-300 mb-1">
          {movie?.timelineDate}
        </p>
      </div>
      <div
        className={`flex justify-center text-center ${desktopAlignment} w-full`}
        onClick={() => router.push(`/${ENavigationLinks.movies}/${movie._id}`)}
      >
        <div className="relative w-[250px] h-[370px] rounded-xl overflow-hidden shadow-md">
          <Image
            src={posterUrl}
            alt={movie?.title?.[lang] || 'Movie poster'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 250px"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
            <h3 className="text-3xl font-semibold text-white mb-2">
              {movie?.title?.[lang]}
            </h3>
            <p className="text-xs text-gray-300">{movie?.releaseDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
