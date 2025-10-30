export const orderedTiers = ['starter', 'growth', 'enterprise'];

export function normalizeTier(input) {
  const normalized = input.toLowerCase();
  if (normalized === 'growth' || normalized === 'enterprise') {
    return normalized;
  }
  return 'starter';
}

export function isEnterpriseTier(tier) {
  return tier === 'enterprise';
}

export function defaultMetric(key, label) {
  return {
    key,
    label,
    value: 0,
    trend: 'flat'
  };
}

export async function runSelfTest() {
  if (!isEnterpriseTier('enterprise')) {
    throw new Error('Enterprise tier detection failed.');
  }
  const metric = defaultMetric('activation', 'Activation Rate');
  if (metric.value !== 0 || metric.trend !== 'flat') {
    throw new Error('Default metric did not match expected baseline.');
  }
}
