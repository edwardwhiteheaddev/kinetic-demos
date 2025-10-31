'use client';

import { Button, Card, Stack, Text } from '@mantine/core';
import { ReactNode } from 'react';

export interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: ReactNode;
}

export function EmptyState({ title, description, actionLabel, onAction, icon }: EmptyStateProps) {
  return (
    <Card withBorder padding="xl" radius="md" ta="center">
      <Stack align="center" gap="sm">
        {icon}
        <Text fw={600} size="lg">
          {title}
        </Text>
        <Text c="dimmed" maw={360}>
          {description}
        </Text>
        {actionLabel && onAction && (
          <Button onClick={onAction} size="md">
            {actionLabel}
          </Button>
        )}
      </Stack>
    </Card>
  );
}
