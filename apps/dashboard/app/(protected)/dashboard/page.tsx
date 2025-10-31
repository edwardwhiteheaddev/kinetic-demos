import { SimpleGrid, Stack, Title } from '@mantine/core';
import { getSession } from '../../../lib/auth';
import { fetchMetrics } from '../../../lib/api';
import { KPIChart } from '@ui/components/KPIChart';

export default async function DashboardPage() {
  const session = await getSession();
  if (!session?.accessToken) {
    return null;
  }
  const metrics = await fetchMetrics(session.accessToken);

  return (
    <Stack gap="lg">
      <Title order={2}>Key KPIs</Title>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {metrics.map((metric) => (
          <KPIChart
            key={metric.id}
            title={metric.title}
            currentValue={metric.value}
            change={metric.change}
            trend={metric.trend}
            description={metric.description}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
