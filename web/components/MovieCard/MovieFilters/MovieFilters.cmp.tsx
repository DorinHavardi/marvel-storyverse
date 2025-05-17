import { MovieFilterOptions } from '@/bl/movies.bl';
import { ESortBy } from '@/enum/movies.enum';
import React, { useEffect, useState } from 'react';
import FilterGroup from './FilterGroup.cmp';
import MovieSort from './MovieSort.cmp';

interface FilterGroupItem {
  id: string; // Unique identifier for the filter group
  title: string;
  data: { _id: string; title: string }[];
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
    <div className="flex flex-wrap gap-6 p-4 mb-6 rounded-xl bg-black/30 text-white">
      <MovieSort sortBy={sortBy} setSortBy={setSortBy} />

      {filterGroups.map(group => (
        <FilterGroup
          key={group?.id}
          id={group?.id}
          title={group?.title}
          options={group?.data}
          selected={selectedFilters[group?.id] || []}
          toggleItem={toggleItem}
        />
      ))}
    </div>
  );
};

export default MovieFilters;
