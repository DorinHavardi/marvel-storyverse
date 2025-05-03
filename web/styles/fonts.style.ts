// config/fonts.ts
import { Anton, Assistant } from 'next/font/google';

export const assistant = Assistant({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
});

export const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});
