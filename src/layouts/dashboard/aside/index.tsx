import { Box, Drawer, IconButton, Stack } from '@mui/material';
import React, { useEffect, useMemo } from 'react';

import { Iconify } from '@/components';
import { Scrollbar } from '@/components/scrollbar';
import { useResponsive } from '@/hooks';
import { SIDEBAR_MINI_WIDTH, SIDEBAR_WIDTH } from '@/layouts/constants.ts';
import AsideGroup from '@/layouts/dashboard/aside/group';

import { AsideGroupType } from '../../types';
import { useDashboardLayout } from '../provider';
import { Logo } from './logo';

type Props = {
  groups: AsideGroupType[];
  logo?: React.ReactNode;
};

export default function Aside({ groups, logo }: Props) {
  const isDesktop = useResponsive('up', 'lg');

  const { openSidebar, onOpenSidebar, isMinimize, onMinimize } = useDashboardLayout();

  const WIDTH = useMemo(() => {
    return isMinimize ? SIDEBAR_MINI_WIDTH : SIDEBAR_WIDTH;
  }, [isMinimize]);

  const renderContent = () => {
    return (
      <Scrollbar
        sx={{
          height: 1,
          '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
        }}
      >
        {logo ? logo : <Logo />}
        {groups.map(({ title, routes }) => (
          <AsideGroup key={title} title={title} data={routes} />
        ))}
      </Scrollbar>
    );
  };

  useEffect(() => {
    if (!isDesktop && isMinimize) {
      onMinimize();
    }
  }, [isDesktop, isMinimize, onMinimize]);

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: WIDTH },
      }}
    >
      {isDesktop && (
        <>
          <IconButton
            disableRipple
            onClick={onMinimize}
            size="small"
            color="inherit"
            sx={{
              transition: 'all 250ms ease',
              backgroundColor: 'white',
              border: '1px dashed',
              borderColor: 'grey.300',
              position: 'fixed',
              top: 22,
              left: WIDTH,
              zIndex: 1101,
              transform: `translateX(-50%) rotateY(${isMinimize ? '3.142rad' : '0'})`,
            }}
          >
            <Iconify size={16} sx={{ color: 'grey.600' }} icon="charm:chevron-right" />
          </IconButton>
          <Stack
            width={{ lg: WIDTH }}
            position="fixed"
            height="100%"
            sx={{
              borderRight: '1px dashed',
              borderColor: (theme) => theme.palette.grey[300],
            }}
          >
            {renderContent()}
          </Stack>
        </>
      )}
      {!isDesktop && (
        <Drawer
          open={openSidebar}
          onClose={onOpenSidebar}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: SIDEBAR_WIDTH, borderRadius: 0 },
          }}
        >
          {renderContent()}
        </Drawer>
      )}
    </Box>
  );
}
