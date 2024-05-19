import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  ListItemButton,
  SxProps,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
import React from 'react';

import { Logo } from '@/components/logo';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  sx?: SxProps;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      ...props.sx,
      boxShadow: trigger ? 'rgba(145, 158, 171, 0.16) 0px 8px 16px 0px;' : 'none',
      minHeight: trigger ? '64px !important' : '80px !important',
    },
  });
}

export const MainHeader = () => {
  return (
    <>
      <AppBar>
        <ElevationScroll>
          <Toolbar disableGutters>
            <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
              <Logo />
              <Box flexGrow={1} />
              <Link>
                <ListItemButton>Home</ListItemButton>
              </Link>
              <Link>
                <ListItemButton>Components</ListItemButton>
              </Link>
              <Button size="medium" variant="outlined">
                Login
              </Button>
            </Container>
          </Toolbar>
        </ElevationScroll>
      </AppBar>
      <Toolbar />
    </>
  );
};
