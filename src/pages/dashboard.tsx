import { Checkbox } from '@/components';
import { Box, Container, FormControlLabel, TextField, Typography } from '@mui/material';

const DashboardPage = () => {
  return (
    <Container maxWidth="xl">
      <Box>
        <TextField label="Email address" size="small" />
      </Box>
      <FormControlLabel control={<Checkbox defaultChecked />} label="HIhihi" />
      <Typography variant="h3">Dashboard</Typography>
    </Container>
  );
};

export default DashboardPage;
