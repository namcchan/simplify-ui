import { Box, Card, CardHeader, useTheme } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export const CurrentDownload = () => {
  const theme = useTheme();

  const series: ApexNonAxisChartSeries = [12244, 53345, 44313, 78343];
  const options: ApexOptions = {
    chart: { type: 'donut' },
    labels: ['Mac', 'Window', 'IOS', 'Android'],
    legend: { show: true },
    dataLabels: { enabled: false },
    tooltip: { enabled: true },
    // fill: {
    //   colors: [
    //     theme.palette.info.main,
    //     theme.palette.error.main,
    //     theme.palette.warning.main,
    //     theme.palette.success.main,
    //   ],
    // },
    stroke: { width: 0 },
    plotOptions: {
      pie: {
        expandOnClick: true,
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: { show: false },
            total: {
              show: true,
              showAlways: true,
              formatter: function (w) {
                const totals = w.globals.seriesTotals;

                const result = totals.reduce((a: number, b: number) => a + b, 0);

                return (result / 1000).toFixed(3);
              },
            },
          },
        },
      },
    },
  };

  return (
    <Card>
      <CardHeader title="Current Download" sx={{ mb: 5 }} />
      <Box
        component={ReactApexChart}
        display="flex"
        flexDirection="column"
        options={options}
        series={series}
        type="donut"
      />
    </Card>
  );
};
