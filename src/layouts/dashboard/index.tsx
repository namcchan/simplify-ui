import { Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';

import Aside from '@/layouts/dashboard/aside';
import Header from '@/layouts/dashboard/header';
import { Main } from '@/layouts/dashboard/main';
import { DashboardLayoutProvider } from '@/layouts/dashboard/provider';
import { groupRoutes } from '@/routes';

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <DashboardLayoutProvider>
      <Header />
      <Box minHeight={1} display="flex">
        <Aside groups={groupRoutes} />
        <Main>{children}</Main>
      </Box>
    </DashboardLayoutProvider>
  );
};

export default DashboardLayout;
