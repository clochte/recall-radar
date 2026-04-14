import { NextRequest, NextResponse } from 'next/server';
import { saveSubscriber } from '@/lib/kv';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, categories, frequency } = body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const validCategories = ['food', 'vehicles', 'medications', 'products'];
    const cats = Array.isArray(categories)
      ? categories.filter((c: unknown) => typeof c === 'string' && validCategories.includes(c))
      : [];

    const freq = frequency === 'daily' ? 'daily' : 'weekly';

    await saveSubscriber(email.toLowerCase().trim(), cats, freq);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Failed to save subscription' }, { status: 500 });
  }
}
