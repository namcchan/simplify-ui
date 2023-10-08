import { Box, BoxProps, SxProps } from '@mui/material';
import { forwardRef } from 'react';

type Props = {
  src: string;
  sx?: SxProps;
};

export const SvgColor = forwardRef<BoxProps, Props>(
  ({ src, sx, ...rest }, ref) => (
    <Box
      component="span"
      className="svg-color"
      ref={ref}
      sx={{
        width: 24,
        height: 24,
        display: 'inline-block',
        bgcolor: 'currentColor',
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        ...sx,
      }}
      {...rest}
    />
  )
);
