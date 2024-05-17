import { AppBar, AppBarProps, Box, IconButton, Stack, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Iconify } from '@/components';
import {
  HEADER_DESKTOP,
  HEADER_MOBILE,
  SIDEBAR_MINI_WIDTH,
  SIDEBAR_WIDTH,
} from '@/layouts/constants.ts';
import { bgBlur } from '@/utils';

import { useDashboardLayout } from '../provider';
import AccountPopover from './account-popover';
import LanguagePopover from './language-popover';
import NotificationsPopover from './notification-popover';

const StyledAppBar = styled((props: AppBarProps & { state: any }) => <AppBar {...props} />)(({
  theme,
  state,
}) => {
  return {
    zIndex: 1101,
    borderRadius: 0,
    transition: 'all 250ms ease',
    ...bgBlur({ color: theme.palette.background.default }),
    boxShadow: 'none',
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${(state.isMinimize ? SIDEBAR_MINI_WIDTH : SIDEBAR_WIDTH) + 1}px)`,
    },
  } as any;
});

export default function Header() {
  const { onOpenSidebar } = useDashboardLayout();
  const { isMinimize } = useDashboardLayout();
  return (
    <StyledAppBar state={{ isMinimize }}>
      <Toolbar
        sx={(theme) => ({
          minHeight: HEADER_MOBILE,
          [theme.breakpoints.up('lg')]: {
            minHeight: HEADER_DESKTOP,
            padding: theme.spacing(0, 5),
          },
        })}
      >
        <IconButton
          onClick={onOpenSidebar}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: { lg: 'none' },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        {/*<SearchBar />*/}
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <LanguagePopover />
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </Toolbar>
    </StyledAppBar>
  );
}
