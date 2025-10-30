import type {
  AccountTier,
  EnvironmentConfig,
  FeatureToggle
} from '@growthops/types';

export declare const baseEnvironment: EnvironmentConfig;
export declare function resolveEnvironment(envName: string | undefined): EnvironmentConfig;
export declare function getToggleState(tier: AccountTier): FeatureToggle[];
export declare function resolveApiUrl(custom: string | undefined, envName: string | undefined): string;
export declare function runSelfTest(): Promise<void>;
