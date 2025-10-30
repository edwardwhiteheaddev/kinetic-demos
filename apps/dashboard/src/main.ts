import { baseEnvironment, resolveEnvironment } from '@growthops/config';
import { demoMetrics, renderDashboard } from '@growthops/ui';
import { defaultMetric, normalizeTier } from '@growthops/types';

export function bootstrapDashboard(options = {}) {
  const environment = resolveEnvironment(options.env);
  const metrics = options.customMetrics ?? [
    ...demoMetrics(),
    defaultMetric('retention', 'Retention Rate')
  ];
  const tier = normalizeTier(environment.defaultTier);
  return renderDashboard({ metrics, tier });
}

export async function runSelfTest() {
  const report = bootstrapDashboard({ env: 'production' });
  if (!report.includes('Growth Ops Dashboard')) {
    throw new Error('Dashboard bootstrap missing heading.');
  }
  if (!report.includes('Monthly Recurring Revenue')) {
    throw new Error('Expected core metric to be included in report.');
  }
  if (report.includes(baseEnvironment.apiUrl) && !report.includes('Growth Ops Dashboard')) {
    throw new Error('Base environment leaked incorrectly.');
  }
}

if (process.argv[1] && process.argv[1].endsWith('main.js')) {
  const summary = bootstrapDashboard({ env: process.env.NODE_ENV });
  console.log(summary);
}
