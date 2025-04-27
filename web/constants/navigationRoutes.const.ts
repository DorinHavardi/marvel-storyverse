import { ENavigationLinks } from '@/enum/navigation.enum';

export const NAVIGATION_ROUTES = [
  {
    href: `/${ENavigationLinks.movies}`,
    labelKey: `navigation.${ENavigationLinks.movies}`,
  },
  {
    href: `/${ENavigationLinks.characters}`,
    labelKey: `navigation.${ENavigationLinks.characters}`,
  },
  {
    href: `/${ENavigationLinks.sagas}`,
    labelKey: `navigation.${ENavigationLinks.sagas}`,
  },
  {
    href: `/${ENavigationLinks.worlds}`,
    labelKey: `navigation.${ENavigationLinks.worlds}`,
  },
];
