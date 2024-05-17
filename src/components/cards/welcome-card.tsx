import { alpha, Box, Button, Stack, Typography, useTheme } from '@mui/material';

type Props = {
  title: string;
  description?: string;
  illustrationComponent?: React.ReactNode;
};

export const WelcomeCard = ({ title, description, illustrationComponent }: Props) => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      alignItems="center"
      borderRadius={2}
      sx={{
        color: 'primary.darker',
        backgroundImage: `linear-gradient(135deg, ${alpha(
          theme.palette.primary.light,
          0.2,
        )}, ${alpha(theme.palette.primary.dark, 0.2)})`,
      }}
    >
      <Stack p={5} flex={1} alignItems="start">
        <Typography variant="h4" mb={2}>
          {title}
        </Typography>
        <Typography variant="body2" component="p" sx={{ opacity: 0.8 }} mb={3}>
          {description}
        </Typography>
        <Button color="primary" size="small">
          Go Now
        </Button>
      </Stack>
      <Box p={3} maxWidth={360} flex={1}>
        {illustrationComponent}
      </Box>
    </Stack>
  );
};
