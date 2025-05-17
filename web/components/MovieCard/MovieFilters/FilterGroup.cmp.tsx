import React from 'react';

interface FilterGroupsProps {
  id: string;
  title: string;
  options: { _id: string; title: string }[];
  selected: string[];
  toggleItem: (groupKey: string, value: string) => void;
}

const FilterGroup = ({
  id,
  title,
  options,
  selected,
  toggleItem,
}: FilterGroupsProps) => (
  <div>
    <label className="block text-sm mb-1 font-bold">{title}</label>
    <div className="flex flex-wrap gap-2">
      {options?.map(option => (
        <button
          key={`${id}-${option?._id}`}
          onClick={() => toggleItem(id, option?._id)}
          className={`px-3 py-1 rounded-full border transition-colors ${
            selected.includes(option?._id)
              ? `bg-white text-black`
              : `border-white text-white hover:bg-white hover:text-black`
          }`}
        >
          {option?.title}
        </button>
      ))}
    </div>
  </div>
);

export default FilterGroup;
