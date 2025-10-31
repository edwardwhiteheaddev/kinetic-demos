import { notFound } from 'next/navigation';
import { Card, List, Stack, Text, Title } from '@mantine/core';
import { templateLibrary } from '../../../../lib/templates';

export default function TemplateDetailPage({ params }: { params: { slug: string } }) {
  const template = templateLibrary.find((item) => item.slug === params.slug);
  if (!template) {
    return notFound();
  }

  const wiredExamples = {
    'growth-engine-builder': [
      'Auto-instantiates a pipeline KPI board inside the dashboard',
      'Maps template fields to the `/templates` API for persistence',
      'Links recommended KPIs via `/metrics` endpoint for instant context',
    ],
    'cashflow-waterfall': [
      'Connects to analytics scenario jobs for monthly projections',
      'Persists assumptions via Prisma `TemplateInstance` model',
      'Surfaces alerts when burn rate breaches guardrails',
    ],
  } as Record<string, string[]>;

  return (
    <Stack gap="lg">
      <Title order={1}>{template.name}</Title>
      <Text c="dimmed">{template.summary}</Text>
      <Card withBorder padding="lg">
        <Stack gap="sm">
          <Text fw={600}>Designed for: {template.persona}</Text>
          <Text>Category: {template.category}</Text>
          <Text>Sample Use Case: {template.sampleUseCase}</Text>
          <Text>CTA in product: {template.cta}</Text>
          {template.isInteractive && (
            <div>
              <Text fw={600}>Interactive Example Capabilities</Text>
              <List spacing="xs" size="sm">
                {(wiredExamples[template.slug] ?? ['Interactive flow coming soon.']).map((item) => (
                  <List.Item key={item}>{item}</List.Item>
                ))}
              </List>
            </div>
          )}
        </Stack>
      </Card>
    </Stack>
  );
}
