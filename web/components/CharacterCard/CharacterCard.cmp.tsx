import Image from 'next/image';
import { Character } from '@/types/characters.types';
import { urlFor } from '@/sanity/client';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition p-4 bg-white">
      {character?.photo && (
        <Image
          src={
            character?.photo?.asset?._ref
              ? urlFor(character.photo).url()
              : '/placeholder.jpg'
          }
          alt={character?.name?.en || 'Character'}
          width={300}
          height={300}
          className="w-full h-64 object-cover rounded-lg"
        />
      )}
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">{character?.name?.en}</h2>
        <p className="text-gray-600 text-sm">{character?.description?.en}</p>
      </div>
    </div>
  );
};
