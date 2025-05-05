import React from 'react';

interface FilterGroupsProps {
  title: string;
  options: { _id: string; title: string }[];
  selected: string[];
  setSelected: (vals: string[]) => void;
  color: string;
  toggleItem: (
    value: string,
    list: string[],
    setList: (val: string[]) => void,
  ) => void;
}

const FilterGroup = ({
  title,
  options,
  selected,
  setSelected,
  color,
  toggleItem,
}: FilterGroupsProps) => (
  <div>
    <label className="block text-sm mb-1 font-bold">{title}</label>
    <div className="flex flex-wrap gap-2">
      {options?.map(option => (
        <button
          key={option?._id}
          onClick={() => toggleItem(option?._id, selected, setSelected)}
          className={`px-3 py-1 rounded-full border transition-colors
              ${
                selected.includes(option?._id)
                  ? `${color} text-black`
                  : `border-white text-white hover:${color}`
              }
            `}
        >
          {option?.title}
        </button>
      ))}
    </div>
  </div>
);

export default FilterGroup;
