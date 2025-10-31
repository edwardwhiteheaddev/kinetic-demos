import { FastifyInstance } from 'fastify';
import { hash, compare } from 'bcryptjs';
import { signAccessToken } from '../utils/token';
import { DEFAULT_TENANT_ID } from '@ceo/shared';

export class AuthController {
  constructor(private app: FastifyInstance) {}

  async register(body: { email: string; password: string; name: string }) {
    const tenant = await this.app.prisma.tenant.upsert({
      where: { id: DEFAULT_TENANT_ID },
      update: {},
      create: { id: DEFAULT_TENANT_ID, name: 'Default Tenant', slug: 'default' },
    });

    const user = await this.app.prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: await hash(body.password, 10),
        role: 'OWNER',
        tenantId: tenant.id,
      },
    });

    const token = signAccessToken(this.app, { userId: user.id, tenantId: tenant.id });
    const { password, ...safeUser } = user;
    return { token, user: safeUser };
  }

  async login(body: { email: string; password: string }) {
    const user = await this.app.prisma.user.findUnique({
      where: { email: body.email },
    });
    if (!user) {
      throw new Error('Invalid credentials');
    }
    const valid = await compare(body.password, user.password);
    if (!valid) {
      throw new Error('Invalid credentials');
    }
    const token = signAccessToken(this.app, { userId: user.id, tenantId: user.tenantId });
    const { password, ...safeUser } = user;
    return { token, user: safeUser };
  }
}
