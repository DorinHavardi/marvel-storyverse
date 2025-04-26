import { LocalizedString, LocalizedText } from './sanity.types';

export interface Movie {
  _id: string;
  title: LocalizedString;
  type: 'movie' | 'series';
  releaseDate: string;
  timelineDate: string;
  synopsis: LocalizedText;
  poster?: any;
  whereToWatch?: string[];
}
