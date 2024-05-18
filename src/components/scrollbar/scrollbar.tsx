import { Box, SxProps } from '@mui/material';
import { forwardRef, PropsWithChildren } from 'react';
import { Props as SimplebarProps } from 'simplebar-react';

import { StyledRootScrollbar, StyledScrollbar } from './styles';

type ScrollbarProps = SimplebarProps & { sx: SxProps } & PropsWithChildren;

export const Scrollbar = forwardRef<ScrollbarProps, ScrollbarProps>(
  ({ children, sx, ...other }, ref) => {
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (mobile) {
      return (
        <Box ref={ref} sx={{ overflow: 'auto', ...sx }} {...other}>
          {children}
        </Box>
      );
    }

    return (
      <StyledRootScrollbar>
        <StyledScrollbar
          scrollableNodeProps={{
            ref,
          }}
          clickOnTrack={false}
          sx={sx}
          {...other}
        >
          {children}
        </StyledScrollbar>
      </StyledRootScrollbar>
    );
  },
);
