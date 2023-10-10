import { Box, Card, CardHeader, useTheme } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export const CurrentDownload = () => {
  const theme = useTheme();

  const series: ApexNonAxisChartSeries = [12244, 53345, 44313, 78343];
  const options: ApexOptions = {
    chart: { type: 'donut', height: 240, width: '100%' },
    labels: ['Mac', 'Window', 'IOS', 'Android'],
    legend: { show: true, position: 'bottom' },
    dataLabels: { enabled: false },
    tooltip: {
      enabled: true,
      style: {},
    },
    colors: [
      theme.palette.info.main,
      theme.palette.error.main,
      theme.palette.warning.main,
      theme.palette.primary.main,
    ],
    fill: {
      colors: [
        theme.palette.info.main,
        theme.palette.error.main,
        theme.palette.warning.main,
        theme.palette.primary.main,
      ],
    },
    stroke: { width: 2, colors: ['#FFFFFF'] },

    plotOptions: {
      pie: {
        startAngle: 10,
        expandOnClick: true,
        donut: {
          size: '90%',
          labels: {
            show: true,
            name: { show: true },
            value: { show: true },
            total: {
              show: true,
              showAlways: true,
              formatter: function (w) {
                const totals = w.globals.seriesTotals;
                const result = totals.reduce((a: number, b: number) => a + b, 0);
                return Intl.NumberFormat('en').format(result);
              },
            },
          },
        },
      },
    },
  };

  return (
    <Card>
      <CardHeader title="Current Download" />
      <Box
        component={ReactApexChart}
        mb={3}
        mt={4}
        options={options}
        series={series}
        type="donut"
      />
    </Card>
  );
};
