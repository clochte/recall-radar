import { NextRequest, NextResponse } from 'next/server';
import { getAllSubscribers } from '@/lib/kv';
import { getAllRecalls } from '@/lib/recalls';
import { sendDigest } from '@/lib/email';

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const [subscribers, recalls] = await Promise.all([
    getAllSubscribers(),
    getAllRecalls(),
  ]);

  // Only include recalls from the last 24 hours for daily, 7 days for weekly
  const now = Date.now();
  const recentRecalls = recalls.filter((r) => {
    const age = now - new Date(r.date).getTime();
    return age < 7 * 24 * 60 * 60 * 1000; // within 7 days
  });

  let sent = 0;
  let errors = 0;

  for (const subscriber of subscribers) {
    try {
      await sendDigest(subscriber, recentRecalls);
      sent++;
    } catch {
      errors++;
    }
  }

  return NextResponse.json({ ok: true, sent, errors, total: subscribers.length });
}
