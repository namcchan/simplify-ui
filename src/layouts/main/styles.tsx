import { ListItemButton, styled } from '@mui/material';

export const NavItem = styled(ListItemButton)(({ theme }) => ({
  ...theme.typography.body2,
  position: 'relative',
  backgroundColor: 'transparent',
  borderRadius: 'none',
  padding: 0,
  height: '100%',
  '&:hover': {
    backgroundColor: 'transparent',
    opacity: 0.64,
    '&:before': {
      display: 'block',
    },
  },
  '&:before': {
    content: '""',
    width: 6,
    height: 6,
    borderRadius: '100%',
    position: 'absolute',
    left: '-12px',
    backgroundColor: theme.palette.text.primary,
    display: 'none',
  },
}));
