import type { DashboardMetric } from '@growthops/types';

export interface BootstrapOptions {
  readonly env?: string;
  readonly customMetrics?: DashboardMetric[];
}

export declare function bootstrapDashboard(options?: BootstrapOptions): string;
export declare function runSelfTest(): Promise<void>;
