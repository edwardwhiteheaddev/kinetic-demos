import type { DashboardMetric, FeatureToggle } from '@growthops/types';

export interface RenderOptions {
  readonly metrics: DashboardMetric[];
  readonly tier: 'starter' | 'growth' | 'enterprise';
}

export declare function renderDashboard(options: RenderOptions): string;
export declare function demoMetrics(): DashboardMetric[];
export declare function runSelfTest(): Promise<void>;
