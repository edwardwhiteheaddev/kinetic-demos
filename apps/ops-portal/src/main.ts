import { getToggleState, resolveEnvironment } from '@growthops/config';
import { defaultMetric, orderedTiers } from '@growthops/types';

export function collectOpsSummary(env) {
  const resolved = resolveEnvironment(env);
  const toggles = getToggleState(resolved.defaultTier);
  const missionCriticalMetric = defaultMetric('sla', 'SLA Breaches');
  return {
    environment: resolved.apiUrl,
    toggles: toggles.map(toggle => `${toggle.key}:${toggle.enabled ? 'on' : 'off'}`),
    missionCriticalMetric: missionCriticalMetric.value
  };
}

export function formatOpsSummary(summary) {
  return [
    `Ops Environment: ${summary.environment}`,
    `Toggles: ${summary.toggles.join(', ')}`,
    `SLA Breaches: ${summary.missionCriticalMetric}`
  ].join('\n');
}

export async function runSelfTest() {
  const summary = collectOpsSummary('staging');
  if (!summary.environment.includes('staging')) {
    throw new Error('Expected staging environment for ops summary.');
  }
  if (summary.toggles.length === 0) {
    throw new Error('Toggle list should not be empty.');
  }
  if (!orderedTiers.includes('starter')) {
    throw new Error('Starter tier missing from ordered tiers.');
  }
}

if (process.argv[1] && process.argv[1].endsWith('main.js')) {
  console.log(formatOpsSummary(collectOpsSummary(process.env.NODE_ENV)));
}
