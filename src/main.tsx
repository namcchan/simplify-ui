import './global.css';
import './utils/i18n';

import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import OriginalLayout from './layouts/original';
import Dashboard from './pages/dashboard.tsx';
import { AppThemeProvider } from './theme';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/dashboard" element={<OriginalLayout />}>
      <Route path="" element={<Dashboard />} />
      <Route path="e-commerce" element={<Dashboard />} />
      <Route path="analytics" element={<Dashboard />} />
      <Route path="banking" element={<Dashboard />} />
      <Route path="booking" element={<Dashboard />} />
      <Route path="file" element={<Dashboard />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <SnackbarProvider>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </AppThemeProvider>
  </React.StrictMode>,
);
