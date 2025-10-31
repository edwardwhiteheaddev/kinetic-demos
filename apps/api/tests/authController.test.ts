import { describe, expect, it, vi } from 'vitest';
import { AuthController } from '../src/controllers/authController';
import { DEFAULT_TENANT_ID } from '@ceo/shared';

const tenant = { id: DEFAULT_TENANT_ID };
const user = {
  id: 'user-1',
  email: 'test@example.com',
  name: 'Test User',
  password: '$2a$10$abcdefghijk',
  tenantId: DEFAULT_TENANT_ID,
  role: 'OWNER',
};

describe('AuthController', () => {
  it('registers users and returns token', async () => {
    const prisma = {
      tenant: { upsert: vi.fn().mockResolvedValue(tenant) },
      user: { create: vi.fn().mockResolvedValue(user) },
    } as any;
    const app = { prisma, jwt: { sign: vi.fn().mockReturnValue('token') } } as any;
    const controller = new AuthController(app);

    const result = await controller.register({ email: user.email, password: 'password', name: user.name });
    expect(result.token).toBe('token');
    expect(prisma.user.create).toHaveBeenCalled();
  });

  it('throws on invalid login', async () => {
    const prisma = {
      user: { findUnique: vi.fn().mockResolvedValue(null) },
    } as any;
    const app = { prisma, jwt: { sign: vi.fn() } } as any;
    const controller = new AuthController(app);

    await expect(controller.login({ email: user.email, password: 'bad' })).rejects.toThrow();
  });
});
