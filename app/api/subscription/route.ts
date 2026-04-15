import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

function getRedis() {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

// GET /api/subscription?email=foo@bar.com
export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get('email');
  if (!email) return NextResponse.json({ error: 'Missing email' }, { status: 400 });

  const redis = getRedis();
  if (!redis) return NextResponse.json({ error: 'Unavailable' }, { status: 503 });

  const data = await redis.get(`sub:${email.toLowerCase()}`);
  if (!data) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const subscriber = typeof data === 'string' ? JSON.parse(data) : data;
  return NextResponse.json(subscriber);
}

// PATCH /api/subscription — update preferences
export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const { email, categories, frequency } = body;
  if (!email) return NextResponse.json({ error: 'Missing email' }, { status: 400 });

  const redis = getRedis();
  if (!redis) return NextResponse.json({ error: 'Unavailable' }, { status: 503 });

  const existing = await redis.get(`sub:${email.toLowerCase()}`);
  if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const current = typeof existing === 'string' ? JSON.parse(existing) : existing;
  const updated = { ...current, categories, frequency };
  await redis.set(`sub:${email.toLowerCase()}`, JSON.stringify(updated));

  return NextResponse.json({ ok: true });
}
