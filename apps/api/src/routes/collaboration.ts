import { FastifyInstance } from 'fastify';
import { CollaborationController } from '../controllers/collaborationController';

export async function collaborationRoutes(app: FastifyInstance) {
  const controller = new CollaborationController(app);

  app.get('/meetings', { preHandler: app.authenticate }, async (request) => {
    return controller.listMeetings(request);
  });

  app.get('/actions', { preHandler: app.authenticate }, async (request) => {
    return controller.listActions(request);
  });

  app.post('/actions', { preHandler: app.authenticate }, async (request, reply) => {
    const body = request.body as { title: string; dueDate?: string };
    const action = await controller.createAction(request, body);
    reply.code(201).send(action);
  });

  app.post('/onboarding', async (request) => {
    app.log.info({ payload: request.body }, 'Received onboarding submission');
    return { ok: true };
  });
}
