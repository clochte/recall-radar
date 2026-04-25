import { getAllRecalls } from '@/lib/recalls';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://recallradar.company';
  const recalls = await getAllRecalls();
  const top50 = recalls.slice(0, 50);

  function escapeXml(str: string) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  const items = top50
    .map((recall) => {
      const link = `${baseUrl}/recalls/${recall.category}/${recall.slug}`;
      const pubDate = new Date(recall.date).toUTCString();
      const description = escapeXml(recall.rawDescription || recall.reason);
      const title = escapeXml(recall.title);
      return `
    <item>
      <title>${title}</title>
      <link>${link}</link>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${link}</guid>
      <category>${recall.category}</category>
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Recall Radar — All Safety Recalls</title>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Safety recalls and alerts from FDA, NHTSA, USDA, and CPSC — updated every few hours.</description>
    <language>en-us</language>
    <ttl>60</ttl>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
