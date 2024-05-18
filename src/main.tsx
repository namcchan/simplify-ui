import './global.css';
import './utils/i18n';

import { CircularProgress } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/router';
import { AppThemeProvider } from '@/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <SnackbarProvider>
        <RouterProvider router={router} fallbackElement={<CircularProgress />} />
      </SnackbarProvider>
    </AppThemeProvider>
  </React.StrictMode>,
);
