import { MovieType } from './movies.types';
import { LocalizedStringType, LocalizedTextType } from './sanity.types';

export interface WorldType {
  _id: string;
  name: LocalizedStringType;
  description: LocalizedTextType;
  longDescription: LocalizedTextType;
  movies?: MovieType[];
  image?: {
    asset?: {
      url: string;
      _id: string;
    };
  };
}
