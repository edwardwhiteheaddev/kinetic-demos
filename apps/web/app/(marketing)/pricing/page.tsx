import { Badge, Card, Grid, Stack, Text, Title } from '@mantine/core';

const plans = [
  {
    name: 'Scale',
    price: '$2,499/mo',
    description: 'For growth-stage companies aligning leadership teams.',
    highlights: ['Unlimited dashboards', 'AI assistant included', 'Scenario modeling jobs'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For multi-entity organizations and PE portfolios.',
    highlights: ['Dedicated CSM', 'Advanced RBAC policies', 'Premium analytics support'],
  },
];

export default function PricingPage() {
  return (
    <Stack gap="xl">
      <Title order={1}>Pick the right rhythm for your team</Title>
      <Grid>
        {plans.map((plan) => (
          <Grid.Col key={plan.name} span={{ base: 12, md: 6 }}>
            <Card withBorder padding="xl" radius="md">
              <Stack gap="sm">
                <Badge size="lg" variant="outline">
                  {plan.name}
                </Badge>
                <Title order={2}>{plan.price}</Title>
                <Text c="dimmed">{plan.description}</Text>
                <Stack gap={4}>
                  {plan.highlights.map((highlight) => (
                    <Text key={highlight}>• {highlight}</Text>
                  ))}
                </Stack>
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
}
