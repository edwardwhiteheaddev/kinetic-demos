import { Badge, Button, Grid, Group, Paper, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CEO Dashboard | Operate with confidence',
  description: 'KPIs, templates, and analytics to align leadership around growth.',
};

const highlights = [
  'Align on revenue, retention, and efficiency KPIs',
  'Plan 12-quarter scenarios with ready-made templates',
  'Spot leading indicators with automated insights',
  'Coordinate action items and meeting rhythms'
];

export default function HomePage() {
  return (
    <Stack gap="xl">
      <Paper radius="lg" p="xl" shadow="lg">
        <Stack gap="md">
          <Badge variant="light" size="lg" w="fit-content">
            Multi-tenant Growth Ops Platform
          </Badge>
          <Title order={1}>Operate with clarity, move with confidence.</Title>
          <Text size="lg" c="dimmed">
            CEO Dashboard centralizes your growth targets, cash flow insights, and strategy rituals so leaders stay
            aligned in every quarter.
          </Text>
          <Group>
            <Button size="md" component={Link} href="/onboarding">
              Start Onboarding
            </Button>
            <Button size="md" variant="light" component={Link} href="/templates">
              Explore Templates
            </Button>
          </Group>
        </Stack>
      </Paper>
      <Grid>
        {highlights.map((highlight) => (
          <Grid.Col key={highlight} span={{ base: 12, sm: 6 }}>
            <Paper withBorder p="lg">
              <Text fw={600}>{highlight}</Text>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
}
