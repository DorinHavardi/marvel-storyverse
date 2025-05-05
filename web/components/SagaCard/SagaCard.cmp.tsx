'use client';

import { DEFAULT_POSTER_URL } from '@/constants/images.const';
import { ENavigationLinks } from '@/enum/navigation.enum';
import { useLocales } from '@/hooks/useLocales.hook';
import { urlFor } from '@/sanity/client';
import { SagaType } from '@/types/sagas.types';
import { isValidImageSource } from '@/utils/image.util';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface SagaCardProps {
  saga: SagaType;
}

const SagaCard = ({ saga }: SagaCardProps) => {
  const router = useRouter();
  const { lang } = useLocales();

  const { name, description, phases } = saga;

  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition p-4 px-6 bg-black/20 backdrop-blur-md">
      <div className="mb-4">
        <h2 className="text-24 font-bold mb-2">{name?.[lang]}</h2>
        <p className="text-18">{description?.[lang]}</p>
      </div>
      {phases && phases.length > 0 && (
        <div>
          {phases.map((phase, index) => (
            <div
              key={index}
              className="pb-4 mb-4 border-b border-white/50 last:border-b-0"
            >
              <p className="text-20 underline font-semibold">{phase?.name}</p>
              <p className="text-18 mb-2">{phase?.description?.[lang]}</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {phase?.movies?.map(movie => {
                  const posterUrl = isValidImageSource(movie?.poster)
                    ? urlFor(movie?.poster).width(250).height(370).url()
                    : DEFAULT_POSTER_URL;
                  return (
                    <div
                      key={movie?._id}
                      onClick={() =>
                        router.push(`/${ENavigationLinks.movies}/${movie?._id}`)
                      }
                      className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform"
                    >
                      <Image
                        src={posterUrl}
                        alt={movie?.title?.[lang] || 'Movie poster'}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 250px"
                      />
                      <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-3">
                        <h3 className="text-base md:text-lg font-semibold text-white">
                          {movie?.title?.[lang]}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SagaCard;
