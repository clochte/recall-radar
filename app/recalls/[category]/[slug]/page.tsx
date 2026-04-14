import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getRecallBySlug, getRecallsByCategory } from '@/lib/recalls';
import { CATEGORY_LABELS } from '@/lib/types';
import type { RecallCategory } from '@/lib/types';
import UrgencyBadge from '@/components/UrgencyBadge';
import AdPlaceholder from '@/components/AdPlaceholder';
import ShareButton from '@/components/ShareButton';

const VALID_CATEGORIES: RecallCategory[] = ['food', 'vehicles', 'medications', 'products'];

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  if (!VALID_CATEGORIES.includes(category as RecallCategory)) return {};

  const recall = await getRecallBySlug(category as RecallCategory, slug);
  if (!recall) return { title: 'Recall Not Found' };

  return {
    title: recall.title,
    description: recall.reason.slice(0, 160),
    openGraph: {
      title: `${recall.title} | Recall Radar`,
      description: recall.reason.slice(0, 160),
      type: 'article',
      publishedTime: recall.date,
    },
  };
}

export async function generateStaticParams() {
  const categories: RecallCategory[] = ['food', 'vehicles', 'medications', 'products'];
  const results = await Promise.allSettled(
    categories.map((cat) => getRecallsByCategory(cat))
  );

  return results.flatMap((result, i) => {
    if (result.status !== 'fulfilled') return [];
    return result.value.slice(0, 20).map((r) => ({
      category: categories[i],
      slug: r.slug,
    }));
  });
}

export default async function RecallDetailPage({ params }: Props) {
  const { category, slug } = await params;

  if (!VALID_CATEGORIES.includes(category as RecallCategory)) {
    notFound();
  }

  const recall = await getRecallBySlug(category as RecallCategory, slug);
  if (!recall) notFound();

  const pageUrl = `${process.env.NEXT_PUBLIC_BASE_URL ?? 'https://recallradar.company'}/recalls/${recall.category}/${recall.slug}`;

  const formattedDate = new Date(recall.date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="max-w-2xl mx-auto py-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted mb-4 flex items-center gap-1.5">
        <Link href="/" className="hover:text-navy">Home</Link>
        <span>/</span>
        <Link href={`/${recall.category}`} className="hover:text-navy capitalize">
          {CATEGORY_LABELS[recall.category]}
        </Link>
        <span>/</span>
        <span className="text-foreground truncate">{recall.title.slice(0, 40)}…</span>
      </nav>

      <article>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <UrgencyBadge severity={recall.severity} />
          <span className="text-xs text-muted uppercase tracking-wide font-medium">
            {CATEGORY_LABELS[recall.category]}
          </span>
        </div>

        <h1 className="text-xl font-bold text-navy leading-snug mb-2">
          {recall.title}
        </h1>

        {recall.brand && (
          <p className="text-gray-600 text-sm mb-4">
            <span className="font-medium">Manufacturer / Brand:</span> {recall.brand}
          </p>
        )}

        <div className="bg-card border border-border rounded-lg p-5 space-y-4 mb-6">
          <div>
            <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">Reason for Recall</p>
            <p className="text-gray-700 text-sm leading-relaxed">{recall.rawDescription || recall.reason}</p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-0.5">Date Issued</p>
              <time dateTime={recall.date} className="text-gray-700">{formattedDate}</time>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-0.5">Category</p>
              <p className="text-gray-700">{CATEGORY_LABELS[recall.category]}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-0.5">Status</p>
              <p className="text-gray-700 capitalize">{recall.severity}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 flex-wrap items-center">
          <a
            href={recall.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-navy text-white font-semibold rounded-md hover:bg-navy-light transition-colors text-sm"
          >
            View Official Recall Notice →
          </a>
          <ShareButton title={recall.title} url={pageUrl} />
        </div>

        <p className="text-xs text-muted mt-3">
          Opens the official government source. Always refer to official sources for the most current information.
        </p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: recall.title,
              datePublished: recall.date,
              description: recall.reason.slice(0, 160),
              publisher: {
                '@type': 'Organization',
                name: 'Recall Radar',
                url: 'https://recallradar.company',
              },
            }),
          }}
        />
      </article>

      <div className="mt-10">
        <AdPlaceholder slot="recall-bottom" />
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <Link
          href={`/${recall.category}`}
          className="text-sm text-navy-light hover:underline"
        >
          ← View all {CATEGORY_LABELS[recall.category]} recalls
        </Link>
      </div>
    </div>
  );
}
