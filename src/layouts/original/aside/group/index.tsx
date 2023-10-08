'use client';

import { Box, Collapse, List, ListItemText, Typography, alpha, useTheme } from '@mui/material';
import { useState } from 'react';
import { AsideItem, AsideItemIcon } from './styles';
import _ from 'lodash';
import { useDashboardLayout } from '../../provider';
import { Iconify } from '@/components';
import { useLocation, Link } from 'react-router-dom';

export default function AsideGroup({ data = [], ...other }: any) {
  const { isMinimize } = useDashboardLayout();
  const theme = useTheme();

  return (
    <Box px={isMinimize ? 0.5 : 2}>
      {!isMinimize && (
        <Typography
          component="div"
          textTransform="uppercase"
          mb={0.5}
          sx={{ p: isMinimize ? theme.spacing(0) : '16px 8px 8px 12px' }}
          variant="caption"
          color="action.disabled"
          fontWeight="bold"
        >
          {other.title}
        </Typography>
      )}
      <List disablePadding>
        {data.map((item: any) => (
          <SidebarItemRoot key={item.title} item={item} level={0} />
        ))}
      </List>
    </Box>
  );
}

function SidebarItemRoot({ item, level }: { item: any; level: number }) {
  const { pathname } = useLocation();
  const { title, path, icon, children } = item;
  const theme = useTheme();
  let isActive = pathname.startsWith(path);
  const { isMinimize } = useDashboardLayout();

  if (path === '/dashboard') {
    isActive = pathname === path;
  }

  const [open, setOpen] = useState(isActive);

  const isChild = level > 0;

  const isParentActive = !isChild && isActive;

  return (
    <>
      <AsideItem
        className={isParentActive ? 'active' : ''}
        onClick={() => setOpen((v: boolean) => !v)}
        component={children ? Box : Link}
        to={path}
        sx={{
          transition: 'all 250ms ease',
          ...(isMinimize && {
            display: 'flex',
            height: 'auto',
            flexDirection: 'column',
            alignItems: 'center',
          }),
          ...(!isMinimize && {
            paddingLeft: 1.5 + (level > 1 ? level - 1 : 0),
          }),
          ...(!isChild && {
            '&.active': {
              color: theme.palette.primary.main,
              bgcolor: alpha(theme.palette.primary.main, 0.08),
              fontWeight: 'bold',
            },
          }),
        }}
      >
        <AsideItemIcon state={{ isMinimize }}>
          {isChild ? (
            <Box
              width={isActive ? 8 : 4}
              height={isActive ? 8 : 4}
              borderRadius="50%"
              bgcolor={isActive ? 'primary.main' : 'grey.600'}
            />
          ) : (
            icon
          )}
        </AsideItemIcon>
        <ListItemText
          primaryTypographyProps={{
            fontSize: isMinimize ? 11 : 14,
            color: isActive ? 'text-primary' : 'grey.600',
            fontWeight: isActive ? '600' : 'normal',
          }}
          primary={title}
        />
        <Iconify
          sx={{
            transition: 'all 250ms ease',
            display: !isChild && !_.isEmpty(children) ? 'inline-block' : 'none',
            ...(open && !isMinimize && { transform: 'rotate(90deg)' }),
            ...(isMinimize && {
              position: 'absolute',
              top: 12,
              right: 0,
            }),
          }}
          size={isMinimize ? 16 : 20}
          icon="charm:chevron-right"
        />
      </AsideItem>
      {!isMinimize && (
        <Collapse in={open}>
          {children?.map((item: any) => (
            <SidebarItemRoot item={item} key={item.path} level={level + 1} />
          ))}
        </Collapse>
      )}
    </>
  );
}
