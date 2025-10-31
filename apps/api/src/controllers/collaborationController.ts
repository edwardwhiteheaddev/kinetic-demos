import { FastifyInstance } from 'fastify';
import { AuthenticatedRequest } from '../plugins/auth';

export class CollaborationController {
  constructor(private app: FastifyInstance) {}

  async listMeetings(request: AuthenticatedRequest) {
    return this.app.prisma.meeting.findMany({
      where: { tenantId: request.user?.tenantId },
      include: { facilitator: true },
    });
  }

  async listActions(request: AuthenticatedRequest) {
    return this.app.prisma.actionItem.findMany({
      where: { tenantId: request.user?.tenantId },
      include: { owner: true },
    });
  }

  async createAction(request: AuthenticatedRequest, body: { title: string; dueDate?: string }) {
    if (!request.user?.tenantId || !request.user.userId) {
      throw new Error('Unauthorized');
    }
    return this.app.prisma.actionItem.create({
      data: {
        title: body.title,
        tenantId: request.user.tenantId,
        ownerId: request.user.userId,
        dueDate: body.dueDate ? new Date(body.dueDate) : undefined,
      },
    });
  }
}
