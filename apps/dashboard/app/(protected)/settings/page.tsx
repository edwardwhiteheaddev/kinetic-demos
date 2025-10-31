import { Card, Stack, Text, TextInput, Title } from '@mantine/core';
import { getSession } from '../../../lib/auth';

export default async function SettingsPage() {
  const session = await getSession();
  if (!session) {
    return null;
  }

  return (
    <Stack gap="lg" maw={600}>
      <Title order={2}>Account Settings</Title>
      <Card withBorder>
        <Stack gap="md">
          <Text size="sm" c="dimmed">
            Update your profile and workspace details. Multi-tenant settings are managed via the API and Prisma.
          </Text>
          <TextInput label="Name" defaultValue={session.user?.name ?? ''} disabled />
          <TextInput label="Email" defaultValue={session.user?.email ?? ''} disabled />
          <TextInput label="Tenant" defaultValue={session.user?.tenantId ?? ''} disabled />
        </Stack>
      </Card>
    </Stack>
  );
}
