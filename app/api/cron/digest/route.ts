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

  const now = Date.now();
  const isMonday = new Date().getUTCDay() === 1;

  const dailyRecalls = recalls.filter((r) => now - new Date(r.date).getTime() < 24 * 60 * 60 * 1000);
  const weeklyRecalls = recalls.filter((r) => now - new Date(r.date).getTime() < 7 * 24 * 60 * 60 * 1000);

  let sent = 0;
  let errors = 0;

  for (const subscriber of subscribers) {
    // Weekly subscribers only get emails on Mondays
    if (subscriber.frequency === 'weekly' && !isMonday) continue;

    const recallsForSubscriber = subscriber.frequency === 'daily' ? dailyRecalls : weeklyRecalls;
    try {
      await sendDigest(subscriber, recallsForSubscriber);
      sent++;
    } catch {
      errors++;
    }
  }

  return NextResponse.json({ ok: true, sent, errors, total: subscribers.length });
}
