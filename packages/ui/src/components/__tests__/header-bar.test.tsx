import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { HeaderBar } from '../HeaderBar';

it('renders user name', () => {
  render(<HeaderBar userName="Ada" />);
  expect(screen.getByText('Ada')).toBeInTheDocument();
});
