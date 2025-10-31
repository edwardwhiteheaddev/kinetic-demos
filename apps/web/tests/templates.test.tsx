import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import TemplatesPage from '../app/(marketing)/templates/page';

it('renders interactive badges for wired templates', async () => {
  const { findAllByText } = render(await TemplatesPage());
  const badges = await findAllByText('Interactive');
  expect(badges.length).toBeGreaterThan(0);
  expect(screen.getByText('Template Library')).toBeInTheDocument();
});
