import { Paper, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import { SvgColor } from '@/components';

type Props = {
  title?: string;
  numberPercent?: number;
  numberShort?: number;
};

export const SummaryCard: React.FC<Props> = ({
  title = 'Total Active Users',
  numberPercent = 89.4,
  numberShort = 43700,
}) => {
  const theme = useTheme();

  return (
    <Paper sx={{ p: 3, display: 'flex' }}>
      <Stack>
        <Typography variant="body2">{title}</Typography>
        <Stack direction="row" alignItems="center" sx={{ mt: 2, mb: 1 }} gap={1}>
          <SvgColor
            src="/assets/icons/duotone/ic_solar.svg"
            sx={{
              width: theme.functions.pxToRem(24),
              height: theme.functions.pxToRem(24),
              color: numberPercent > 0 ? 'success.main' : 'error.main',
              transform: `rotateX(${numberPercent > 0 ? '0deg' : '180deg'})`,
            }}
          />
          <Typography variant="body2">
            {numberPercent > 0 && '+'}
            {numberPercent}%
          </Typography>
        </Stack>
        <Typography variant="h3">{Intl.NumberFormat('en').format(numberShort)}</Typography>
      </Stack>
    </Paper>
  );
};
