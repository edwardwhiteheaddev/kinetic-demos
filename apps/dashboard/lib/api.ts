import { AuthPayload } from '@ceo/shared';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3333';

export interface LoginResponse extends AuthPayload {}

export async function login(email: string, password: string): Promise<LoginResponse> {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    throw new Error('Invalid credentials');
  }
  return (await res.json()) as LoginResponse;
}

export async function fetchMetrics(token: string) {
  const res = await fetch(`${API_BASE}/metrics`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    return [];
  }
  return (await res.json()) as Array<{ id: string; title: string; value: string; change: number; trend: 'up' | 'down' | 'neutral'; description?: string }>;
}

export async function fetchTemplates(token: string) {
  const res = await fetch(`${API_BASE}/templates`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: { revalidate: 120 },
  });
  if (!res.ok) {
    return [];
  }
  return res.json();
}

export async function fetchMeetings(token: string) {
  const res = await fetch(`${API_BASE}/meetings`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    return [];
  }
  return res.json();
}

export async function fetchActions(token: string) {
  const res = await fetch(`${API_BASE}/actions`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    return [];
  }
  return res.json();
}
