import type { MetadataRoute } from 'next';
import { getAllRecalls, getAllBrands, US_STATES } from '@/lib/recalls';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://recallradar.company';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'hourly', priority: 1 },
    { url: `${baseUrl}/food`, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${baseUrl}/vehicles`, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${baseUrl}/medications`, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${baseUrl}/products`, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${baseUrl}/weekly`, changeFrequency: 'daily', priority: 0.85 },
    { url: `${baseUrl}/states`, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/brands`, changeFrequency: 'daily', priority: 0.75 },
    { url: `${baseUrl}/search`, changeFrequency: 'daily', priority: 0.7 },
    { url: `${baseUrl}/faq`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/subscribe`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, changeFrequency: 'monthly', priority: 0.4 },
  ];

  const [recalls, brands] = await Promise.all([getAllRecalls(), getAllBrands()]);

  const recallRoutes: MetadataRoute.Sitemap = recalls.map((r) => ({
    url: `${baseUrl}/recalls/${r.category}/${r.slug}`,
    lastModified: new Date(r.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const brandRoutes: MetadataRoute.Sitemap = brands.map((b) => ({
    url: `${baseUrl}/brands/${b.slug}`,
    changeFrequency: 'daily',
    priority: 0.65,
  }));

  const stateRoutes: MetadataRoute.Sitemap = US_STATES.map((s) => ({
    url: `${baseUrl}/recalls/state/${s.slug}`,
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  return [...staticRoutes, ...recallRoutes, ...brandRoutes, ...stateRoutes];
}
