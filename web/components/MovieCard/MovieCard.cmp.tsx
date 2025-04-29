import { useLocales } from '@/hooks/useLocales.hook';
import { Movie } from '@/types/movies.types';
import Image from 'next/image';

interface MovieCardProps {
  movie: Movie;
  align: 'left' | 'right';
}

export const MovieCard = ({ movie, align }: MovieCardProps) => {
  const { lang } = useLocales();
  console.log(lang);
  return (
    <div
      className={`relative w-full flex ${align === 'left' ? 'justify-start' : 'justify-end'}`}
    >
      <div className="bg-neutral text-primary-medium rounded-xl p-4 shadow-md">
        <p className="text-sm text-neutral-text mb-1">{movie?.timelineDate}</p>

        <h3 className="text-xl font-semibold text-accent-deep mb-2">
          {movie?.title?.[lang]}
        </h3>
        <p className="text-sm text-neutral-text mb-1">{movie?.releaseDate}</p>
        <p className="text-sm text-neutral-text">{movie?.synopsis?.[lang]}</p>
      </div>
    </div>
  );
};
