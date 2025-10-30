import { getToggleState } from '@growthops/config';
import { orderedTiers } from '@growthops/types';

function renderMetric(metric) {
  const icon = metric.trend === 'up' ? '⬆️' : metric.trend === 'down' ? '⬇️' : '⏸️';
  return `${icon} ${metric.label}: ${metric.value}`;
}

function renderToggle(toggle) {
  const status = toggle.enabled ? 'enabled' : 'disabled';
  return `• ${toggle.key} (${status})`;
}

export function renderDashboard(options) {
  const toggles = getToggleState(options.tier);
  const metricBlock = options.metrics.map(renderMetric).join('\n');
  const toggleBlock = toggles.map(renderToggle).join('\n');
  return [
    `Growth Ops Dashboard — ${options.tier.toUpperCase()} tier`,
    '',
    'Metrics:',
    metricBlock,
    '',
    'Feature Toggles:',
    toggleBlock
  ].join('\n');
}

export function demoMetrics() {
  return [
    { key: 'arr', label: 'Monthly Recurring Revenue', value: 42000, trend: 'up' },
    { key: 'churn', label: 'Churn Rate', value: 3.2, trend: 'down' },
    { key: 'activation', label: 'Activation Rate', value: 68, trend: 'up' }
  ];
}

export async function runSelfTest() {
  const summary = renderDashboard({ metrics: demoMetrics(), tier: 'growth' });
  if (!summary.includes('Growth Ops Dashboard')) {
    throw new Error('Dashboard render did not include heading.');
  }
  if (!orderedTiers.includes('enterprise')) {
    throw new Error('Expected enterprise tier to be available.');
  }
}
