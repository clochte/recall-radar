'use client';

import { useState, useMemo } from 'react';
import type { Recall, RecallCategory } from '@/lib/types';
import { CATEGORY_LABELS } from '@/lib/types';
import RecallGrid from './RecallGrid';

const DATE_OPTIONS = [
  { label: 'Last 7 days', days: 7 },
  { label: 'Last 30 days', days: 30 },
  { label: 'Last 90 days', days: 90 },
  { label: 'All time', days: 0 },
];

const CATEGORIES: RecallCategory[] = ['food', 'vehicles', 'medications', 'products'];

export default function RecallsExplorer({ recalls }: { recalls: Recall[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<RecallCategory | 'all'>('all');
  const [days, setDays] = useState(30);

  const filtered = useMemo(() => {
    const cutoff = days > 0 ? Date.now() - days * 86400000 : 0;
    const q = query.toLowerCase().trim();

    return recalls.filter((r) => {
      if (category !== 'all' && r.category !== category) return false;
      if (cutoff && new Date(r.date).getTime() < cutoff) return false;
      if (q && !`${r.title} ${r.reason} ${r.brand ?? ''}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [recalls, query, category, days]);

  return (
    <div>
      {/* Filters */}
      <div className="bg-card border border-border rounded-lg p-4 mb-6 flex flex-col sm:flex-row gap-3">
        <input
          type="search"
          placeholder="Search recalls…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-navy-light"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as RecallCategory | 'all')}
          className="px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-navy-light bg-white"
        >
          <option value="all">All Categories</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{CATEGORY_LABELS[c]}</option>
          ))}
        </select>
        <select
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          className="px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-navy-light bg-white"
        >
          {DATE_OPTIONS.map((o) => (
            <option key={o.days} value={o.days}>{o.label}</option>
          ))}
        </select>
      </div>

      <p className="text-sm text-muted mb-4">
        Showing <strong>{filtered.length}</strong> recall{filtered.length !== 1 ? 's' : ''}
      </p>

      <RecallGrid recalls={filtered} />
    </div>
  );
}
