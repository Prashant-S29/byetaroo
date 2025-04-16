import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '~/utils/providers';
import { Footer, Header } from '~/components/layout';
import { satoshi, clashGrotesk } from '~/fonts';
// import { Cursor } from '~/components/common/Cursor/Cursor';

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
          {/* <Cursor /> */}
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
