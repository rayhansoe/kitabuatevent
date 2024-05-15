import './globals.css';
import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';
import React from 'react';
import { ThemeProvider } from '@/components/shared/navbar/theme-provider';
import SiteHeader from '@/components/shared/navbar/site-header';
import { TailwindIndicator } from '@/components/shared/navbar/tailwind-indicator';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { getSession } from '@/lib';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // const data = await fetch('http://localhost:8000/api/users', {
  //   headers: { Cookie: cookies().toString() }
  // })

  const session = await getSession()

  // const users = await data.json()

  // console.log(users);
  console.log(session);

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'bg-slate-50 dark:bg-slate-950 min-h-screen font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
