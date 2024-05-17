import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { createTheme, Palette, Theme } from '@mui/material/styles';
import { PropsWithChildren } from 'react';

import components from './components';
import {
  customShadows,
  functions,
  GlobalStyles,
  palette,
  shadows,
  typography,
} from './foundations';

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  const theme: Theme = createTheme({
    palette,
    shape: { borderRadius: 8 },
    functions,
    typography,
    shadowList: shadows(),
    customShadows: customShadows(palette as Palette),
    // breakpoints: {},
    components,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
