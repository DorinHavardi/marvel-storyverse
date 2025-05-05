import { MovieFilterOptions } from '@/bl/movies.bl';
import { ESortBy } from '@/enum/movies.enum';
import React, { useEffect, useState } from 'react';
import FilterGroup from './FilterGroup.cmp';
import { PhaseType, SagaType } from '@/types/sagas.types';
import { CharacterType } from '@/types/characters.types';
import { useLocales } from '@/hooks/useLocales.hook';

interface MovieFiltersProps {
  onChange: (filters: MovieFilterOptions) => void;
  allSagas: SagaType[];
  allCharacters: CharacterType[];
  allPhases: PhaseType[];
}

const MovieFilters = ({
  onChange,
  allSagas,
  allCharacters,
  allPhases,
}: MovieFiltersProps) => {
  const { lang } = useLocales();
  const [sortBy, setSortBy] = useState<ESortBy>(ESortBy.timelineDesc);
  const [sagas, setSagas] = useState<string[]>([]);
  const [phases, setPhases] = useState<string[]>([]);
  const [characters, setCharacters] = useState<string[]>([]);

  useEffect(() => {
    onChange({ sortBy, sagas, phases, characters });
  }, [sortBy, sagas, phases, characters]);

  const toggleItem = (
    value: string,
    list: string[],
    setList: (val: string[]) => void,
  ) => {
    setList(
      list.includes(value) ? list.filter(v => v !== value) : [...list, value],
    );
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6 p-4 mb-6 rounded-xl bg-black/30 text-white">
      {/* Sort Select */}
      <div>
        <label className="block text-sm mb-1 font-bold">Sort By</label>
        <select
          className="text-black px-2 py-1 rounded"
          value={sortBy}
          onChange={e => setSortBy(e.target.value as ESortBy)}
        >
          <option value="timelineAsc">Timeline ↑</option>
          <option value="timelineDesc">Timeline ↓</option>
          <option value="releaseAsc">Release ↑</option>
          <option value="releaseDesc">Release ↓</option>
        </select>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4">
        <FilterGroup
          title="Saga"
          options={allSagas?.map(saga => ({
            _id: saga?._id,
            title: saga?.name?.[lang],
          }))}
          selected={sagas}
          setSelected={setSagas}
          color="bg-yellow-400"
          toggleItem={toggleItem}
        />
        <FilterGroup
          title="Phase"
          options={allPhases?.map(phase => ({
            _id: phase?._id,
            title: phase?.name,
          }))}
          selected={phases}
          setSelected={setPhases}
          color="bg-blue-400"
          toggleItem={toggleItem}
        />
        <FilterGroup
          title="Characters"
          options={allCharacters?.map(char => ({
            _id: char?._id,
            title: char.name?.[lang],
          }))}
          selected={characters}
          setSelected={setCharacters}
          color="bg-pink-400"
          toggleItem={toggleItem}
        />
      </div>
    </div>
  );
};

export default MovieFilters;
