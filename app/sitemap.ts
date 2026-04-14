import type { MetadataRoute } from 'next';
import { getAllRecalls } from '@/lib/recalls';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://recallradar.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'hourly', priority: 1 },
    { url: `${baseUrl}/food`, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${baseUrl}/vehicles`, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${baseUrl}/medications`, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${baseUrl}/products`, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${baseUrl}/search`, changeFrequency: 'daily', priority: 0.7 },
    { url: `${baseUrl}/subscribe`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.5 },
  ];

  const recalls = await getAllRecalls();
  const recallRoutes: MetadataRoute.Sitemap = recalls.map((r) => ({
    url: `${baseUrl}/recalls/${r.category}/${r.slug}`,
    lastModified: new Date(r.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...recallRoutes];
}
