import { ThemeOptions } from '@mui/material';
import buttonOverride from './button';
import popoverOverride from './popover';

const components: ThemeOptions['components'] = {
  MuiAccordion: {},
  MuiAccordionActions: {},
  MuiAccordionDetails: {},
  MuiAccordionSummary: {},
  MuiAlert: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
      },
    },
  },
  MuiAlertTitle: {},
  MuiAppBar: {},
  MuiAutocomplete: {
    styleOverrides: {
      paper: ({ theme }) => ({
        boxShadow: theme.customShadows.z20,
      }),
    },
  },
  MuiAvatar: {},
  MuiAvatarGroup: {},
  MuiBackdrop: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.functions.rgba(theme.palette.grey[800], 0.8),
      }),
      invisible: {
        background: 'transparent',
      },
    },
  },
  MuiBadge: {},
  MuiBottomNavigation: {},
  MuiBottomNavigationAction: {},
  MuiBreadcrumbs: {
    styleOverrides: {
      ol: {
        listStyle: 'none',
      },
      li: ({ theme }) => ({
        margin: theme.spacing(0.25, 0),
        fontSize: theme.typography.body2.fontSize,
        color: theme.palette.text.primary,
        '&:hover': {
          textDecoration: 'underline',
        },
        lineHeight: 1.5,
        '& a': {
          color: theme.palette.text.primary,
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      }),
      separator: ({ theme }) => ({
        margin: theme.spacing(0, 2),
      }),
    },
  },
  MuiButton: buttonOverride,
  MuiButtonBase: {},
  MuiButtonGroup: {},
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: theme.customShadows.card,
        borderRadius: Number(theme.shape.borderRadius) * 2,
        position: 'relative',
        zIndex: 0,
      }),
    },
  },
  MuiCardActionArea: {},
  MuiCardActions: {},
  MuiCardContent: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(3),
      }),
    },
  },
  MuiCardHeader: {
    defaultProps: {
      subheaderTypographyProps: {
        variant: 'body2',
      },
      titleTypographyProps: {
        variant: 'h6',
      },
    },
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(3, 3, 0),
      }),
    },
  },
  MuiCardMedia: {},
  MuiCheckbox: {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        border: `1px solid ${theme.palette.grey[600]}`,
        width: 20,
        height: 20,
        borderRadius: 5.6,
        transition: 'all 250ms ease',
        '&:hover': {
          backgroundColor: 'transparent',
        },

        '& .MuiSvgIcon-root': {
          fill: 'transparent',
        },

        '&.Mui-focusVisible': {
          border: `1px solid ${theme.palette.primary.main} !important`,
        },
      }),
      colorPrimary: ({ theme }) => ({
        backgroundColor: 'transparent',

        '&.Mui-checked': {
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), ${theme.functions.linearGradient(
            theme.palette.primary.main,
            theme.palette.primary.dark
          )}`,
          borderColor: theme.palette.primary.main,
        },

        '&:hover': {
          backgroundColor: 'transparent',
        },
      }),

      colorSecondary: ({ theme }) => ({
        backgroundColor: 'transparent',

        '&.Mui-checked': {
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), ${theme.functions.linearGradient(
            theme.palette.primary.main,
            theme.palette.primary.dark
          )}`,
          borderColor: theme.palette.primary.main,
        },

        '&:hover': {
          backgroundColor: 'transparent',
        },
      }),
    },
  },
  MuiChip: {
    variants: [
      {
        props: { color: 'primary', variant: 'soft' },
        style: ({ theme }) => ({
          color: theme.palette.primary.main,
          backgroundColor: theme.functions.rgba(
            theme.palette.primary.main,
            0.08
          ),
        }),
      },
      {
        props: { color: 'secondary', variant: 'soft' },
        style: ({ theme }) => ({
          color: theme.palette.secondary.main,
          backgroundColor: theme.functions.rgba(
            theme.palette.secondary.main,
            0.08
          ),
        }),
      },
      {
        props: { color: 'success', variant: 'soft' },
        style: ({ theme }) => ({
          color: theme.palette.success.main,
          backgroundColor: theme.functions.rgba(
            theme.palette.success.main,
            0.08
          ),
        }),
      },
      {
        props: { color: 'warning', variant: 'soft' },
        style: ({ theme }) => ({
          color: theme.palette.warning.main,
          backgroundColor: theme.functions.rgba(
            theme.palette.warning.main,
            0.08
          ),
        }),
      },
      {
        props: { color: 'error', variant: 'soft' },
        style: ({ theme }) => ({
          color: theme.palette.error.main,
          backgroundColor: theme.functions.rgba(theme.palette.error.main, 0.08),
        }),
      },
      {
        props: { color: 'info', variant: 'soft' },
        style: ({ theme }) => ({
          color: theme.palette.info.main,
          backgroundColor: theme.functions.rgba(theme.palette.info.main, 0.08),
        }),
      },
    ],
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.spacing(1),
      }),
      filled: ({ theme }) => ({
        color: theme.palette.common.white,
        backgroundColor: theme.palette.grey[800],
      }),
      outlined: ({ theme }) => ({
        color: theme.palette.grey[800],
        borderColor: theme.palette.grey[800],
      }),
    },
  },
  MuiCircularProgress: {},
  MuiCollapse: {},
  MuiContainer: {},
  MuiCssBaseline: {},
  MuiDialog: {},
  MuiDialogActions: {},
  MuiDialogContent: {},
  MuiDialogContentText: {},
  MuiDialogTitle: {},
  MuiDivider: {},
  MuiDrawer: {},
  MuiFab: {},
  MuiFilledInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.functions.rgba(theme.palette.grey[500], 0.12),
        '&:hover': {
          backgroundColor: theme.functions.rgba(theme.palette.grey[500], 0.16),
        },
        '&.Mui-focused': {
          backgroundColor: theme.palette.action.focus,
        },
        '&.Mui-disabled': {
          backgroundColor: theme.palette.action.disabledBackground,
        },
      }),
      underline: ({ theme }) => ({
        '&:before': {
          borderBottomColor: theme.functions.rgba(
            theme.palette.grey[500],
            0.56
          ),
        },
      }),
    },
  },
  MuiFormControl: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiInputBase-root.Mui-focused fieldset': {
          borderColor: theme.palette.text.primary,
        },
      }),
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: theme.functions.pxToRem(14),
        color: theme.palette.text.disabled,
        '&.Mui-focused': {
          fontSize: theme.functions.pxToRem(16),
          color: theme.palette.text.primary,
        },
      }),
    },
  },
  MuiFormGroup: {},
  MuiFormHelperText: {},
  MuiFormLabel: {},
  MuiGrid: {},
  MuiGrid2: {},
  MuiIcon: {},
  MuiIconButton: {},
  MuiImageList: {},
  MuiImageListItem: {},
  MuiImageListItemBar: {},
  MuiInput: {
    styleOverrides: {
      underline: ({ theme }) => ({
        '&:before': {
          borderBottomColor: theme.functions.rgba(
            theme.palette.grey[500],
            0.56
          ),
        },
      }),
    },
  },
  MuiInputAdornment: {},
  MuiInputBase: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&.Mui-disabled': {
          '& svg': { color: theme.palette.text.disabled },
        },
      }),
      input: ({ theme }) => ({
        fontSize: theme.spacing(14 / 8),
        '&::placeholder': {
          opacity: 1,
          color: theme.palette.text.disabled,
        },
      }),
    },
  },
  MuiInputLabel: {},
  MuiLinearProgress: {},
  MuiLink: {},
  MuiList: {},
  MuiListItem: {},
  MuiListItemAvatar: {},
  MuiListItemButton: {},
  MuiListItemIcon: {},
  MuiListItemSecondaryAction: {},
  MuiListItemText: {},
  MuiListSubheader: {},
  MuiMenu: {},
  MuiMenuItem: {},
  MuiMenuList: {},
  MuiMobileStepper: {},
  MuiModal: {},
  MuiNativeSelect: {},
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.grey[300],
        },
        '&.Mui-disabled': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.action.disabledBackground,
          },
        },
      }),
    },
  },
  MuiPagination: {
    styleOverrides: {},
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: {},
      selected: ({ theme }) => ({
        color: theme.palette.common.white,
        backgroundColor: theme.palette.grey[800],
      }),
    },
  },
  MuiPaper: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        background: 'white',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: theme.spacing(2),
        backgroundImage: 'none',
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        boxShadow: theme.customShadows.card,
      }),
    },
  },
  MuiPopover: popoverOverride,
  MuiPopper: {},
  MuiRadio: {
    styleOverrides: {
      root: ({ theme }) => ({
        width: theme.spacing(5),
        height: theme.spacing(5),
      }),
    },
  },
  MuiRating: {},
  MuiScopedCssBaseline: {},
  MuiSelect: {},
  MuiSkeleton: {},
  MuiSlider: {},
  MuiSnackbar: {},
  MuiSnackbarContent: {},
  MuiSpeedDial: {},
  MuiSpeedDialAction: {},
  MuiSpeedDialIcon: {},
  MuiStack: {},
  MuiStep: {},
  MuiStepButton: {},
  MuiStepConnector: {},
  MuiStepContent: {},
  MuiStepIcon: {},
  MuiStepLabel: {},
  MuiStepper: {},
  MuiSvgIcon: {},
  MuiSwipeableDrawer: {},
  MuiSwitch: {},
  MuiTab: {
    defaultProps: {
      disableRipple: true,
      iconPosition: 'start',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        minWidth: 0,
        padding: 0,
        marginRight: theme.spacing(3),
        minHeight: theme.spacing(6),
        [theme.breakpoints.up('md')]: {
          marginRight: theme.spacing(5),
        },
        '&.Mui-selected': {
          color: theme.palette.text.primary,
        },
      }),
    },
  },
  MuiTable: {},
  MuiTableBody: {},
  MuiTableCell: {
    styleOverrides: {
      head: ({ theme }) => ({
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.grey[200],
      }),
    },
  },
  MuiTableContainer: {},
  MuiTableFooter: {},
  MuiTableHead: {},
  MuiTablePagination: {},
  MuiTableRow: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderColor: theme.palette.action.hover,
        borderBottomStyle: 'dashed',
      }),
    },
  },
  MuiTableSortLabel: {},
  MuiTabs: {
    defaultProps: {
      variant: 'scrollable',
      scrollButtons: 'auto',
    },
    styleOverrides: {
      flexContainer: ({ theme }) => ({
        background: 'white',
        minHeight: theme.spacing(6),
      }),
      indicator: ({ theme }) => ({
        backgroundColor: theme.palette.text.primary,
      }),
    },
  },
  MuiTextField: {},
  MuiToggleButton: {},
  MuiToggleButtonGroup: {},
  MuiToolbar: {},
  MuiTooltip: {
    styleOverrides: {
      tooltip: ({ theme }) => ({
        padding: theme.spacing(3 / 8, 6 / 8),
        backgroundColor: theme.palette.grey[800],
      }),
      arrow: ({ theme }) => ({
        color: theme.palette.grey[800],
      }),
    },
  },
  MuiTouchRipple: {},
  MuiTypography: {
    styleOverrides: {
      paragraph: ({ theme }) => ({
        marginBottom: theme.spacing(2),
      }),
      gutterBottom: ({ theme }) => ({
        marginBottom: theme.spacing(1),
      }),
    },
  },
  MuiUseMediaQuery: {},
};

export default components;
