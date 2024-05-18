import { ListItemButton, ListItemIcon, ListItemIconProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AsideItem = styled((props: any) => <ListItemButton disableGutters {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body2,
    height: 44,
    position: 'relative',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 0.5),
    marginBottom: 4,
  }),
);

export const AsideItemIcon = styled((props: ListItemIconProps & { state: any }) => (
  <ListItemIcon {...props} />
))(({ state }) => {
  return {
    width: 24,
    height: 24,
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 'auto',
    marginRight: state.isMinimize ? 0 : 16,
  };
});
