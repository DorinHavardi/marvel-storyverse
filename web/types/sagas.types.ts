import { MovieType } from './movies.types';
import { LocalizedString, LocalizedText } from './sanity.types';

export interface Saga {
  _id: string;
  name: LocalizedString;
  description: LocalizedText;
  movies?: MovieType[];
}
