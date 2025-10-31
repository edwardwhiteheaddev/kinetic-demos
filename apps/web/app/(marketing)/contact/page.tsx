import { List, Paper, Stack, Text, Title } from '@mantine/core';

export default function ContactPage() {
  return (
    <Stack gap="lg">
      <Title order={1}>Contact Us</Title>
      <Paper withBorder padding="lg">
        <Stack gap="sm">
          <Text>We partner with CEOs, CFOs, and Chiefs of Staff to operationalize growth.</Text>
          <List spacing="xs">
            <List.Item>Email: hello@ceodashboard.example</List.Item>
            <List.Item>Office: Remote-first, meeting hubs in SF & NYC</List.Item>
            <List.Item>Support: Weekdays 9am-6pm PT</List.Item>
          </List>
          <Text c="dimmed">For enterprise inquiries, mention your portfolio companies for bundled pricing.</Text>
        </Stack>
      </Paper>
    </Stack>
  );
}
