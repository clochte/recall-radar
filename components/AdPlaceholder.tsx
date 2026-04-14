'use client';

import { useEffect } from 'react';

type AdSlot = 'header-below' | 'sidebar' | 'in-feed' | 'recall-bottom';

const slotStyles: Record<AdSlot, string> = {
  'header-below': 'w-full h-[90px]',
  sidebar: 'w-[300px] h-[600px] hidden lg:block',
  'in-feed': 'w-full h-[90px]',
  'recall-bottom': 'w-full h-[250px]',
};

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdPlaceholder({ slot }: { slot: AdSlot }) {
  const id = process.env.NEXT_PUBLIC_ADSENSE_ID;
  const isReal = id && id !== 'ca-pub-PLACEHOLDER';

  useEffect(() => {
    if (!isReal) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // adsbygoogle not loaded yet
    }
  }, [isReal]);

  if (isReal) {
    return (
      <div className={slotStyles[slot]}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={id}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // Development / pre-approval: placeholder box
  return (
    <div
      className={`${slotStyles[slot]} flex items-center justify-center bg-gray-100 border border-dashed border-gray-300 text-muted text-xs rounded`}
    >
      Ad — {slot}
    </div>
  );
}
