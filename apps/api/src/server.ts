import Fastify from 'fastify';
import cors from '@fastify/cors';
import sensible from '@fastify/sensible';
import jwt from '@fastify/jwt';
import { logger } from './utils/logger';
import prismaPlugin from './plugins/prisma';
import authPlugin from './plugins/auth';
import { registerRoutes } from './routes';

export async function buildServer() {
  const server = Fastify({
    logger,
    ajv: {
      customOptions: {
        removeAdditional: true,
        coerceTypes: 'array',
        allErrors: true,
      },
    },
  });

  await server.register(cors, { origin: true });
  await server.register(sensible);
  await server.register(prismaPlugin);
  await server.register(jwt, {
    secret: process.env.JWT_SECRET ?? 'insecure',
  });
  await server.register(authPlugin);
  registerRoutes(server);

  server.get('/health', async () => ({ status: 'ok' }));

  return server;
}
