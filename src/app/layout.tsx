import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jogjagem — AI Tourism Discovery',
  description: 'Discover Yogyakarta with AI-powered recommendations',
  icons: {
    icon: '/favicon-gold.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
