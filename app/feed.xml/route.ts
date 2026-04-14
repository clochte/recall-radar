import { getAllRecalls } from '@/lib/recalls';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://recallradar.company';
  const recalls = await getAllRecalls();
  const top50 = recalls.slice(0, 50);

  const items = top50
    .map((recall) => {
      const link = `${baseUrl}/recalls/${recall.category}/${recall.slug}`;
      const pubDate = new Date(recall.date).toUTCString();
      const description = recall.reason.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const title = recall.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return `
    <item>
      <title>${title}</title>
      <link>${link}</link>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${link}</guid>
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Recall Radar</title>
    <link>${baseUrl}</link>
    <description>Safety recalls and alerts from FDA, NHTSA, and CPSC</description>
    <language>en-us</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
