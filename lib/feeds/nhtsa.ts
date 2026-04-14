import Parser from 'rss-parser';
import { cacheLife } from 'next/cache';
import type { Recall } from '../types';
import { generateSlug } from '../slug';

const NHTSA_RSS = 'https://www.nhtsa.gov/rss/nhtsa-recalls.rss';

export async function getVehicleRecalls(): Promise<Recall[]> {
  'use cache';
  cacheLife('hours');

  try {
    const parser = new Parser();
    const feed = await parser.parseURL(NHTSA_RSS);

    return feed.items.map((item) => {
      const title = item.title ?? 'Unknown Vehicle Recall';
      const date = item.isoDate ?? item.pubDate ?? new Date().toISOString();
      const isoDate = toISODate(date);
      const description = item.contentSnippet ?? item.content ?? '';

      return {
        id: item.guid ?? generateSlug(title, isoDate),
        slug: generateSlug(title, isoDate),
        category: 'vehicles',
        title,
        reason: description.slice(0, 300),
        date: isoDate,
        severity: 'urgent', // NHTSA safety recalls are always safety-critical
        sourceUrl: item.link ?? 'https://www.nhtsa.gov/vehicle-safety/recalls',
        rawDescription: description,
      };
    });
  } catch {
    return [];
  }
}

function toISODate(dateStr: string): string {
  try {
    return new Date(dateStr).toISOString();
  } catch {
    return new Date().toISOString();
  }
}
