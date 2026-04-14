'use client';

import { useState } from 'react';
import { CATEGORY_LABELS } from '@/lib/types';
import type { RecallCategory } from '@/lib/types';

const CATEGORIES: RecallCategory[] = ['food', 'vehicles', 'medications', 'products'];

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [categories, setCategories] = useState<RecallCategory[]>([]);
  const [frequency, setFrequency] = useState<'daily' | 'weekly'>('weekly');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  function toggleCategory(cat: RecallCategory) {
    setCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, categories, frequency }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? 'Subscription failed');
      }

      setStatus('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <p className="text-green-700 font-semibold text-lg">✓ You're subscribed!</p>
        <p className="text-green-600 text-sm mt-1">
          You'll receive your {frequency} digest at <strong>{email}</strong>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label className="block text-sm font-semibold text-navy mb-1">
          Email address
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full px-4 py-2.5 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-navy-light"
        />
      </div>

      <div>
        <p className="text-sm font-semibold text-navy mb-2">
          Categories <span className="text-muted font-normal">(leave all unchecked for everything)</span>
        </p>
        <div className="grid grid-cols-2 gap-2">
          {CATEGORIES.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={categories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="accent-navy"
              />
              <span className="text-sm">{CATEGORY_LABELS[cat]}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-navy mb-2">Digest frequency</p>
        <div className="flex gap-4">
          {(['daily', 'weekly'] as const).map((f) => (
            <label key={f} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="frequency"
                value={f}
                checked={frequency === f}
                onChange={() => setFrequency(f)}
                className="accent-navy"
              />
              <span className="text-sm capitalize">{f}</span>
            </label>
          ))}
        </div>
      </div>

      {error && (
        <p className="text-sm text-urgent bg-urgent-bg rounded px-3 py-2">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3 bg-navy text-white font-semibold rounded-md hover:bg-navy-light transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? 'Subscribing…' : 'Subscribe to Recall Alerts'}
      </button>
    </form>
  );
}
