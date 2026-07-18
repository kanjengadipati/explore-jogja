import type { Metadata } from 'next';
import EventsPageClient from '@/components/EventsPageClient';

export const metadata: Metadata = {
  title: 'Events & Festivals — Jogjagem',
  description: 'Temukan acara dan festival menarik di Yogyakarta. Cultural shows, seasonal highlights, dan perayaan lokal.',
  openGraph: {
    title: 'Events & Festivals — Jogjagem',
    description: 'Temukan acara dan festival menarik di Yogyakarta. Cultural shows, seasonal highlights, dan perayaan lokal.',
    type: 'website',
  },
};

export default function EventsPage() {
  return <EventsPageClient />;
}
