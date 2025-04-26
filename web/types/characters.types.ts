import { Movie } from './movies.types';
import { LocalizedString, LocalizedText } from './sanity.types';

export interface Character {
  _id: string;
  name: LocalizedString;
  description: LocalizedText;
  photo?: any;
  movies?: Movie[];
}
