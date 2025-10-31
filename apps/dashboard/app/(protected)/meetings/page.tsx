import { Stack, Title } from '@mantine/core';
import { ActionList } from '@ceo/ui';
import { getSession } from '../../../lib/auth';
import { fetchMeetings } from '../../../lib/api';

export default async function MeetingsPage() {
  const session = await getSession();
  if (!session?.accessToken) {
    return null;
  }
  const meetings = await fetchMeetings(session.accessToken);

  return (
    <Stack gap="lg">
      <Title order={2}>Meeting Rhythms</Title>
      <ActionList
        items={meetings.map((meeting: any) => ({
          id: meeting.id,
          title: meeting.title,
          owner: meeting.facilitator?.name ?? 'Unassigned',
          status: 'open',
          dueDate: meeting.nextOccurrence,
        }))}
      />
    </Stack>
  );
}
