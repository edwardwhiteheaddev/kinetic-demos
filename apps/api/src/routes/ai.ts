import { FastifyInstance } from 'fastify';
import { AIController } from '../controllers/aiController';
import { aiQuerySchema } from '@ceo/shared';

export async function aiRoutes(app: FastifyInstance) {
  const controller = new AIController(app);

  app.post('/query', { preHandler: app.authenticate }, async (request, reply) => {
    const parsed = aiQuerySchema.safeParse(request.body);
    if (!parsed.success) {
      reply.badRequest('Invalid payload');
      return;
    }
    const response = await controller.query(parsed.data);
    reply.send(response);
  });
}
