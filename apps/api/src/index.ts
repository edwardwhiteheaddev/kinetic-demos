import 'dotenv/config';
import { buildServer } from './server';
import { createAnalyticsWorker } from './services/analyticsService';

async function start() {
  const server = await buildServer();
  const port = Number(process.env.PORT ?? 3333);
  try {
    await server.listen({ port, host: '0.0.0.0' });
    server.log.info(`API listening on port ${port}`);
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }

  const worker = createAnalyticsWorker();
  if (worker) {
    server.log.info('Analytics worker ready');
  } else {
    server.log.warn('Analytics worker not started (no Redis connection)');
  }
}

start();
