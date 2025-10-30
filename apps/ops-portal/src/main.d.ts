export interface OpsSummary {
  readonly environment: string;
  readonly toggles: string[];
  readonly missionCriticalMetric: number;
}

export declare function collectOpsSummary(env: string | undefined): OpsSummary;
export declare function formatOpsSummary(summary: OpsSummary): string;
export declare function runSelfTest(): Promise<void>;
