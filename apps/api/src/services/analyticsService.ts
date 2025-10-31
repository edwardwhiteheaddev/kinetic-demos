import { Queue, Worker } from 'bullmq';
import { AnalyticsScenario } from '@ceo/shared';

const connection = process.env.REDIS_URL ? { url: process.env.REDIS_URL } : undefined;

export const analyticsQueue = new Queue('analytics', { connection });

export async function enqueueScenario(job: AnalyticsScenario) {
  await analyticsQueue.add('scenario', job, { removeOnComplete: true });
}

export function createAnalyticsWorker() {
  if (!connection) {
    return null;
  }
  const worker = new Worker(
    'analytics',
    async (job) => {
      return {
        ...job.data,
        output: Object.fromEntries(
          Object.entries(job.data.assumptions).map(([key, value]) => [key, value * 1.1])
        ),
      };
    },
    { connection },
  );
  return worker;
}
