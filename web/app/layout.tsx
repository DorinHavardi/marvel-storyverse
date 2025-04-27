'use client';

import './globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { useLocales } from '@/hooks/useLocales.hook';
import { Navbar } from '@/components/Navigation/Navbar.cmp';

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { dir, lang } = useLocales();

  return (
    <html lang={lang} dir={dir}>
      <body>
        <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n={i18n}>
            <Navbar />
            {/* <main className="min-h-screen">{children}</main> */}
          </I18nextProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
