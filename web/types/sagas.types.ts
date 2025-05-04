import { MovieType } from './movies.types';
import { LocalizedStringType, LocalizedTextType } from './sanity.types';

export interface SagaType {
  _id: string;
  name: LocalizedStringType;
  description: LocalizedTextType;
  movies: MovieType[];
  phases: PhaseType[];
}

export interface PhaseType {
  _id: string;
  name: string;
  description: LocalizedTextType;
  movies: MovieType[];
}
