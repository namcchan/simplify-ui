import { Box, Stack } from '@mui/material';
import React, { PropsWithChildren } from 'react';

import { MainHeader } from './main-header';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Stack sx={{ minHeight: '100vh' }}>
      <MainHeader />
      <Box flexGrow={1} minHeight={10000}>
        {children}
      </Box>
    </Stack>
  );
};

export default MainLayout;
