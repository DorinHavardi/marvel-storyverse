import { ESortBy } from '@/enum/movies.enum';
import React, { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { IoChevronDown } from 'react-icons/io5';

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

      <div className="relative w-full">
        <select
          className="appearance-none bg-transparent border border-white text-white px-4 py-2 rounded-full w-full"
          value={sortBy}
          onChange={e => setSortBy(e.target.value as ESortBy)}
        >
          {Object.values(ESortBy).map(option => (
            <option key={option} value={option}>
              {t(`movies_screen.sort.${option}`)}
            </option>
          ))}
        </select>
        {/* Icon */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <IoChevronDown size={16} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default MovieSort;
