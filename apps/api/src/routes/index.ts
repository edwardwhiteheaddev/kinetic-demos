import { FastifyInstance } from 'fastify';
import { authRoutes } from './auth';
import { dashboardRoutes } from './dashboard';
import { templateRoutes } from './templates';
import { aiRoutes } from './ai';
import { collaborationRoutes } from './collaboration';

export function registerRoutes(app: FastifyInstance) {
  app.register(authRoutes, { prefix: '/auth' });
  app.register(dashboardRoutes);
  app.register(templateRoutes);
  app.register(collaborationRoutes);
  app.register(aiRoutes, { prefix: '/ai' });
}
