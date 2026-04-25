import { getRecallsByCategory } from '@/lib/recalls';
import { CATEGORY_LABELS } from '@/lib/types';
import type { RecallCategory } from '@/lib/types';

const VALID: RecallCategory[] = ['food', 'vehicles', 'medications', 'products'];

const DESCRIPTIONS: Record<RecallCategory, string> = {
  food: 'Food safety recalls from the FDA and USDA FSIS — including allergen alerts, pathogen contamination, and labeling violations.',
  vehicles: 'Vehicle safety recalls from NHTSA covering cars, trucks, motorcycles, and child car seats.',
  medications: 'Drug and medication recalls from the FDA for contamination, potency issues, and labeling errors.',
  products: 'Consumer product recalls from the CPSC covering household items, toys, electronics, and appliances.',
};

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;

  if (!VALID.includes(category as RecallCategory)) {
    return new Response('Not found', { status: 404 });
  }

  const cat = category as RecallCategory;
  const recalls = await getRecallsByCategory(cat);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://recallradar.company';

  const items = recalls
    .slice(0, 50)
    .map((recall) => {
      const link = `${baseUrl}/recalls/${recall.category}/${recall.slug}`;
      const pubDate = new Date(recall.date).toUTCString();
      const description = escapeXml(recall.rawDescription || recall.reason);
      const title = escapeXml(recall.title);
      const brand = recall.brand ? `<author>${escapeXml(recall.brand)}</author>` : '';
      return `
    <item>
      <title>${title}</title>
      <link>${link}</link>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${link}</guid>
      <category>${cat}</category>
      ${brand}
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Recall Radar — ${CATEGORY_LABELS[cat]} Recalls</title>
    <link>${baseUrl}/${cat}</link>
    <atom:link href="${baseUrl}/feed/${cat}" rel="self" type="application/rss+xml" />
    <description>${DESCRIPTIONS[cat]}</description>
    <language>en-us</language>
    <ttl>60</ttl>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
