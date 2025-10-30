export type AccountTier = 'starter' | 'growth' | 'enterprise';

export interface DashboardMetric {
  readonly key: string;
  readonly label: string;
  readonly value: number;
  readonly trend: 'up' | 'down' | 'flat';
}

export interface FeatureToggle {
  readonly key: string;
  readonly description: string;
  readonly enabled: boolean;
  readonly audience: AccountTier[];
}

export interface EnvironmentConfig {
  readonly apiUrl: string;
  readonly analyticsKey: string;
  readonly defaultTier: AccountTier;
}

export declare const orderedTiers: readonly AccountTier[];
export declare function normalizeTier(input: string): AccountTier;
export declare function isEnterpriseTier(tier: AccountTier): boolean;
export declare function defaultMetric(key: string, label: string): DashboardMetric;
export declare function runSelfTest(): Promise<void>;
