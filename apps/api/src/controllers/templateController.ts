import { FastifyInstance } from 'fastify';
import { TEMPLATE_LIBRARY_SLUGS } from '@ceo/shared';
import { AuthenticatedRequest } from '../plugins/auth';

export class TemplateController {
  constructor(private app: FastifyInstance) {}

  listLibrary() {
    return TEMPLATE_LIBRARY_SLUGS.map((slug) => ({ slug }));
  }

  async listInstances(request: AuthenticatedRequest) {
    const tenantId = request.user?.tenantId;
    return this.app.prisma.templateInstance.findMany({
      where: { tenantId },
      include: { template: true, owner: true },
    });
  }

  async createInstance(request: AuthenticatedRequest, body: { templateId: string; name: string }) {
    const tenantId = request.user?.tenantId;
    const userId = request.user?.userId;
    if (!tenantId || !userId) {
      throw new Error('Unauthorized');
    }
    return this.app.prisma.templateInstance.create({
      data: {
        templateId: body.templateId,
        name: body.name,
        tenantId,
        ownerId: userId,
        state: {},
      },
    });
  }
}
