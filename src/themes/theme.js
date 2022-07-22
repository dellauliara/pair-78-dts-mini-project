import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#7f4e31',
      light: '#98735a',
      dark: '#000000',
    },
    secondary: {
      main: '#efd3ca',
      contrastText: 'rgba(243,238,238,0.87)',
    },
    text: {
      primary: 'rgba(224,224,224,0.87)',
      secondary: 'rgba(222,217,217,0.54)',
      disabled: 'rgba(230,224,224,0.38)',
      hint: 'rgba(226,220,220,0.38)',
    },
    background: {
      default: '#0c0b0b',
      paper: '#5a2222',
    },
      },
});

export default theme;
