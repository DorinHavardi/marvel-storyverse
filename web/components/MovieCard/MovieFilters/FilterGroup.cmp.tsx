import { EFilterType } from '@/enum/movies.enum';
import React from 'react';
import BubbleFilter from './BubbleFilter.cmp';
import DropDownFilter from './DropDownFilter.cmp';
import { FilterGroupsProps } from './filters.interface';

const FilterGroup = ({
  id,
  title,
  options,
  selected,
  toggleItem,
  type,
}: FilterGroupsProps) => (
  <div>
    <label className="block text-sm mb-1 font-bold">{title}</label>
    {type === EFilterType.Bubble ? (
      <BubbleFilter
        id={id}
        options={options}
        selected={selected}
        toggleItem={toggleItem}
      />
    ) : (
      <DropDownFilter id={id} options={options} toggleItem={toggleItem} />
    )}
  </div>
);

export default FilterGroup;
