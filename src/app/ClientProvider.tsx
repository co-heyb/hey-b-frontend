'use client';

import { ThemeProvider } from '@emotion/react';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default ClientProvider;
