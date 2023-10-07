import React from 'react';
import ReactDOM from 'react-dom/client';
import { SimplifyProvider } from './theme';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import OriginalLayout from './layouts/original';
import Dashboard from './pages/dashboard.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<OriginalLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SimplifyProvider>
      <RouterProvider router={router} />
    </SimplifyProvider>
  </React.StrictMode>,
);
