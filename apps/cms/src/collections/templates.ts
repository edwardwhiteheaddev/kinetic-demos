import type { CollectionConfig } from 'payload/types';

const Templates: CollectionConfig = {
  slug: 'templates',
  labels: { singular: 'Template', plural: 'Templates' },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'summary', type: 'textarea' },
    { name: 'category', type: 'text' },
    { name: 'persona', type: 'text' },
  ],
  access: {
    read: () => true,
  },
};

export default Templates;
