import { Stack, Title } from '@mantine/core';
import { ActionList } from '@ceo/ui';
import { getSession } from '../../../lib/auth';
import { fetchActions } from '../../../lib/api';

export default async function ActionsPage() {
  const session = await getSession();
  if (!session?.accessToken) {
    return null;
  }
  const actions = await fetchActions(session.accessToken);

  return (
    <Stack gap="lg">
      <Title order={2}>Action Items</Title>
      <ActionList
        items={actions.map((action: any) => ({
          id: action.id,
          title: action.title,
          owner: action.owner?.name ?? 'Unassigned',
          status: action.status ?? 'open',
          dueDate: action.dueDate,
        }))}
      />
    </Stack>
  );
}
