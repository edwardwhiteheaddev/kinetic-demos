import type { CollectionConfig } from 'payload/types';

const Posts: CollectionConfig = {
  slug: 'posts',
  labels: { singular: 'Post', plural: 'Posts' },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'excerpt', type: 'textarea' },
    { name: 'publishedAt', type: 'date' },
    { name: 'body', type: 'richText' },
  ],
  access: {
    read: () => true,
  },
};

export default Posts;
