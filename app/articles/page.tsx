import type { Metadata } from 'next';
import Link from 'next/link';
import { ARTICLES } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Recall Safety Articles — Recall Radar',
  description:
    'In-depth guides on food safety, vehicle recalls, medication recalls, and consumer product safety. Learn how recalls work and how to protect yourself and your family.',
};

function formatDate(iso: string): string {
  return new Date(iso + 'T12:00:00Z').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const CATEGORY_COLORS: Record<string, string> = {
  'Food Safety': 'bg-green-100 text-green-800',
  'Vehicle Safety': 'bg-blue-100 text-blue-800',
  'Medication Safety': 'bg-purple-100 text-purple-800',
  'Consumer Products': 'bg-orange-100 text-orange-800',
  'Consumer Safety': 'bg-gray-100 text-gray-700',
};

const CATEGORY_COUNTS = (articles: typeof ARTICLES) => {
  const counts: Record<string, number> = {};
  for (const a of articles) {
    counts[a.category] = (counts[a.category] ?? 0) + 1;
  }
  return counts;
};

export default function ArticlesPage() {
  const sorted = [...ARTICLES].sort((a, b) =>
    a.publishedDate < b.publishedDate ? 1 : -1
  );
  const counts = CATEGORY_COUNTS(ARTICLES);
  const totalMinutes = ARTICLES.reduce((s, a) => s + a.readingMinutes, 0);

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-2xl font-bold text-navy mb-3">Safety Articles</h1>

      <div className="bg-card border border-border rounded-lg p-5 mb-8 text-sm text-gray-700 leading-relaxed space-y-3">
        <p>
          These articles explain how the U.S. recall system works — not just that a product was recalled,
          but why recalls happen, how agencies investigate defects, what your rights are, and what to
          actually do when a recall affects something you own. They are written to be factual and specific,
          without repeating the generic advice that doesn't help when you're trying to figure out whether
          you need to see a doctor or whether your car is safe to drive.
        </p>
        <p>
          Topics span food safety, vehicle recalls, medication recalls, and consumer product hazards.
          {Object.keys(counts).length > 0 && (
            <span className="text-muted"> Currently {ARTICLES.length} articles — {totalMinutes} minutes of reading across {Object.keys(counts).length} topic areas.</span>
          )}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([cat, count]) => (
            <span key={cat} className={`text-xs px-2 py-0.5 rounded-full font-medium ${CATEGORY_COLORS[cat] ?? 'bg-gray-100 text-gray-700'}`}>
              {cat} ({count})
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        {sorted.map((article) => (
          <article
            key={article.slug}
            className="bg-card border border-border rounded-xl p-5 hover:border-navy transition-colors"
          >
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  CATEGORY_COLORS[article.category] ?? 'bg-gray-100 text-gray-700'
                }`}
              >
                {article.category}
              </span>
              <span className="text-xs text-muted">{formatDate(article.publishedDate)}</span>
              <span className="text-xs text-muted">{article.readingMinutes} min read</span>
            </div>

            <h2 className="font-bold text-navy mb-2 leading-snug">
              <Link href={`/articles/${article.slug}`} className="hover:underline">
                {article.title}
              </Link>
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
              {article.intro}
            </p>

            <Link
              href={`/articles/${article.slug}`}
              className="mt-3 inline-block text-xs font-semibold text-navy-light hover:underline"
            >
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
