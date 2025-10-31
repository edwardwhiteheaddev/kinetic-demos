'use client';

import { Button, Group, Paper, Stack, TextInput, Textarea, Title } from '@mantine/core';
import { useState } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3333';

export default function OnboardingPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    setLoading(true);
    try {
      await fetch(`${API_BASE}/onboarding`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Stack gap="lg">
      <Title order={1}>Onboard your leadership team</Title>
      <Paper withBorder padding="xl" maw={640}>
        {submitted ? (
          <p>Thanks! Our team will reach out within 24 hours.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <Stack gap="md">
              <TextInput required label="Full Name" name="name" placeholder="Ada Lovelace" />
              <TextInput required label="Company" name="company" placeholder="Acme Corp" />
              <TextInput required label="Work Email" name="email" type="email" />
              <Textarea label="Goals" name="goals" placeholder="Share your growth priorities" minRows={3} />
              <Group justify="flex-end">
                <Button type="submit" loading={loading}>
                  Start Implementation
                </Button>
              </Group>
            </Stack>
          </form>
        )}
      </Paper>
    </Stack>
  );
}
