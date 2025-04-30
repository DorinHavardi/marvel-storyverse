import { MovieType } from './movies.types';
import { LocalizedStringType, LocalizedTextType } from './sanity.types';

export interface Character {
  _id: string;
  name: LocalizedStringType;
  description: LocalizedTextType;
  photo?: any;
  movies?: MovieType[];
}
