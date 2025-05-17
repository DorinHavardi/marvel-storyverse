import { EFilterType } from '@/enum/movies.enum';

export interface IOptionItem {
  _id: string;
  title: string;
}

export interface SingleFilterGroupsProps {
  id: string;
  options: IOptionItem[];
  toggleItem: (groupKey: string, value: string) => void;
  selected?: string[];
}

export interface FilterGroupsProps extends SingleFilterGroupsProps {
  title: string;
  type: EFilterType;
}
