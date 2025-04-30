import { MovieType } from './movies.types';
import { LocalizedStringType, LocalizedTextType } from './sanity.types';

export interface Saga {
  _id: string;
  name: LocalizedStringType;
  description: LocalizedTextType;
  movies?: MovieType[];
}
