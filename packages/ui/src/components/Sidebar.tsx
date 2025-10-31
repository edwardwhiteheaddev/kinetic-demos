'use client';

import { NavLink, ScrollArea, Stack, Text } from '@mantine/core';
import Link from 'next/link';
import { ReactNode } from 'react';

export interface SidebarLink {
  label: string;
  href: string;
  icon?: ReactNode;
}

export interface SidebarProps {
  links: SidebarLink[];
  footer?: ReactNode;
}

export function Sidebar({ links, footer }: SidebarProps) {
  return (
    <ScrollArea h="100%">
      <Stack p="md" gap="sm">
        <Text fw={700} size="lg">
          CEO Dashboard
        </Text>
        {links.map((link) => (
          <NavLink
            key={link.href}
            label={link.label}
            leftSection={link.icon}
            component={Link}
            href={link.href}
          />
        ))}
        {footer}
      </Stack>
    </ScrollArea>
  );
}
