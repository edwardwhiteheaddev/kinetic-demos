'use client';

import { Card, Group, Stack, Text, ThemeIcon } from '@mantine/core';
import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react';

export interface KPIChartProps {
  title: string;
  currentValue: string;
  change: number;
  trend?: 'up' | 'down' | 'neutral';
  description?: string;
}

export function KPIChart({ title, currentValue, change, trend = 'neutral', description }: KPIChartProps) {
  const Icon = trend === 'down' ? IconTrendingDown : IconTrendingUp;
  const color = trend === 'down' ? 'red' : trend === 'up' ? 'green' : 'gray';

  return (
    <Card withBorder shadow="sm" padding="lg">
      <Stack gap="xs">
        <Group justify="space-between">
          <Text fw={600}>{title}</Text>
          <ThemeIcon color={color} variant="light">
            <Icon size={16} />
          </ThemeIcon>
        </Group>
        <Text fz="32px" fw={700}>
          {currentValue}
        </Text>
        <Text c={color}>{change > 0 ? `+${change}%` : `${change}%`} vs last period</Text>
        {description && (
          <Text c="dimmed" size="sm">
            {description}
          </Text>
        )}
      </Stack>
    </Card>
  );
}
