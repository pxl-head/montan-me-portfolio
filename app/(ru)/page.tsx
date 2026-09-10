import type { Metadata } from 'next';

import { siteCopy } from '../i18n';
import { PortfolioPage } from '../portfolio-page';

export const dynamic = 'force-static';

const siteUrl = 'https://pxl-head.github.io/montan-me-portfolio/';
const copy = siteCopy.ru.meta;

export const metadata: Metadata = {
  metadataBase: new URL('https://pxl-head.github.io'),
  applicationName: 'MONTAN.ME',
  creator: 'Timur Montan',
  category: 'portfolio',
  icons: { icon: '/montan-me-portfolio/favicon.png' },
  title: copy.title,
  description: copy.description,
  alternates: {
    canonical: siteUrl,
    languages: {
      ru: siteUrl,
      en: `${siteUrl}en/`,
      'x-default': siteUrl,
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'MONTAN.ME',
    locale: 'ru_RU',
    alternateLocale: ['en_US'],
    title: copy.title,
    description: copy.description,
    images: [
      {
        url: `${siteUrl}media/cover.webp`,
        width: 2200,
        height: 1555,
        alt: siteCopy.ru.hero.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: copy.title,
    description: copy.description,
    images: [`${siteUrl}media/cover.webp`],
  },
};

export default function Home() {
  return <PortfolioPage language="ru" />;
}
