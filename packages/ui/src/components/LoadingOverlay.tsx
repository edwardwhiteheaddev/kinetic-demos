'use client';

import { Center, Loader } from '@mantine/core';

export function LoadingOverlay() {
  return (
    <Center mih={200}>
      <Loader color="brand" size="lg" />
    </Center>
  );
}
