"use client";
import { Title, Grid, Card, Text } from "@mantine/core";
import DashboardLayout from "@/components/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Title order={2}>Dashboard</Title>
      <Grid>
        <Grid.Col span={4}>
          <Card shadow="sm" p="lg">
            <Text>KPI 1</Text>
            <Text size="xl">1,234</Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" p="lg">
            <Text>KPI 2</Text>
            <Text size="xl">5,678</Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" p="lg">
            <Text>KPI 3</Text>
            <Text size="xl">9,012</Text>
          </Card>
        </Grid.Col>
      </Grid>
    </DashboardLayout>
  );
}
