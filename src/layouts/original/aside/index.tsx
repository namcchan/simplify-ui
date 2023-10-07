import { Iconify } from '@/components';
import { useResponsive } from '@/hooks';
import { Box, Drawer, IconButton, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { SidebarGroupType } from '../../types';
import { Logo } from './logo';
import { SIDEBAR_MINI_WIDTH, SIDEBAR_WIDTH } from '@/layouts/constants.ts';
import { useDashboardLayout } from '../provider';
import AsideGroup from '@/layouts/original/aside/group';

type Props = {
  groups: SidebarGroupType[];
  logo?: React.ReactNode;
};

export default function Aside({ groups, logo }: Props) {
  const isDesktop = useResponsive('up', 'lg');
  const [isMounted, setMounted] = useState(false);

  const { openSidebar, onOpenSidebar, isMinimize, onMinimize } = useDashboardLayout();

  const WIDTH = isMinimize ? SIDEBAR_MINI_WIDTH : SIDEBAR_WIDTH;

  useEffect(() => {
    if (!isDesktop && isMinimize) {
      onMinimize();
    }
  }, [isDesktop]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderContent = (
    <Stack sx={{ position: 'relative' }}>
      {isDesktop && (
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
            zIndex: 1001,
            transform: `translateX(-50%) rotateY(${isMinimize ? '3.142rad' : '0'})`,
          }}
        >
          <Iconify size={16} sx={{ color: 'grey.600' }} icon="charm:chevron-right" />
        </IconButton>
      )}
      {logo ? logo : <Logo />}
      {groups.map(({ title, routes }) => (
        <AsideGroup key={title} title={title} data={routes} />
      ))}
    </Stack>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: WIDTH },
      }}
    >
      <Drawer
        open
        variant="permanent"
        PaperProps={{
          sx: (theme) => ({
            boxShadow: 'none',
            transition: 'all 250ms ease',
            width: WIDTH,
            bgcolor: 'common.white',
            borderRightStyle: 'dashed',
            display: 'none',
            borderRadius: 0,
            [theme.breakpoints.up('lg')]: {
              display: 'block',
            },
          }),
        }}
      >
        {renderContent}
      </Drawer>
      {!isDesktop && isMounted && (
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
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
