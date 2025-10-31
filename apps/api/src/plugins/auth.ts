import fp from 'fastify-plugin';
import { FastifyReply, FastifyRequest } from 'fastify';

export interface AuthenticatedRequest extends FastifyRequest {
  user?: {
    userId: string;
    tenantId: string;
    role?: string;
  };
}

export default fp(async (fastify) => {
  fastify.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const decoded = await request.jwtVerify<{ sub: string; tenantId: string }>();
      (request as AuthenticatedRequest).user = {
        userId: decoded.sub,
        tenantId: decoded.tenantId,
      };
    } catch (error) {
      return reply.code(401).send({ message: 'Unauthorized' });
    }
  });
});

declare module 'fastify' {
  interface FastifyInstance {
    authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
  }
}
