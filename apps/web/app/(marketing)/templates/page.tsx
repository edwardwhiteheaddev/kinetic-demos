import { Badge, Card, Grid, Group, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { templateLibrary } from '../../../lib/templates';

export default function TemplatesPage() {
  return (
    <Stack gap="xl">
      <Title order={1}>Template Library</Title>
      <Text c="dimmed" maw={600}>
        Kickstart strategic planning with 21+ canvases. The Growth Engine Builder and Cashflow Waterfall templates
        are fully wired examples ready to instantiate inside the dashboard.
      </Text>
      <Grid>
        {templateLibrary.map((template) => (
          <Grid.Col key={template.slug} span={{ base: 12, md: 6 }}>
            <Card withBorder padding="lg" radius="md" component={Link} href={`/templates/${template.slug}`}>
              <Stack gap="sm">
                <Group justify="space-between">
                  <Title order={3}>{template.name}</Title>
                  {template.isInteractive && <Badge color="brand">Interactive</Badge>}
                </Group>
                <Text c="dimmed">{template.summary}</Text>
                <Text size="sm">Primary Persona: {template.persona}</Text>
                <Text size="sm">Category: {template.category}</Text>
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
}
