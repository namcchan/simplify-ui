import { Button, ButtonBase, Card, CardHeader, MenuItem, Popover, Typography } from '@mui/material';
import { Iconify } from '@/components';
import { useState } from 'react';

export const AreaInstalled = () => {
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
      </Card>
    </>
  );
};
