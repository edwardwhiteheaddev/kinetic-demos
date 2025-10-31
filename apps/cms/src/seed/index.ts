import 'dotenv/config';
import payload from 'payload';
import config from '../payload.config';

async function seed() {
  await payload.init({ config });
  await payload.create({
    collection: 'posts',
    data: {
      title: 'Welcome to CEO Dashboard',
      slug: 'welcome',
      excerpt: 'How leadership teams align on growth with our platform.',
      publishedAt: new Date().toISOString(),
      body: [{ children: [{ text: 'Content managed in Payload CMS.' }] }],
    },
  });

  await payload.create({
    collection: 'templates',
    data: {
      name: 'Growth Engine Builder',
      slug: 'growth-engine-builder',
      summary: 'Design your funnel from awareness to expansion.',
      category: 'Revenue',
      persona: 'CRO',
    },
  });
}

seed().then(() => {
  console.log('Payload CMS seeded');
  process.exit(0);
});
