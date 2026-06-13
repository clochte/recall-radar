import type { MetadataRoute } from 'next';
import { getAllRecalls, getAllBrands, getAllStateCounts } from '@/lib/recalls';
import { ARTICLES } from '@/lib/articles';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://recallradar.company';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'hourly', priority: 1 },
    // Category pages
    { url: `${baseUrl}/food`, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${baseUrl}/food/meat`, changeFrequency: 'hourly', priority: 0.85 },
    { url: `${baseUrl}/food/allergens`, changeFrequency: 'hourly', priority: 0.85 },
    { url: `${baseUrl}/vehicles`, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${baseUrl}/medications`, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${baseUrl}/medications/class-i`, changeFrequency: 'hourly', priority: 0.85 },
    { url: `${baseUrl}/products`, changeFrequency: 'hourly', priority: 0.9 },
    { url: `${baseUrl}/products/children`, changeFrequency: 'hourly', priority: 0.85 },
    { url: `${baseUrl}/products/fire-hazards`, changeFrequency: 'hourly', priority: 0.85 },
    // Tools and features
    { url: `${baseUrl}/weekly`, changeFrequency: 'daily', priority: 0.85 },
    { url: `${baseUrl}/vin-lookup`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/stats`, changeFrequency: 'daily', priority: 0.7 },
    // Browse
    { url: `${baseUrl}/states`, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/brands`, changeFrequency: 'daily', priority: 0.75 },
    // Reference
    { url: `${baseUrl}/articles`, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/safety-guide`, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/glossary`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faq`, changeFrequency: 'monthly', priority: 0.65 },
    // Site info
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.55 },
    { url: `${baseUrl}/contact`, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/subscribe`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy`, changeFrequency: 'monthly', priority: 0.4 },
  ];

  const [recalls, brands, stateCounts] = await Promise.all([
    getAllRecalls(),
    getAllBrands(),
    getAllStateCounts(),
  ]);

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

  // Only include state pages that actually have recalls (empty states are noindexed)
  const stateRoutes: MetadataRoute.Sitemap = stateCounts
    .filter((s) => s.count > 0)
    .map((s) => ({
      url: `${baseUrl}/recalls/state/${s.slug}`,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    }));

  const articleRoutes: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${baseUrl}/articles/${a.slug}`,
    lastModified: new Date(a.lastReviewedDate ?? a.publishedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...recallRoutes, ...brandRoutes, ...stateRoutes, ...articleRoutes];
}
