import Parser from 'rss-parser';
import { cacheLife } from 'next/cache';
import type { Recall, RecallSeverity } from '../types';
import { generateSlug } from '../slug';

const CPSC_RSS = 'https://www.cpsc.gov/Newsroom/CPSC-RSS-Feed/Recalls-RSS';

export async function getProductRecalls(): Promise<Recall[]> {
  'use cache';
  cacheLife('hours');

  try {
    const parser = new Parser();
    const feed = await parser.parseURL(CPSC_RSS);

    return feed.items.map((item) => {
      const title = item.title ?? 'Unknown Product Recall';
      const date = item.isoDate ?? item.pubDate ?? new Date().toISOString();
      const isoDate = toISODate(date);
      const description = item.contentSnippet ?? item.content ?? '';

      return {
        id: item.guid ?? generateSlug(title, isoDate),
        slug: generateSlug(title, isoDate),
        category: 'products',
        title,
        reason: description.slice(0, 300),
        date: isoDate,
        severity: detectSeverity(title, description),
        sourceUrl: item.link ?? 'https://www.cpsc.gov/recalls',
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

function detectSeverity(title: string, description: string): RecallSeverity {
  const text = `${title} ${description}`.toLowerCase();
  if (
    text.includes('fire') ||
    text.includes('burn') ||
    text.includes('lacerat') ||
    text.includes('death') ||
    text.includes('injur') ||
    text.includes('electrocut') ||
    text.includes('strangulat') ||
    text.includes('choking')
  ) {
    return 'urgent';
  }
  if (text.includes('voluntary')) {
    return 'voluntary';
  }
  return 'unknown';
}
