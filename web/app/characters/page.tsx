'use client';

import { CharacterCard } from '@/components/CharacterCard/CharacterCard.cmp';
import { ErrorNotice } from '@/components/ErrorNotice/ErrorNotice.cmp';
import { useCharacters } from '@/hooks/useCharacters.hook';
import { useTranslation } from 'react-i18next';

export default function CharactersPage() {
  const { t } = useTranslation();
  const { data: characters, isLoading, error } = useCharacters();

  if (isLoading) return <div className="p-10 text-center">{t('loading')}</div>;
  if (error) return <ErrorNotice />;

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {characters?.map(character => (
        <CharacterCard key={character?._id} character={character} />
      ))}
    </div>
  );
}
