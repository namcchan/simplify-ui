import {
  Box,
  ButtonBase,
  Card,
  CardHeader,
  MenuItem,
  Popover,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

import { Iconify } from '@/components';

export const AreaInstalled = () => {
  const { palette } = useTheme();
  const [open, setOpen] = useState(null);
  const handleOpenMenu = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };
  return (
    <>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem>
          <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>

      <Card>
        <CardHeader
          title="Area Installed"
          subheader="(+43%) than last year"
          action={
            <ButtonBase
              onClick={handleOpenMenu}
              sx={{
                minWidth: 0,
                pr: 0.5,
                backgroundColor: (theme) => theme.palette.grey[200],
                padding: '4px 4px 4px 8px',
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography variant="body2" fontWeight="bold">
                2019
              </Typography>
              <Iconify icon="charm:chevron-down" size={14} sx={{ ml: 0.5 }} />
            </ButtonBase>
          }
        />
        <Box>
          <ReactApexChart
            type="area"
            height={364}
            series={[
              {
                name: 'America',
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
              },
              {
                name: 'Europe',
                data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 77],
              },
            ]}
            options={{
              stroke: {
                curve: 'smooth',
                width: 3,
              },
              chart: {
                toolbar: {
                  show: false,
                },
              },
              colors: [palette.primary.light, palette.warning.light],
              dataLabels: {
                enabled: false,
              },
              legend: {
                show: true,
                position: 'top',
                horizontalAlign: 'right',
              },
              yaxis: {
                max: 150,
                stepSize: 30,
              },
              xaxis: {
                categories: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ],
              },
            }}
          />
        </Box>
      </Card>
    </>
  );
};
