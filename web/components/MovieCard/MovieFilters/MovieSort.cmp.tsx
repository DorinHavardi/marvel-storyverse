import { ESortBy } from '@/enum/movies.enum';
import React, { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

interface MovieSortProps {
  sortBy: ESortBy;
  setSortBy: Dispatch<SetStateAction<ESortBy>>;
}

const MovieSort = ({ sortBy, setSortBy }: MovieSortProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <label className="block text-sm mb-1 font-bold">
        {t('movies_screen.sort.title')}
      </label>
      <select
        className="text-black px-2 py-1 rounded"
        value={sortBy}
        onChange={e => setSortBy(e.target.value as ESortBy)}
      >
        {Object.values(ESortBy).map(option => (
          <option key={option} value={option}>
            {t(`movies_screen.sort.${option}`)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MovieSort;
