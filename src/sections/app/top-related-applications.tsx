import { Avatar, Box, Card, CardHeader, Stack } from '@mui/material';

import { Scrollbar } from '@/components/scrollbar';

export const TopRelatedApplications = () => {
  return (
    <Card>
      <CardHeader title="Top Related Applications" />
      <Scrollbar>
        <Stack sx={{ px: 3, pb: 3 }}>
          <Stack direction="row">
            <Avatar variant="rounded">
              <Box component="img" src="/assets/icons/app/ic_chrome.svg" />
            </Avatar>
          </Stack>
        </Stack>
      </Scrollbar>
    </Card>
  );
};
