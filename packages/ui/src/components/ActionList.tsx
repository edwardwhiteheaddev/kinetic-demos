'use client';

import { Badge, Card, Group, Stack, Text } from '@mantine/core';

export interface ActionListItem {
  id: string;
  title: string;
  owner: string;
  status: 'open' | 'in_progress' | 'blocked' | 'done';
  dueDate?: string;
}

export interface ActionListProps {
  items: ActionListItem[];
}

const STATUS_COLOR: Record<ActionListItem['status'], string> = {
  open: 'blue',
  in_progress: 'yellow',
  blocked: 'red',
  done: 'green',
};

export function ActionList({ items }: ActionListProps) {
  return (
    <Stack>
      {items.map((item) => (
        <Card key={item.id} withBorder>
          <Group justify="space-between" align="flex-start">
            <div>
              <Text fw={600}>{item.title}</Text>
              <Text size="sm" c="dimmed">
                Owner: {item.owner}
                {item.dueDate ? ` • Due ${new Date(item.dueDate).toLocaleDateString()}` : ''}
              </Text>
            </div>
            <Badge color={STATUS_COLOR[item.status]}>{item.status.replace('_', ' ')}</Badge>
          </Group>
        </Card>
      ))}
    </Stack>
  );
}
