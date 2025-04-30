'use client';

import Image from 'next/image';
import { WorldType } from '@/types/worlds.types';
import { urlFor } from '@/sanity/client';
import { ENavigationLinks } from '@/enum/navigation.enum';
import { useLocales } from '@/hooks/useLocales.hook';
import { isValidImageSource } from '@/utils/image.util';
import { DEFAULT_POSTER_URL } from '@/constants/images.const';
import { useRouter } from 'next/navigation';

interface WorldCardProps {
  world: WorldType;
}

export const WorldCard = ({ world }: WorldCardProps) => {
  const router = useRouter();
  const { lang } = useLocales();

  const imageUrl = isValidImageSource(world?.image)
    ? urlFor(world?.image).width(250).height(370).url()
    : DEFAULT_POSTER_URL;

  return (
    <div
      onClick={() => router.push(`/${ENavigationLinks.worlds}/${world?._id}`)}
      className="block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-white"
    >
      <div className="relative w-full h-36">
        {world?.image && (
          <Image
            src={imageUrl}
            alt={world?.name?.[lang] || 'World'}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="mt-4 p-4">
        <h2 className="text-xl font-bold text-neutral-text mb-2">
          {world?.name?.[lang]}
        </h2>
        <p className="text-neutral-text text-sm">
          {world?.description?.[lang]}
        </p>
      </div>
    </div>
  );
};
