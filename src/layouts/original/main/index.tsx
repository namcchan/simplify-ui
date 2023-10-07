import { styled } from '@mui/material';
import { HEADER_DESKTOP, HEADER_MOBILE } from '@/layouts/constants.ts';

export const Main = styled('main')(({ theme }) => ({
  transition: 'all 250ms ease',
  backgroundColor: theme.palette.grey[100],
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: HEADER_MOBILE + 8,
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.up('lg')]: {
    paddingTop: HEADER_DESKTOP + 8,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));
