'use client';

import './globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { useLocales } from '@/hooks/useLocales.hook';
import { Navbar } from '@/components/Navigation/Navbar.cmp';
import { assistant } from '@/styles/fonts.style';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { dir, lang } = useLocales();

  return (
    <html lang={lang} dir={dir} suppressHydrationWarning={true}>
      <body className={`${assistant.className} min-h-screen overflow-x-hidden`}>
        <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n={i18n}>
            <Navbar />
            <AnimatePresence mode="wait">
              <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative z-0"
              >
                <main className="relative z-0 pt-16">{children}</main>
              </motion.div>
            </AnimatePresence>
          </I18nextProvider>
          {process.env.NODE_ENV === 'development' && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
        </QueryClientProvider>
      </body>
    </html>
  );
}
