import { describe, expect, it } from 'vitest';
import { can } from '../src/rbac';

describe('rbac', () => {
  it('allows owners to manage users', () => {
    expect(can('OWNER', 'users:manage')).toBe(true);
  });

  it('prevents viewers from editing templates', () => {
    expect(can('VIEWER', 'templates:edit')).toBe(false);
  });
});
