import type { Metadata } from 'next';

import { siteCopy } from '../../i18n';
import { PortfolioPage } from '../../portfolio-page';

export const dynamic = 'force-static';

const siteUrl = 'https://pxl-head.github.io/montan-me-portfolio/';
const copy = siteCopy.en.meta;

export const metadata: Metadata = {
  metadataBase: new URL('https://pxl-head.github.io'),
  applicationName: 'MONTAN.ME',
  creator: 'Timur Montan',
  category: 'portfolio',
  icons: { icon: '/montan-me-portfolio/favicon.png' },
  title: copy.title,
  description: copy.description,
  alternates: {
    canonical: `${siteUrl}en/`,
    languages: {
      ru: siteUrl,
      en: `${siteUrl}en/`,
      'x-default': siteUrl,
    },
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}en/`,
    siteName: 'MONTAN.ME',
    locale: 'en_US',
    alternateLocale: ['ru_RU'],
    title: copy.title,
    description: copy.description,
    images: [
      {
        url: `${siteUrl}media/cover.webp`,
        width: 2200,
        height: 1555,
        alt: siteCopy.en.hero.alt,
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

export default function EnglishHome() {
  return <PortfolioPage language="en" />;
}
