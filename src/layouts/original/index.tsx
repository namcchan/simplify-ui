import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '@/layouts/original/header';
import { Main } from '@/layouts/original/main';
import Aside from '@/layouts/original/aside';
import { groupRoutes } from '@/routes';
import { DashboardLayoutProvider } from '@/layouts/original/provider';

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
