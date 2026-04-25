import type {Metadata} from 'next';
import { Nunito } from 'next/font/google';
import './globals.css'; // Global styles

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Nursery Dream',
  description: 'A sanctuary for the world\'s newest arrivals.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={nunito.variable}>
      <body suppressHydrationWarning className="font-sans">{children}</body>
    </html>
  );
}
