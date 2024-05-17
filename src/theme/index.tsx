import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { createTheme, Palette, Theme } from '@mui/material/styles';
import { PropsWithChildren } from 'react';

import components from './components';
import {
  CustomShadows,
  customShadows,
  functions,
  FunctionsType,
  GlobalStyles,
  palette,
  shadows,
  typography,
} from './foundations';

export const SimplifyProvider = ({ children }: PropsWithChildren) => {
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

declare module '@mui/material/styles' {
  interface PaletteColor {
    lighter: string;
    darker: string;
  }

  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }

  interface Palette {
    secondary: PaletteColor;
  }

  interface Theme {
    functions: FunctionsType;
    shadowList: string[];
    customShadows: CustomShadows;
  }

  interface ThemeOptions {
    functions: FunctionsType;
    shadowList: string[];
    customShadows: CustomShadows;
  }

  interface CommonColors {
    transparent: string;
  }

  interface TypeBackground {
    neutral?: string;
  }
}

declare module '@mui/material' {
  interface ButtonPropsVariantOverrides {
    soft: true;
  }
  interface ChipPropsVariantOverrides {
    soft: true;
  }
}
