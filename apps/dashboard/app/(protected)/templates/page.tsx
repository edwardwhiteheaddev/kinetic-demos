import { Card, Stack, Text, Title } from '@mantine/core';
import { TEMPLATE_LIBRARY } from '@ceo/shared';
import { getSession } from '../../../lib/auth';
import { fetchTemplates } from '../../../lib/api';

export default async function TemplatesPage() {
  const session = await getSession();
  if (!session?.accessToken) {
    return null;
  }
  const instances = await fetchTemplates(session.accessToken);

  return (
    <Stack gap="lg">
      <Title order={2}>Your Templates</Title>
      <Stack gap="md">
        {instances.length === 0 && <Text c="dimmed">No templates instantiated yet.</Text>}
        {instances.map((instance: any) => (
          <Card key={instance.id} withBorder>
            <Text fw={600}>{instance.name}</Text>
            <Text size="sm" c="dimmed">
              Based on {instance.template?.name}
            </Text>
          </Card>
        ))}
      </Stack>
      <Title order={3}>Template Library</Title>
      <Stack gap="md">
        {TEMPLATE_LIBRARY.map((template) => (
          <Card key={template.slug} withBorder>
            <Text fw={600}>{template.name}</Text>
            <Text size="sm" c="dimmed">
              {template.summary}
            </Text>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
}
