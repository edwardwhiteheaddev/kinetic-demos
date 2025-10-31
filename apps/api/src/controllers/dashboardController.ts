import { FastifyInstance } from 'fastify';
import { AuthenticatedRequest } from '../plugins/auth';

export class DashboardController {
  constructor(private app: FastifyInstance) {}

  async metrics(request: AuthenticatedRequest) {
    const tenantId = request.user?.tenantId;
    const metrics = await this.app.prisma.kPI.findMany({
      where: { tenantId },
      include: { dataPoints: { orderBy: { recordedAt: 'desc' }, take: 1 } },
    });

    return metrics.map((metric) => {
      const latest = metric.dataPoints[0];
      return {
        id: metric.id,
        title: metric.name,
        value: latest ? `$${latest.value.toLocaleString()}` : '0',
        change: 12,
        trend: 'up' as const,
        description: metric.description ?? 'Monitoring via analytics worker',
      };
    });
  }

  async alerts(request: AuthenticatedRequest) {
    const tenantId = request.user?.tenantId;
    const actionItems = await this.app.prisma.actionItem.findMany({
      where: { tenantId, status: { in: ['blocked', 'in_progress'] } },
    });
    return actionItems.map((item) => ({
      id: item.id,
      message: `${item.title} due ${item.dueDate?.toISOString() ?? 'soon'}`,
    }));
  }
}
