import { FastifyInstance } from 'fastify';
import { TemplateController } from '../controllers/templateController';
import { TEMPLATE_LIBRARY } from '@ceo/shared';

export async function templateRoutes(app: FastifyInstance) {
  const controller = new TemplateController(app);

  app.get('/templates/library', async () => TEMPLATE_LIBRARY);

  app.get('/templates', { preHandler: app.authenticate }, async (request) => {
    return controller.listInstances(request);
  });

  app.post('/templates', { preHandler: app.authenticate }, async (request, reply) => {
    const body = request.body as { templateId: string; name: string };
    const instance = await controller.createInstance(request, body);
    reply.code(201).send(instance);
  });
}
