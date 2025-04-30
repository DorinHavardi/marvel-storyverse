import { ELanguages } from '@/enum/locale.enum';

export type LocalizedStringType = {
  [key in ELanguages]: string;
};

export type LocalizedTextType = {
  [key in ELanguages]: string;
};
