import { Redis } from '@upstash/redis';

// Redis is only available in production with real env vars.
// In development without env vars, subscription writes are no-ops.
function getRedis(): Redis | null {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null;
  }
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
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
        return typeof r === 'string' ? (JSON.parse(r) as Subscriber) : null;
      } catch {
        return null;
      }
    })
    .filter((s): s is Subscriber => s !== null);
}
