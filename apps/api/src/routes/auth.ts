import { FastifyInstance } from 'fastify';
import { AuthController } from '../controllers/authController';

export async function authRoutes(app: FastifyInstance) {
  const controller = new AuthController(app);

  app.post('/register', async (request, reply) => {
    const body = request.body as { email: string; password: string; name: string };
    try {
      const result = await controller.register(body);
      reply.send(result);
    } catch (error) {
      reply.badRequest('Unable to register');
    }
  });

  app.post('/login', async (request, reply) => {
    const body = request.body as { email: string; password: string };
    try {
      const result = await controller.login(body);
      reply.send(result);
    } catch (error) {
      reply.unauthorized('Invalid credentials');
    }
  });
}
