"use client";
import { AppShell, Burger, Group, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          GrowthOps
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Link href="/dashboard" passHref>
          <NavLink label="Dashboard" component="a" />
        </Link>
        <Link href="/templates" passHref>
          <NavLink label="Templates" component="a" />
        </Link>
        <Link href="/settings" passHref>
          <NavLink label="Settings" component="a" />
        </Link>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
