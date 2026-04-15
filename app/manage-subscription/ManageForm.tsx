'use client';

import { useState, useEffect } from 'react';
import { CATEGORY_LABELS } from '@/lib/types';
import type { RecallCategory } from '@/lib/types';
import Link from 'next/link';

const CATEGORIES: RecallCategory[] = ['food', 'vehicles', 'medications', 'products'];

export default function ManageForm({ initialEmail }: { initialEmail: string }) {
  const [email, setEmail] = useState(initialEmail);
  const [submitted, setSubmitted] = useState(false);
  const [categories, setCategories] = useState<RecallCategory[]>([]);
  const [frequency, setFrequency] = useState<'daily' | 'weekly'>('weekly');
  const [status, setStatus] = useState<'idle' | 'loading' | 'loaded' | 'saving' | 'saved' | 'notfound' | 'error'>('idle');

  useEffect(() => {
    if (initialEmail) {
      loadSubscription(initialEmail);
    }
  }, [initialEmail]);

  async function loadSubscription(emailToLoad: string) {
    setStatus('loading');
    try {
      const res = await fetch(`/api/subscription?email=${encodeURIComponent(emailToLoad)}`);
      if (res.status === 404) { setStatus('notfound'); return; }
      if (!res.ok) { setStatus('error'); return; }
      const data = await res.json();
      setCategories(data.categories ?? []);
      setFrequency(data.frequency ?? 'weekly');
      setStatus('loaded');
    } catch {
      setStatus('error');
    }
  }

  async function handleLookup(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    await loadSubscription(email);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setStatus('saving');
    try {
      const res = await fetch('/api/subscription', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, categories, frequency }),
      });
      if (!res.ok) { setStatus('error'); return; }
      setStatus('saved');
    } catch {
      setStatus('error');
    }
  }

  function toggleCategory(cat: RecallCategory) {
    setCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  }

  if (!submitted && !initialEmail) {
    return (
      <form onSubmit={handleLookup} className="bg-white border border-border rounded-lg p-6 shadow-sm">
        <label className="block text-sm font-semibold text-navy mb-1">Your email address</label>
        <input
          type="email" required value={email} onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full px-4 py-2.5 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-navy-light mb-4"
        />
        <button type="submit" className="w-full py-3 bg-navy text-white font-semibold rounded-md hover:bg-navy-light transition-colors text-sm">
          Look up subscription
        </button>
      </form>
    );
  }

  if (status === 'loading') return <div className="py-8 text-muted text-sm">Loading your subscription…</div>;
  if (status === 'notfound') return (
    <div className="bg-card border border-border rounded-lg p-6 text-center">
      <p className="text-gray-600 mb-3">No subscription found for <strong>{email}</strong>.</p>
      <Link href="/subscribe" className="text-navy-light hover:underline text-sm font-medium">Subscribe now →</Link>
    </div>
  );
  if (status === 'error') return <div className="py-4 text-urgent text-sm">Something went wrong. Please try again.</div>;
  if (status === 'saved') return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
      <p className="text-green-700 font-semibold">✓ Preferences updated!</p>
      <p className="text-green-600 text-sm mt-1">Your digest settings have been saved.</p>
    </div>
  );

  return (
    <form onSubmit={handleSave} className="bg-white border border-border rounded-lg p-6 shadow-sm flex flex-col gap-6">
      <div>
        <p className="text-sm font-semibold text-navy mb-1">Email</p>
        <p className="text-sm text-gray-600">{email}</p>
      </div>

      <div>
        <p className="text-sm font-semibold text-navy mb-2">
          Categories <span className="text-muted font-normal">(leave all unchecked for everything)</span>
        </p>
        <div className="grid grid-cols-2 gap-2">
          {CATEGORIES.map(cat => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={categories.includes(cat)} onChange={() => toggleCategory(cat)} className="accent-navy" />
              <span className="text-sm">{CATEGORY_LABELS[cat]}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold text-navy mb-2">Frequency</p>
        <div className="flex gap-4">
          {(['daily', 'weekly'] as const).map(f => (
            <label key={f} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="frequency" value={f} checked={frequency === f} onChange={() => setFrequency(f)} className="accent-navy" />
              <span className="text-sm capitalize">{f}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <button type="submit" disabled={status === 'saving'} className="w-full py-3 bg-navy text-white font-semibold rounded-md hover:bg-navy-light transition-colors disabled:opacity-60 text-sm">
          {status === 'saving' ? 'Saving…' : 'Save preferences'}
        </button>
        <Link
          href={`/api/unsubscribe?email=${encodeURIComponent(email)}`}
          className="text-center text-xs text-muted hover:text-urgent"
        >
          Unsubscribe
        </Link>
      </div>
    </form>
  );
}
