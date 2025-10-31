'use client';

import { AppShell } from '@mantine/core';
import { ReactNode } from 'react';
import { HeaderBar } from './HeaderBar';
import { Sidebar } from './Sidebar';

export interface DashboardLayoutProps {
  children: ReactNode;
  sidebarLinks: { label: string; href: string; icon?: ReactNode }[];
  userName?: string;
}

export function DashboardLayout({ children, sidebarLinks, userName }: DashboardLayoutProps) {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 260, breakpoint: 'sm' }}
      padding="md"
    >
      <AppShell.Header>
        <HeaderBar userName={userName} />
      </AppShell.Header>
      <AppShell.Navbar>
        <Sidebar links={sidebarLinks} />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
