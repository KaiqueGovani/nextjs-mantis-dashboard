'use client';

import ScrollTop from 'components/ScrollTop';
import { ReactNode } from 'react';
import ThemeCustomization from 'themes';

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <ThemeCustomization>
      <ScrollTop>
        {children}
      </ScrollTop>
    </ThemeCustomization>
  );
}
