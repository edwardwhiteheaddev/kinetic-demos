import { Role } from './types';

export type Permission =
  | 'dashboard:view'
  | 'dashboard:edit'
  | 'templates:view'
  | 'templates:edit'
  | 'actions:assign'
  | 'meetings:manage'
  | 'users:manage';

export const rbacMatrix: Record<Role, Permission[]> = {
  OWNER: ['dashboard:view', 'dashboard:edit', 'templates:view', 'templates:edit', 'actions:assign', 'meetings:manage', 'users:manage'],
  ADMIN: ['dashboard:view', 'dashboard:edit', 'templates:view', 'templates:edit', 'actions:assign', 'meetings:manage'],
  EDITOR: ['dashboard:view', 'templates:view', 'templates:edit', 'actions:assign'],
  VIEWER: ['dashboard:view', 'templates:view'],
};

export function can(role: Role, permission: Permission): boolean {
  return rbacMatrix[role]?.includes(permission) ?? false;
}
