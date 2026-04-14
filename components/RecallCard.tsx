import Link from 'next/link';
import type { Recall } from '@/lib/types';
import { CATEGORY_LABELS, CATEGORY_COLORS } from '@/lib/types';
import UrgencyBadge from './UrgencyBadge';

export default function RecallCard({ recall }: { recall: Recall }) {
  const formattedDate = new Date(recall.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className="bg-white border border-border rounded-lg p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
      <div className="flex flex-wrap items-center gap-2">
        <UrgencyBadge severity={recall.severity} />
        <span
          className={`text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded ${CATEGORY_COLORS[recall.category]}`}
        >
          {CATEGORY_LABELS[recall.category]}
        </span>
      </div>

      <div>
        <h3 className="font-semibold text-navy text-base leading-snug line-clamp-2">
          {recall.title}
        </h3>
        {recall.brand && (
          <p className="text-sm text-muted mt-0.5">{recall.brand}</p>
        )}
      </div>

      {recall.reason && (
        <p className="text-sm text-gray-600 line-clamp-3">{recall.reason}</p>
      )}

      <div className="flex items-center justify-between mt-auto pt-1">
        <time className="text-xs text-muted" dateTime={recall.date}>
          {formattedDate}
        </time>
        <Link
          href={`/recalls/${recall.category}/${recall.slug}`}
          className="text-sm font-medium text-navy-light hover:text-navy underline-offset-2 hover:underline"
        >
          View recall →
        </Link>
      </div>
    </article>
  );
}
