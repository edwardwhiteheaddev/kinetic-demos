import { FastifyInstance } from 'fastify';
import { DashboardController } from '../controllers/dashboardController';

export async function dashboardRoutes(app: FastifyInstance) {
  const controller = new DashboardController(app);

  app.get('/metrics', { preHandler: app.authenticate }, async (request) => {
    return controller.metrics(request);
  });

  app.get('/alerts', { preHandler: app.authenticate }, async (request) => {
    return controller.alerts(request);
  });
}
