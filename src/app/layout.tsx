import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MENSWEAR - Premium Men\'s Clothing Store',
  description: 'Discover premium men\'s clothing collection including casual wear, formal attire, traditional clothing, and seasonal wear. Shop the latest trends in men\'s fashion.',
  keywords: 'men\'s clothing, fashion, shirts, trousers, formal wear, casual wear, traditional wear, men\'s fashion store',
  authors: [{ name: 'MENSWEAR' }],
  openGraph: {
    title: 'MENSWEAR - Premium Men\'s Clothing Store',
    description: 'Discover premium men\'s clothing collection including casual wear, formal attire, traditional clothing, and seasonal wear.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}