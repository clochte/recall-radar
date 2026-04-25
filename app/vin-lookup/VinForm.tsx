'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function VinForm({ initialVin }: { initialVin: string }) {
  const [vin, setVin] = useState(initialVin);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = vin.trim().toUpperCase();
    if (!cleaned) return;
    router.push(`/vin-lookup?vin=${encodeURIComponent(cleaned)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={vin}
        onChange={(e) => setVin(e.target.value.toUpperCase())}
        placeholder="Enter 17-character VIN…"
        maxLength={17}
        className="flex-1 px-4 py-3 border border-border rounded-md text-sm font-mono focus:outline-none focus:ring-2 focus:ring-navy-light"
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="characters"
      />
      <button
        type="submit"
        disabled={vin.trim().length !== 17}
        className="px-5 py-3 bg-navy text-white font-semibold rounded-md text-sm hover:bg-navy-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Check VIN
      </button>
    </form>
  );
}
