import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://jogjagem.com';

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${SITE_URL}/destinations`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  try {
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8081';
    const res = await fetch(`${API_BASE}/destinations`, { next: { revalidate: 3600 } });
    if (res.ok) {
      const body = await res.json();
      const list = body?.data || body || [];
      if (Array.isArray(list)) {
        const destinationPages: MetadataRoute.Sitemap = list.map((d: any) => {
          const name = d.name || d.Name || '';
          const id = d.id || d.ExternalID || '';
          const slug = toSlug(name) || id;
          return {
            url: `${SITE_URL}/destinations/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
          };
        });
        staticPages.push(...destinationPages);
      }
    }
  } catch {
    // If API is unreachable, return only static pages
  }

  return staticPages;
}
