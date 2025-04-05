import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '~/utils/providers';
import { Header } from '~/components/layout';
import { satoshi, clashGrotesk } from '~/fonts';

export const metadata: Metadata = {
  title: 'Bytearoo',
  description: 'Transforming Business with Creativity and Precision',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${satoshi.variable} ${clashGrotesk.variable}`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
