export type LanguageType = 'en' | 'he';

export type LocalizedStringType = {
  [key in LanguageType]: string;
};

export type LocalizedTextType = {
  [key in LanguageType]: string;
};
