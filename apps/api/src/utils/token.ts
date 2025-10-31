import { FastifyInstance } from 'fastify';

export function signAccessToken(app: FastifyInstance, payload: { userId: string; tenantId: string }) {
  return app.jwt.sign({ tenantId: payload.tenantId }, { subject: payload.userId, expiresIn: '1d' });
}
