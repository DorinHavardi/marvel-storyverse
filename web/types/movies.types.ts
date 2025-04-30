import { LocalizedStringType, LocalizedTextType } from './sanity.types';

export interface MovieType {
  _id: string;
  title: LocalizedStringType;
  type: 'movie' | 'series';
  releaseDate: string;
  timelineDate: string;
  synopsis: LocalizedTextType;
  poster?: any;
  whereToWatch?: string[];
}
