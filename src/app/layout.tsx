import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Layout } from '@/components';

const helvetica = localFont({
  src: [
    {
      path: './fonts/HelveticaNeueLight.otf',
      weight: '300',
    },
    {
      path: './fonts/HelveticaNeueRoman.otf',
      weight: '400',
    },
    {
      path: './fonts/HelveticaNeueMedium.otf',
      weight: '500',
    },
  ],
  variable: '--font-helvetica',
});

export const metadata: Metadata = {
  title: 'Freelaancer',
  description: 'Create, Innovate, Connect',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helvetica.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
