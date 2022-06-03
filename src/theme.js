import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF7E00',
    },
    secondary: {
      main: '#0A122D',
      light: 'rgb(123, 128, 154)'
    },
    error: {
      main: red.A400,
    },
  },
 
});

export default theme;
