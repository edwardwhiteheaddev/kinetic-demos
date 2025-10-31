import { redirect } from 'next/navigation';
import { DashboardLayout } from '@ceo/ui';
import { IconActivity, IconChecklist, IconHome, IconTemplate, IconUsersGroup } from '@tabler/icons-react';
import { getSession } from '../../lib/auth';

const links = [
  { label: 'Dashboard', href: '/dashboard', icon: <IconHome size={16} /> },
  { label: 'Templates', href: '/templates', icon: <IconTemplate size={16} /> },
  { label: 'Meetings', href: '/meetings', icon: <IconUsersGroup size={16} /> },
  { label: 'Actions', href: '/actions', icon: <IconChecklist size={16} /> },
  { label: 'Settings', href: '/settings', icon: <IconActivity size={16} /> },
];

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session) {
    redirect('/login');
  }

  return (
    <DashboardLayout sidebarLinks={links} userName={session.user?.name ?? 'Leader'}>
      {children}
    </DashboardLayout>
  );
}
