import { FastifyInstance } from 'fastify';
import { AIQuery, aiResponseSchema } from '@ceo/shared';

export class AIController {
  constructor(private app: FastifyInstance) {}

  async query(body: AIQuery) {
    const suggestedActions = [
      {
        type: 'create_action_item' as const,
        payload: { title: 'Review pipeline quality template', template: 'pipeline-quality-audit' },
      },
      {
        type: 'run_scenario' as const,
        payload: { scenario: 'cashflow-waterfall', horizon: '6_months' },
      },
    ];

    const response = {
      summary: `Focusing on ${body.goal} across ${body.context.kpis.length} KPIs.`,
      suggestedActions,
      explanations: [
        'Scenario planning suggests reinforcing cash flow guardrails.',
        'Action items keep leadership aligned on growth initiatives.',
      ],
    };

    return aiResponseSchema.parse(response);
  }
}
