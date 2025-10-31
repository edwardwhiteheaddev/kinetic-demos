import { Grid, List, Paper, Stack, Text, Title } from '@mantine/core';
import { IconChartLine, IconCloudAnalytics, IconUsersGroup } from '@tabler/icons-react';

const featureBlocks = [
  {
    title: 'KPI Command Center',
    description: 'Monitor revenue, retention, pipeline, and efficiency metrics in real time.',
    icon: IconChartLine,
    bullets: ['Tenant-scoped dashboards', 'Automated variance alerts', 'Scenario overlays'],
  },
  {
    title: 'Template Library',
    description: 'Launch initiatives faster with 21+ strategic planning canvases.',
    icon: IconUsersGroup,
    bullets: ['Growth Engine Builder', '12Q Planning Canvas', 'Hiring Scorecard'],
  },
  {
    title: 'Analytics Engine',
    description: 'Model cash flow and forecast outcomes with BullMQ-powered jobs.',
    icon: IconCloudAnalytics,
    bullets: ['Scenario queue ready', 'Prisma-backed data layer', 'BullMQ worker stubs included'],
  },
];

export default function FeaturesPage() {
  return (
    <Stack gap="xl">
      <Title order={1}>Purpose-built for Growth Leadership</Title>
      <Grid>
        {featureBlocks.map((feature) => (
          <Grid.Col key={feature.title} span={{ base: 12, md: 4 }}>
            <Paper withBorder p="lg" radius="md">
              <Stack gap="sm">
                <feature.icon size={32} />
                <Title order={3}>{feature.title}</Title>
                <Text c="dimmed">{feature.description}</Text>
                <List spacing="xs" size="sm">
                  {feature.bullets.map((bullet) => (
                    <List.Item key={bullet}>{bullet}</List.Item>
                  ))}
                </List>
              </Stack>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
}
