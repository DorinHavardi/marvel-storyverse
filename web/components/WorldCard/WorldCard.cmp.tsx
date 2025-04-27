'use client';

import Image from 'next/image';
import { World } from '@/types/worlds.types';
import { urlFor } from '@/sanity/client';
import Link from 'next/link';
import { ENavigationLinks } from '@/enum/navigation.enum';

interface WorldCardProps {
  world: World;
}

export const WorldCard = ({ world }: WorldCardProps) => {
  return (
    <Link
      href={`/${ENavigationLinks.worlds}/${world?._id}`}
      className="block border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-white p-4"
    >
      {world?.photo && (
        <Image
          src={
            world?.photo?.asset?._ref
              ? urlFor(world.photo).url()
              : '/placeholder.jpg'
          }
          alt={world?.name?.en || 'World'}
          width={400}
          height={250}
          className="w-full h-48 object-cover rounded-lg"
        />
      )}
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">{world?.name?.en}</h2>
        <p className="text-gray-600 text-sm">{world?.description?.en}</p>
      </div>
    </Link>
  );
};
