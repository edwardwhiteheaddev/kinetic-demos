import { buildConfig } from 'payload/config';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { fileURLToPath } from 'url';
import posts from './collections/posts';
import pages from './collections/pages';
import templates from './collections/templates';
import faqs from './collections/faqs';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_CMS_BASE_URL ?? 'http://localhost:3005',
  admin: {
    user: 'users',
  },
  editor: lexicalEditor(),
  collections: [posts, pages, templates, faqs],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
});
