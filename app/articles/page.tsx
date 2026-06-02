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

export default function ArticlesPage() {
  const sorted = [...ARTICLES].sort((a, b) =>
    a.publishedDate < b.publishedDate ? 1 : -1
  );

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-2xl font-bold text-navy mb-2">Safety Articles</h1>
      <p className="text-gray-600 text-sm mb-8 leading-relaxed">
        In-depth guides on how product recalls work, how to protect your family, and
        what to do when a recall affects something you own.
      </p>

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
