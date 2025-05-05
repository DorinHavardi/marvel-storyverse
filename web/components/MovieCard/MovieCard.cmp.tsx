'use client';

import { useLocales } from '@/hooks/useLocales.hook';
import { MovieType } from '@/types/movies.types';
import { urlFor } from '@/sanity/client';
import Image from 'next/image';
import { isValidImageSource } from '@/utils/image.util';
import { useRouter } from 'next/navigation';
import { DEFAULT_POSTER_URL } from '@/constants/images.const';
import { ENavigationLinks } from '@/enum/navigation.enum';
import { motion } from 'framer-motion';
import TimelineLabel from './TimelineLabel.cmp';

interface MovieCardProps {
  movie: MovieType;
  index: number;
}

const MovieCard = ({ movie, index }: MovieCardProps) => {
  const router = useRouter();
  const { lang } = useLocales();

  const posterUrl = isValidImageSource(movie?.poster)
    ? urlFor(movie?.poster).width(250).height(370).url()
    : DEFAULT_POSTER_URL;

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
    >
      {movie?.timelineDate && (
        <TimelineLabel timelineDate={movie?.timelineDate} />
      )}
      <div
        className={`flex justify-center text-center  w-full`}
        onClick={() => router.push(`/${ENavigationLinks.movies}/${movie._id}`)}
      >
        <div className="relative w-[80%] h-[30rem] rounded-2xl overflow-hidden shadow-md">
          <Image
            priority
            src={posterUrl}
            alt={movie?.title?.[lang] || 'Movie poster'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 250px"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center p-4">
            <h3 className="text-5xl font-semibold text-white mb-2">
              {movie?.title?.[lang]}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieCard;
