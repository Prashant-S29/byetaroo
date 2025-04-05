// Local Fonts
import localFont from 'next/font/local';

export const clashGrotesk = localFont({
  src: [
    {
      path: './clashGrotesk/clashGrotesk.ttf',
    },
  ],
  variable: '--font-clash-grotesk',
});

export const satoshi = localFont({
  src: [
    {
      path: './satoshi/satoshi-regular.otf',
      weight: '400',
    },
    {
      path: './satoshi/satoshi-medium.otf',
      weight: '500',
    },
  ],
  variable: '--font-satoshi',
});
