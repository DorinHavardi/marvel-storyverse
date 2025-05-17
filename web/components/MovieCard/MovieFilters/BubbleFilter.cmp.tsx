import React from 'react';
import { SingleFilterGroupsProps } from './filters.interface';

const BubbleFilter = ({
  id,
  options,
  toggleItem,
  selected,
}: SingleFilterGroupsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {options?.map(option => (
        <button
          key={`${id}-${option?._id}`}
          onClick={() => toggleItem(id, option?._id)}
          className={`px-3 py-1 rounded-full border transition-colors ${
            selected?.includes(option?._id)
              ? `bg-white text-black`
              : `border-white text-white hover:bg-white hover:text-black`
          }`}
        >
          {option?.title}
        </button>
      ))}
    </div>
  );
};

export default BubbleFilter;
