'use client';

import { CharacterCard, ErrorNotice, PageLayout } from '@/components';
import { CHARACTERS_BG_IMAGE } from '@/constants/images.const';
import { useCharacters } from '@/hooks/useCharacters.hook';
import { useTranslation } from 'react-i18next';

export default function CharactersPage() {
  const { t } = useTranslation();
  const { data: characters, isLoading, error } = useCharacters();

  const overlayColorClass = 'bg-green-900/40';

  if (isLoading) return <div className="p-10 text-center">{t('loading')}</div>;
  if (error) return <ErrorNotice />;

  return (
    <PageLayout
      bgImage={CHARACTERS_BG_IMAGE}
      overlayColorClass={overlayColorClass}
    >
      <div className="py-8 px-2 grid grid-cols-2 sm:grid-cols-3 gap-6">
        {characters?.map(character => (
          <CharacterCard key={character?._id} character={character} />
        ))}
      </div>
    </PageLayout>
  );
}
