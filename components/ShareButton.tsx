'use client';

import { useState } from 'react';

interface ShareButtonProps {
  title: string;
  url: string;
}

export default function ShareButton({ title, url }: ShareButtonProps) {
  const [label, setLabel] = useState('Share');

  async function handleClick() {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // User cancelled or share failed — do nothing
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setLabel('Copied!');
      setTimeout(() => setLabel('Share'), 2000);
    } catch {
      // Clipboard failed silently
    }
  }

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 border border-border rounded-md text-sm font-medium text-navy hover:bg-card transition-colors"
    >
      {label}
    </button>
  );
}
