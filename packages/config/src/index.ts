import { normalizeTier, orderedTiers } from '@growthops/types';

const apiHostByEnv = {
  development: 'https://dev.api.growthops.local',
  staging: 'https://staging.api.growthops.cloud',
  production: 'https://api.growthops.cloud'
};

const analyticsKeys = {
  development: 'dev-analytics-key',
  staging: 'staging-analytics-key',
  production: 'prod-analytics-key'
};

const defaultToggles = [
  {
    key: 'smart-insights',
    description: 'Enable machine generated growth insights on the dashboard',
    enabled: true,
    audience: orderedTiers
  },
  {
    key: 'playbook-generator',
    description: 'Allow operators to create automated growth playbooks',
    enabled: false,
    audience: ['growth', 'enterprise']
  }
];

export const baseEnvironment = {
  apiUrl: apiHostByEnv.development,
  analyticsKey: analyticsKeys.development,
  defaultTier: 'starter'
};

export function resolveEnvironment(envName) {
  const normalized = (envName ?? 'development').toLowerCase();
  const apiUrl = apiHostByEnv[normalized] ?? apiHostByEnv.development;
  const analyticsKey = analyticsKeys[normalized] ?? analyticsKeys.development;
  return {
    apiUrl,
    analyticsKey,
    defaultTier: normalized === 'production' ? 'growth' : 'starter'
  };
}

export function getToggleState(tier) {
  return defaultToggles.map(toggle => ({
    ...toggle,
    enabled: toggle.enabled && toggle.audience.includes(tier)
  }));
}

export function resolveApiUrl(custom, envName) {
  if (custom && custom.trim().length > 0) {
    return custom.trim();
  }
  const resolved = resolveEnvironment(envName);
  return resolved.apiUrl;
}

export async function runSelfTest() {
  const production = resolveEnvironment('production');
  if (!production.apiUrl.includes('growthops.cloud')) {
    throw new Error('Production API host misconfigured.');
  }
  const tier = normalizeTier('enterprise');
  const toggles = getToggleState(tier);
  if (!toggles.some(toggle => toggle.key === 'smart-insights')) {
    throw new Error('Expected smart-insights toggle to be present.');
  }
}
