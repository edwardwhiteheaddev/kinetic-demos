import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
import { TEMPLATE_LIBRARY_SLUGS } from '@ceo/shared';

const prisma = new PrismaClient();

async function main() {
  const tenant = await prisma.tenant.upsert({
    where: { slug: 'demo-co' },
    update: {},
    create: {
      name: 'Demo Co',
      slug: 'demo-co',
    },
  });

  const password = await hash('demo1234', 10);

  const user = await prisma.user.upsert({
    where: { email: 'demo@ceodashboard.dev' },
    update: {},
    create: {
      email: 'demo@ceodashboard.dev',
      name: 'Demo CEO',
      role: 'OWNER',
      password,
      tenantId: tenant.id,
    },
  });

  await prisma.template.deleteMany({ where: { tenantId: tenant.id } });
  await prisma.template.createMany({
    data: TEMPLATE_LIBRARY_SLUGS.map((slug) => ({
      tenantId: null,
      slug,
      name: slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
      category: 'Strategy',
      summary: 'Template available for instantiation.',
      fields: { definition: [] },
    })),
  });

  await prisma.templateInstance.upsert({
    where: { id: tenant.id },
    update: {},
    create: {
      id: tenant.id,
      tenantId: tenant.id,
      ownerId: user.id,
      templateId: (await prisma.template.findFirst({ where: { slug: 'growth-engine-builder' } }))!.id,
      name: 'Q3 Growth Engine',
      state: { stage: 'awareness', budget: 250000 },
    },
  });

  await prisma.kPI.upsert({
    where: { id: tenant.id },
    update: {},
    create: {
      id: tenant.id,
      tenantId: tenant.id,
      name: 'Net New ARR',
      description: 'Monthly net new annual recurring revenue',
      category: 'Revenue',
      unit: 'USD',
      direction: 'up',
    },
  });

  await prisma.kPIDataPoint.createMany({
    data: [1, 2, 3, 4, 5, 6].map((month) => ({
      metricId: tenant.id,
      tenantId: tenant.id,
      recordedAt: new Date(2024, month - 1, 1),
      value: 50000 + month * 5000,
      projected: month >= 5,
    })),
    skipDuplicates: true,
  });

  await prisma.actionItem.upsert({
    where: { id: tenant.id },
    update: {},
    create: {
      id: tenant.id,
      tenantId: tenant.id,
      title: 'Launch expansion campaign',
      ownerId: user.id,
      status: 'in_progress',
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  });

  await prisma.meeting.upsert({
    where: { id: tenant.id },
    update: {},
    create: {
      id: tenant.id,
      tenantId: tenant.id,
      title: 'Weekly Leadership Sync',
      cadence: 'weekly',
      facilitatorId: user.id,
      nextOccurrence: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
