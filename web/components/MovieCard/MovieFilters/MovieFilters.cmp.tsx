import { MovieFilterOptions } from '@/bl/movies.bl';
import { EFilterType, ESortBy } from '@/enum/movies.enum';
import React, { useEffect, useState } from 'react';
import FilterGroup from './FilterGroup.cmp';
import MovieSort from './MovieSort.cmp';

interface FilterGroupItem {
  id: string;
  title: string;
  data: { _id: string; title: string }[];
  type: EFilterType;
}

interface MovieFiltersProps {
  onChange: (filters: MovieFilterOptions) => void;
  filterGroups: FilterGroupItem[];
}

const MovieFilters = ({ onChange, filterGroups }: MovieFiltersProps) => {
  const [sortBy, setSortBy] = useState<ESortBy>(ESortBy.timelineDesc);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  useEffect(() => {
    const filters = {
      sortBy,
      sagas: selectedFilters['sagas'] || [],
      phases: selectedFilters['phases'] || [],
      characters: selectedFilters['characters'] || [],
    };
    onChange(filters);
  }, [sortBy, selectedFilters]);

  const toggleItem = (groupKey: string, value: string) => {
    setSelectedFilters(prev => {
      const currentList = prev[groupKey] || [];
      const updatedList = currentList.includes(value)
        ? currentList.filter(v => v !== value)
        : [...currentList, value];

      return {
        ...prev,
        [groupKey]: updatedList,
      };
    });
  };

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 p-4 mb-6 rounded-xl bg-black/30 text-white">
      {/* SORT */}
      <MovieSort sortBy={sortBy} setSortBy={setSortBy} />
      {/* FILTERS */}
      {filterGroups?.map(group => (
        <FilterGroup
          key={group?.id}
          id={group?.id}
          title={group?.title}
          options={group?.data}
          type={group?.type}
          selected={selectedFilters[group?.id] || []}
          toggleItem={toggleItem}
        />
      ))}
    </div>
  );
};

export default MovieFilters;
