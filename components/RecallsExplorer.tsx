'use client';

import { useState, useMemo, useEffect } from 'react';
import type { Recall, RecallCategory, RecallSeverity } from '@/lib/types';
import { CATEGORY_LABELS } from '@/lib/types';
import RecallGrid from './RecallGrid';

const DATE_OPTIONS = [
  { label: 'Last 7 days', days: 7 },
  { label: 'Last 30 days', days: 30 },
  { label: 'Last 90 days', days: 90 },
  { label: 'All time', days: 0 },
];

const CATEGORIES: RecallCategory[] = ['food', 'vehicles', 'medications', 'products'];

const SEVERITY_OPTIONS: { label: string; value: RecallSeverity | 'all' }[] = [
  { label: 'All Severity', value: 'all' },
  { label: 'Urgent (Class I)', value: 'urgent' },
  { label: 'Voluntary', value: 'voluntary' },
];

export default function RecallsExplorer({ recalls }: { recalls: Recall[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<RecallCategory | 'all'>('all');
  const [severity, setSeverity] = useState<RecallSeverity | 'all'>('all');
  const [days, setDays] = useState(30);

  const filtered = useMemo(() => {
    const cutoff = days > 0 ? Date.now() - days * 86400000 : 0;
    const q = query.toLowerCase().trim();

    return recalls.filter((r) => {
      if (category !== 'all' && r.category !== category) return false;
      if (severity !== 'all' && r.severity !== severity) return false;
      if (cutoff && new Date(r.date).getTime() < cutoff) return false;
      if (q && !`${r.title} ${r.reason} ${r.brand ?? ''}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [recalls, query, category, severity, days]);

  const PAGE_SIZE = 24;
  const [page, setPage] = useState(1);

  useEffect(() => { setPage(1); }, [query, category, severity, days]);

  const paginated = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = paginated.length < filtered.length;

  return (
    <div>
      {/* Filters */}
      <div className="bg-card border border-border rounded-lg p-4 mb-6 flex flex-col sm:flex-row gap-3 flex-wrap">
        <input
          type="search"
          placeholder="Search recalls…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 min-w-[160px] px-4 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-navy-light"
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
          value={severity}
          onChange={(e) => setSeverity(e.target.value as RecallSeverity | 'all')}
          className="px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-navy-light bg-white"
        >
          {SEVERITY_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
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
        {severity === 'urgent' && <span className="ml-1 text-red-600 font-medium">(urgent only)</span>}
        {severity === 'voluntary' && <span className="ml-1 text-gray-500">(voluntary only)</span>}
      </p>

      <RecallGrid recalls={paginated} now={Date.now()} />

      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-6 py-3 bg-card border border-border rounded-lg text-sm font-medium text-navy hover:bg-navy hover:text-white hover:border-navy transition-colors"
          >
            Load more ({filtered.length - paginated.length} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
