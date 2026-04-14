import { Redis } from '@upstash/redis';

// Redis is only available in production with real env vars.
// In development without env vars, subscription writes are no-ops.
function getRedis(): Redis | null {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

export interface Subscriber {
  email: string;
  categories: string[];
  frequency: 'daily' | 'weekly';
  createdAt: string;
}

export async function saveSubscriber(
  email: string,
  categories: string[],
  frequency: 'daily' | 'weekly'
): Promise<void> {
  const redis = getRedis();
  if (!redis) return;

  const subscriber: Subscriber = {
    email,
    categories,
    frequency,
    createdAt: new Date().toISOString(),
  };

  await Promise.all([
    redis.set(`sub:${email}`, JSON.stringify(subscriber)),
    redis.sadd('subscribers', email),
  ]);
}

export async function removeSubscriber(email: string): Promise<void> {
  const redis = getRedis();
  if (!redis) return;
  await Promise.all([
    redis.del(`sub:${email}`),
    redis.srem('subscribers', email),
  ]);
}

export async function getAllSubscribers(): Promise<Subscriber[]> {
  const redis = getRedis();
  if (!redis) return [];

  const emails = await redis.smembers('subscribers');
  if (!emails.length) return [];

  const pipeline = redis.pipeline();
  for (const email of emails) {
    pipeline.get(`sub:${email}`);
  }
  const results = await pipeline.exec();

  return results
    .map((r) => {
      try {
        if (!r) return null;
        if (typeof r === 'string') return JSON.parse(r) as Subscriber;
        return r as Subscriber;
      } catch {
        return null;
      }
    })
    .filter((s): s is Subscriber => s !== null && typeof s.email === 'string');
}
