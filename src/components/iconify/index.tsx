import { Icon, IconifyIcon } from '@iconify/react';
import { Box, BoxProps, SxProps } from '@mui/material';
import { forwardRef } from 'react';

type IconifyProps = {
  sx?: SxProps;
  size?: number;
  icon: IconifyIcon | string;
};

export const Iconify = forwardRef<BoxProps, IconifyProps>(
  ({ icon, size = 20, sx, ...other }, ref) => {
    return (
      <Box
        ref={ref}
        component={Icon}
        icon={icon}
        sx={{ width: size, height: size, ...sx }}
        {...other}
      />
    );
  },
);
