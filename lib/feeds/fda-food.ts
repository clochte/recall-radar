import Parser from 'rss-parser';
import { cacheLife } from 'next/cache';
import type { Recall, RecallSeverity } from '../types';
import { generateSlug } from '../slug';

const FDA_FOOD_RSS =
  'https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/food-safety-recalls/rss.xml';

export async function getFoodRecalls(): Promise<Recall[]> {
  'use cache';
  cacheLife('hours');

  try {
    const parser = new Parser();
    const feed = await parser.parseURL(FDA_FOOD_RSS);

    return feed.items.map((item) => {
      const title = item.title ?? 'Unknown Recall';
      const date = item.isoDate ?? item.pubDate ?? new Date().toISOString();
      const isoDate = toISODate(date);
      const description = item.contentSnippet ?? item.content ?? '';

      return {
        id: item.guid ?? generateSlug(title, isoDate),
        slug: generateSlug(title, isoDate),
        category: 'food',
        title,
        reason: description.slice(0, 300),
        date: isoDate,
        severity: detectSeverity(title, description),
        sourceUrl: item.link ?? FDA_FOOD_RSS,
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
    text.includes('class i') ||
    text.includes('listeria') ||
    text.includes('salmonella') ||
    text.includes('e. coli') ||
    text.includes('undeclared') ||
    text.includes('allergen')
  ) {
    return 'urgent';
  }
  if (text.includes('voluntary') || text.includes('class iii')) {
    return 'voluntary';
  }
  return 'unknown';
}
