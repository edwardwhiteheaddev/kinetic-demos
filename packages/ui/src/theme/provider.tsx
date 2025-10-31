'use client';

import { MantineProvider, createTheme } from '@mantine/core';
import { ReactNode } from 'react';

const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  headings: { fontFamily: 'Inter, sans-serif' },
  colors: {
    brand: ['#f0f4ff', '#dbe4ff', '#bac8ff', '#91a7ff', '#748ffc', '#5c7cfa', '#4c6ef5', '#4263eb', '#3b5bdb', '#364fc7'],
  },
  primaryColor: 'brand',
});

export function UIProvider({ children }: { children: ReactNode }) {
  return (
    <MantineProvider theme={theme} withCssVariables>
      {children}
    </MantineProvider>
  );
}
