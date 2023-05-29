import { Raleway } from 'next/font/google';
import { Domine } from 'next/font/google';

export const raleway = Raleway({
  weight: ['400', '600', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const domine = Domine({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
