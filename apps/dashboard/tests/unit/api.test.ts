import { describe, expect, it, vi } from 'vitest';
import * as api from '../../lib/api';

describe('fetchMetrics', () => {
  it('returns empty array when response not ok', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({ ok: false } as unknown as Response);
    const metrics = await api.fetchMetrics('token');
    expect(metrics).toEqual([]);
  });
});
