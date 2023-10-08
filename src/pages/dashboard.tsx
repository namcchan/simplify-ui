import { Iconify, WelcomeCard } from '@/components';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Container,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { IconWelcome2 } from '@/components/icons';
import Grid from '@mui/material/Unstable_Grid2';
import { SummaryCard } from '@/sections/app/summary-card.tsx';
import { CurrentDownload } from '@/sections/app/current-download.tsx';
import { Scrollbar } from '@/components/scrollbar';

const DashboardPage = () => {
  return (
    <Container maxWidth="xl">
      <Button size="medium" sx={{ mb: 5 }}>
        CLick me!
      </Button>
      <Grid container spacing={3}>
        <Grid xs={12} md={8}>
          <WelcomeCard
            title="Welcome back 👋 Jaydon Frankie"
            description="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
            illustrationComponent={<IconWelcome2 />}
          />
        </Grid>
        <Grid xs={12} md={4}>
          <Card sx={{ minHeight: 200 }}></Card>
        </Grid>
        <Grid xs={12} md={4}>
          <SummaryCard title="Total Active Users" numberPercent={89.4} numberShort={437000} />
        </Grid>
        <Grid xs={12} md={4}>
          <SummaryCard title="Total Installed" numberPercent={-12.2} numberShort={663000} />
        </Grid>
        <Grid xs={12} md={4}>
          <SummaryCard title="Total Downloads" numberPercent={29.4} numberShort={92300} />
        </Grid>
        <Grid xs={12} md={6}>
          <CurrentDownload />
        </Grid>
        <Grid xs={12} md={6}>
          <Card sx={{ minHeight: 200 }}></Card>
        </Grid>
        <Grid xs={12} lg={8}>
          <Card>
            <CardHeader title="New Invoice" />
            <Scrollbar>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Invoice Id</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>INV-1990</TableCell>
                    <TableCell>Android</TableCell>
                    <TableCell>$83.74</TableCell>
                    <TableCell>
                      <Chip
                        color="success"
                        variant="soft"
                        label="Paid"
                        size="small"
                        sx={{ fontWeight: 'bold' }}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>INV-1990</TableCell>
                    <TableCell>Android</TableCell>
                    <TableCell>$83.74</TableCell>
                    <TableCell>
                      <Chip
                        color="success"
                        variant="soft"
                        label="Paid"
                        size="small"
                        sx={{ fontWeight: 'bold' }}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>INV-1990</TableCell>
                    <TableCell>Android</TableCell>
                    <TableCell>$83.74</TableCell>
                    <TableCell>
                      <Chip
                        color="success"
                        variant="soft"
                        label="Paid"
                        size="small"
                        sx={{ fontWeight: 'bold' }}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>INV-1990</TableCell>
                    <TableCell>Android</TableCell>
                    <TableCell>$83.74</TableCell>
                    <TableCell>
                      <Chip
                        color="success"
                        variant="soft"
                        label="Paid"
                        size="small"
                        sx={{ fontWeight: 'bold' }}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Scrollbar>

            <Divider />
            <Box textAlign="right" p={2}>
              <Button variant="text" size="small">
                View all <Iconify icon="charm:chevron-right" />
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Card sx={{ minHeight: 200 }}></Card>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Card sx={{ minHeight: 200 }}></Card>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Card sx={{ minHeight: 200 }}></Card>
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <Card sx={{ minHeight: 200 }}></Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardPage;
