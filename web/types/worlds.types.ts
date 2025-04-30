import { MovieType } from './movies.types';
import { LocalizedString, LocalizedText } from './sanity.types';

export interface World {
  _id: string;
  name: LocalizedString;
  description: LocalizedText;
  movies?: MovieType[];
  photo?: any;
}
