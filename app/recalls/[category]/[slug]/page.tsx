import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getRecallBySlug, getRecallsByCategory } from '@/lib/recalls';
import { CATEGORY_LABELS } from '@/lib/types';
import type { RecallCategory } from '@/lib/types';
import { getHazardInfo } from '@/lib/hazard';
import UrgencyBadge from '@/components/UrgencyBadge';
import AdPlaceholder from '@/components/AdPlaceholder';
import ShareButton from '@/components/ShareButton';
import RecallCard from '@/components/RecallCard';

const VALID_CATEGORIES: RecallCategory[] = ['food', 'vehicles', 'medications', 'products'];

const WHAT_TO_DO: Record<RecallCategory, string[]> = {
  food: [
    'Stop consuming the product immediately.',
    'Check your pantry, fridge, or freezer for the recalled item.',
    'Do not donate the product — dispose of it or return to the store.',
    'Contact the manufacturer or retailer for a refund.',
  ],
  vehicles: [
    'Contact your dealership to schedule a free repair.',
    "Check NHTSA's website with your VIN to confirm if your vehicle is affected.",
    'Do not ignore the recall — safety defects can worsen over time.',
  ],
  medications: [
    'Stop taking the medication if it matches the recalled lot number.',
    'Contact your doctor or pharmacist before stopping any prescription.',
    'Return the product to your pharmacy for a refund or replacement.',
    "Call the manufacturer's hotline listed on the official recall notice.",
  ],
  products: [
    'Stop using the product immediately.',
    'Check the model number and date codes against the recall notice.',
    "Follow the manufacturer's instructions for return, repair, or refund.",
    'Keep children and pets away from the recalled item.',
  ],
};

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

  const categoryRecalls = await getRecallsByCategory(recall.category as RecallCategory);
  const related = categoryRecalls.filter((r) => r.slug !== recall.slug).slice(0, 3);

  const pageUrl = `${process.env.NEXT_PUBLIC_BASE_URL ?? 'https://recallradar.company'}/recalls/${recall.category}/${recall.slug}`;

  const formattedDate = new Date(recall.date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="flex gap-6 items-start">
      <div className="flex-1 min-w-0">
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

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 mb-6">
          <p className="text-sm font-semibold text-navy mb-2">What to do if you&apos;re affected</p>
          <ul className="space-y-1.5">
            {WHAT_TO_DO[recall.category].map((step, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-blue-500 font-bold mt-0.5">→</span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        {(() => {
          const hazard = getHazardInfo(recall);
          if (!hazard) return null;
          return (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
              <p className="text-sm font-semibold text-navy mb-2">{hazard.title}</p>
              <p className="text-sm text-gray-700 leading-relaxed">{hazard.body}</p>
              {hazard.tip && (
                <p className="text-sm text-amber-800 mt-3 font-medium">
                  ⚠ {hazard.tip}
                </p>
              )}
            </div>
          );
        })()}

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
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'NewsArticle',
                headline: recall.title,
                datePublished: recall.date,
                dateModified: recall.date,
                description: recall.reason.slice(0, 160),
                url: pageUrl,
                publisher: {
                  '@type': 'Organization',
                  name: 'Recall Radar',
                  url: 'https://recallradar.company',
                },
                author: {
                  '@type': 'Organization',
                  name: 'Recall Radar',
                },
                about: recall.brand
                  ? { '@type': 'Brand', name: recall.brand }
                  : undefined,
                articleSection: CATEGORY_LABELS[recall.category],
                keywords: `recall, ${recall.category}, ${recall.brand ?? ''}, safety alert`,
              },
              {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://recallradar.company' },
                  { '@type': 'ListItem', position: 2, name: CATEGORY_LABELS[recall.category], item: `https://recallradar.company/${recall.category}` },
                  { '@type': 'ListItem', position: 3, name: recall.title, item: pageUrl },
                ],
              },
            ]),
          }}
        />
      </article>

      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="text-base font-semibold text-navy mb-3">Related Recalls</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {related.map((r) => (
              <RecallCard key={r.id} recall={r} />
            ))}
          </div>
        </div>
      )}

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
      </div>
      <aside className="hidden lg:block w-[300px] shrink-0 pt-20">
        <AdPlaceholder slot="sidebar" />
      </aside>
    </div>
  );
}
