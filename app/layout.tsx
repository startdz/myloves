import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/widgets/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Loves',
  description: 'Web Application for my love',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-gradient-to-t from-purple-400 via-rose-400 to-violet-600 dark:bg-slate-900`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <header className='relative'>
            <div className='fixed bottom-10 right-8'>
              <Nav />
            </div>
          </header>
          {children}
          <footer></footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
