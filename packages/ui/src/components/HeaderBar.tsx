'use client';

import { Avatar, Group, Text } from '@mantine/core';
import { IconUser } from '@tabler/icons-react';

export interface HeaderBarProps {
  userName?: string;
}

export function HeaderBar({ userName }: HeaderBarProps) {
  return (
    <Group px="lg" h="100%" justify="space-between">
      <Text fw={600}>Growth Ops Command Center</Text>
      <Group>
        <Avatar color="brand" radius="xl">
          <IconUser size={16} />
        </Avatar>
        <Text>{userName ?? 'Guest'}</Text>
      </Group>
    </Group>
  );
}
