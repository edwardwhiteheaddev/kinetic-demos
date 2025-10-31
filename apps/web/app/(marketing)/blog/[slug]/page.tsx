import { notFound } from 'next/navigation';
import { Stack, Text, Title } from '@mantine/core';
import { fetchBlogPost } from '../../../../lib/payload';

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = await fetchBlogPost(params.slug);
  if (!post) {
    return notFound();
  }

  return (
    <Stack gap="md">
      <Title order={1}>{post.title}</Title>
      <Text c="dimmed">Published {new Date(post.publishedAt).toLocaleDateString()}</Text>
      <Text>{post.excerpt}</Text>
      <Text c="dimmed">Full content is managed inside Payload CMS.</Text>
    </Stack>
  );
}
