import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
    h3: { letterSpacing: '0.1rem' },
  },

  palette: {
    primary: { main: '#ff616f' },
    secondary: { main: '#000063' },
    background: { default: '#18191A' },
    text: { primary: '#F5F6F7' },
    mode: 'dark',
  },
});
