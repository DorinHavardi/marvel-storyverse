import Image from 'next/image';
import { CharacterType } from '@/types/characters.types';
import { urlFor } from '@/sanity/client';
import { DEFAULT_POSTER_URL } from '@/constants/images.const';
import { isValidImageSource } from '@/utils/image.util';
import { useLocales } from '@/hooks/useLocales.hook';

interface CharacterCardProps {
  character: CharacterType;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const { lang } = useLocales();

  console.log('character', character);

  const characterImageUrl = isValidImageSource(character?.image)
    ? urlFor(character?.image).width(400).height(400).url()
    : DEFAULT_POSTER_URL;

  return (
    <div className="p-4 text-center">
      <div className="relative mx-auto aspect-square w-32 sm:w-40 md:w-48 lg:w-56">
        <Image
          priority
          src={characterImageUrl}
          alt={character?.name?.[lang] || 'Character'}
          fill
          className="rounded-full object-cover shadow-2xl"
          sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-2xl text-white sm:text-2xl font-bold">
          {character?.name?.[lang]}
        </h2>
        <p className="text-white text-lg sm:text-base">
          {character?.realName?.[lang] !== character?.name?.[lang] &&
            character?.realName?.[lang]}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
