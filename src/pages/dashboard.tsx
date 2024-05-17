import { Button, Card, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { WelcomeCard } from '@/components';
import { IconWelcome2 } from '@/components/icons';
import { CurrentDownload, NewInvoice, SummaryCard, TopRelatedApplications } from '@/sections/app';
import { AreaInstalled } from '@/sections/app/area-installed.tsx';

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
        <Grid xs={12} md={4}>
          <CurrentDownload />
        </Grid>
        <Grid xs={12} md={8}>
          <AreaInstalled />
        </Grid>
        <Grid xs={12} lg={8}>
          <NewInvoice />
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <TopRelatedApplications />
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
