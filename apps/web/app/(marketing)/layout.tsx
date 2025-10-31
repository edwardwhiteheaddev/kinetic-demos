'use client';

import { Anchor, Container, Group, Header, NavLink, Stack } from '@mantine/core';
import Link from 'next/link';
import { ReactNode } from 'react';

const links = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Templates', href: '/templates' },
  { label: 'Blog', href: '/blog' },
  { label: 'Onboarding', href: '/onboarding' },
  { label: 'Contact', href: '/contact' },
];

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <Stack>
      <Header height={70} px="lg">
        <Group h="100%" justify="space-between">
          <Anchor component={Link} href="/" fw={700} size="lg">
            CEO Dashboard
          </Anchor>
          <Group>
            {links.map((link) => (
              <NavLink key={link.href} component={Link} href={link.href} label={link.label} variant="subtle" />
            ))}
          </Group>
        </Group>
      </Header>
      <Container size="lg" py="xl">
        {children}
      </Container>
    </Stack>
  );
}
