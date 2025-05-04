import { ImageType } from './image.type';
import { MovieType } from './movies.types';
import { LocalizedStringType, LocalizedTextType } from './sanity.types';

export interface CharacterType {
  _id: string;
  name: LocalizedStringType;
  realName: LocalizedStringType;
  description: LocalizedTextType;
  image: ImageType;
  movies: MovieType[];
}
