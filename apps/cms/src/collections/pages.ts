import type { CollectionConfig } from 'payload/types';

const Pages: CollectionConfig = {
  slug: 'pages',
  labels: { singular: 'Page', plural: 'Pages' },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'layout', type: 'richText' },
  ],
  access: {
    read: () => true,
  },
};

export default Pages;
