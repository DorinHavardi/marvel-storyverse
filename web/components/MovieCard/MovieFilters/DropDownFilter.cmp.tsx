import React from 'react';
import { SingleFilterGroupsProps } from './filters.interface';

const DropDownFilter = ({
  id,
  options,
  toggleItem,
}: SingleFilterGroupsProps) => {
  return (
    <div className="relative">
      <select
        className="w-full px-3 py-2 border rounded-lg bg-black/30 text-white"
        multiple
        onChange={e => {
          const selectedValues = Array.from(e.target.selectedOptions).map(
            opt => opt.value,
          );
          selectedValues.forEach(value => toggleItem(id, value));
        }}
      >
        {options.map(option => (
          <option
            key={`${id}-${option?._id}`}
            value={option?._id}
            className="bg-black text-white"
          >
            {option?.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownFilter;
