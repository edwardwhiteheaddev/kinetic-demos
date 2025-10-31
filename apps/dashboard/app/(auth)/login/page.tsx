'use client';

import { Button, Paper, PasswordInput, Stack, Text, TextInput, Title } from '@mantine/core';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function LoginPage() {
  const params = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setLoading(true);
    setError(null);
    const res = await signIn('credentials', {
      email: form.get('email'),
      password: form.get('password'),
      redirect: false,
      callbackUrl: params.get('callbackUrl') ?? '/dashboard',
    });
    setLoading(false);
    if (res?.error) {
      setError('Invalid credentials. Try demo@ceodashboard.dev / demo1234.');
      return;
    }
    window.location.href = res?.url ?? '/dashboard';
  }

  return (
    <Stack mih="100vh" justify="center" align="center">
      <Paper withBorder p="xl" radius="md" maw={420} w="100%">
        <form onSubmit={handleSubmit}>
          <Stack gap="md">
            <Title order={2}>Sign in</Title>
            <Text c="dimmed">Access the CEO Dashboard for your tenant.</Text>
            <TextInput required label="Email" name="email" placeholder="you@example.com" type="email" />
            <PasswordInput required label="Password" name="password" placeholder="Your password" />
            {error && <Text c="red">{error}</Text>}
            <Button type="submit" loading={loading}>
              Continue
            </Button>
          </Stack>
        </form>
      </Paper>
    </Stack>
  );
}
