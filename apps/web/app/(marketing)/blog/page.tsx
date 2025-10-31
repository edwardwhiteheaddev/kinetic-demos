import { Card, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { fetchBlogPosts } from '../../../lib/payload';

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <Stack gap="lg">
      <Title order={1}>Insights & Playbooks</Title>
      {posts.length === 0 && <Text c="dimmed">No posts yet. Check back soon.</Text>}
      {posts.map((post) => (
        <Card key={post.id} withBorder component={Link} href={`/blog/${post.slug}`}>
          <Stack gap="xs">
            <Title order={3}>{post.title}</Title>
            <Text size="sm" c="dimmed">
              {new Date(post.publishedAt).toLocaleDateString()} • {post.excerpt}
            </Text>
          </Stack>
        </Card>
      ))}
    </Stack>
  );
}
