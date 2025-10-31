import { Tenant, User } from '../types';

export interface PaginationOptions {
  page?: number;
  pageSize?: number;
}

export interface PaginationResult<T> {
  data: T[];
  page: number;
  pageSize: number;
  total: number;
}

export function paginate<T>(items: T[], total: number, options: PaginationOptions = {}): PaginationResult<T> {
  const pageSize = Math.max(options.pageSize ?? 25, 1);
  const page = Math.max(options.page ?? 1, 1);
  return {
    data: items,
    total,
    page,
    pageSize,
  };
}

export function assertTenant(user: Pick<User, 'tenantId' | 'role'>, tenantId: Tenant['id']): void {
  if (user.tenantId !== tenantId) {
    throw new Error('Cross-tenant access denied');
  }
}

export function maskEmail(email: string): string {
  const [user, domain] = email.split('@');
  if (!domain) {
    return email;
  }
  const masked = user.length <= 2 ? `${user[0]}*` : `${user[0]}${'*'.repeat(user.length - 2)}${user[user.length - 1]}`;
  return `${masked}@${domain}`;
}
