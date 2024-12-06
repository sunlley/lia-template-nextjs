import type {Locale} from '@rainbow-me/rainbowkit';
import clsx from 'clsx';
// import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages,getTranslations} from 'next-intl/server';
import {ReactNode} from 'react';
import Providers from "@/app/providers";

import '@/styles/global.css';
import '@rainbow-me/rainbowkit/styles.css';
import '@mantine/core/styles.css';
// import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/nprogress/styles.css';

import '@/styles/overrite.css';

// const inter = Inter({subsets: ['latin']});

type Props = {
  children: ReactNode;
};

export async function generateMetadata(
    {params: {locale}}: { params: { locale: Locale } }
) {
    const t = await getTranslations({locale, namespace: 'Metadata'});
    return {
        title: t('title')
    };
}


export default async function LocaleLayout({children}: Props) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
      <html lang={locale}>
      <head>
          <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      </head>
      <body>
      <NextIntlClientProvider messages={messages}>
          <Providers locale={locale as Locale}>{children}</Providers>
      </NextIntlClientProvider>
      </body>
      </html>
  );
}
