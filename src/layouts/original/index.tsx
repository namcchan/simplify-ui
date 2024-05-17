import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Aside from '@/layouts/original/aside';
import Header from '@/layouts/original/header';
import { Main } from '@/layouts/original/main';
import { DashboardLayoutProvider } from '@/layouts/original/provider';
import { groupRoutes } from '@/routes';

const OriginalLayout = () => {
  return (
    <DashboardLayoutProvider>
      <Header />
      <Box minHeight={1} display="flex">
        <Aside groups={groupRoutes} />
        <Main>
          <Outlet />
        </Main>
      </Box>
    </DashboardLayoutProvider>
  );
};

export default OriginalLayout;
