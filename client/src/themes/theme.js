import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },

      styleOverrides: {
        root: {
          borderRadius: 3,
          textTransform: 'none',
        },
      },
    },
  },

  typography: {
    fontFamily: 'Noto Serif',
  },

  palette: {
    primary: { main: '#ff8161' },
    secondary: { main: '#ff616f' },
    background: { default: '#18191A' },
    text: { primary: '#F5F6F7' },
    mode: 'dark',
  },
});
