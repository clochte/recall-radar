import { Fragment } from 'react';
import type { Recall } from '@/lib/types';
import RecallCard from './RecallCard';
import AdPlaceholder from './AdPlaceholder';

interface Props {
  recalls: Recall[];
  showAds?: boolean;
}

export default function RecallGrid({ recalls, showAds = true }: Props) {
  if (!recalls.length) {
    return (
      <div className="py-16 text-center text-muted">
        <p className="text-lg font-medium">No recalls found.</p>
        <p className="text-sm mt-1">Check back later or try a different filter.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {recalls.map((recall, i) => (
        <Fragment key={recall.id}>
          <RecallCard recall={recall} />
          {showAds && (i + 1) % 5 === 0 && i < recalls.length - 1 && (
            <div className="sm:col-span-2 xl:col-span-3">
              <AdPlaceholder slot="in-feed" />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
