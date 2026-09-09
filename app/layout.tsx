import type { Metadata } from 'next';

import { assetPath } from './asset-path';
import './globals.css';

export const metadata: Metadata = {
  title: 'MONTAN.ME — Портфолио',
  description: 'Дизайн, творчество и перформанс MONTAN.ME.',
  icons: { icon: assetPath('/favicon.png') },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
