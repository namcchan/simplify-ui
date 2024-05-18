import { createBrowserRouter, Outlet } from 'react-router-dom';

import DashboardLayout from '@/layouts/dashboard';
import { MainLayout } from '@/layouts/main';
import DashboardPage from '@/pages/dashboard/dashboard-page';
import { HomePage } from '@/pages/main/home-page.tsx';

export const router = createBrowserRouter([
  {
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        element: <HomePage />,
        index: true,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ),
    children: [
      {
        element: <DashboardPage />,
        index: true,
      },
      {
        path: 'e-commerce',
        element: <DashboardPage />,
      },
      {
        path: 'analytics',
        element: <DashboardPage />,
      },
      {
        path: 'banking',
        element: <DashboardPage />,
      },
      {
        path: 'booking',
        element: <DashboardPage />,
      },
      {
        path: 'file',
        element: <DashboardPage />,
      },
    ],
  },
]);
