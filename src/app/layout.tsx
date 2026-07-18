import type { Metadata } from 'next';
import './globals.css';
import { WebsiteJsonLd } from '@/components/JsonLd';
import I18nProvider from '@/contexts/I18nProvider';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://jogjagem.com';
const SITE_NAME = 'Jogjagem';
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8081';

const FALLBACK = {
  title: 'Jogjagem — Jelajahi Yogyakarta dengan AI',
  description: 'Temukan destinasi wisata terbaik di Yogyakarta dengan rekomendasi AI. Panduan lengkap Candi Prambanan, Malioboro, Pantai Parangtritis, Gunung Merapi, dan 100+ destinasi lainnya.',
  keywords: 'wisata Yogyakarta, jogja, travel guide Yogyakarta, destinasi wisata jogja, Candi Prambanan, Malioboro, Pantai Parangtritis, Gunung Merapi, AI tourism, paket wisata jogja',
  ogImage: '/og-default.png',
  twitterHandle: '@jogjagem',
};

async function fetchSiteConfig(): Promise<Record<string, string>> {
  try {
    const res = await fetch(`${API_BASE}/config/seo`, { next: { revalidate: 3600 } });
    if (!res.ok) return {};
    const body = await res.json();
    return body?.data || {};
  } catch {
    return {};
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const config = await fetchSiteConfig();

  const title = config.site_title || FALLBACK.title;
  const description = config.site_description || FALLBACK.description;
  const keywords = config.site_keywords || FALLBACK.keywords;
  const ogImage = config.og_default_image || FALLBACK.ogImage;
  const twitterHandle = config.twitter_handle || FALLBACK.twitterHandle;

  const keywordList = keywords.split(',').map(k => k.trim()).filter(Boolean);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s | ${SITE_NAME}`,
    },
    description,
    keywords: keywordList,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'id_ID',
      url: SITE_URL,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: twitterHandle,
    },
    icons: {
      icon: '/favicon-gold.png',
      apple: '/logo-gold-new.png',
    },
    alternates: {
      canonical: SITE_URL,
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <meta name="theme-color" content="#1a1533" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <WebsiteJsonLd />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
