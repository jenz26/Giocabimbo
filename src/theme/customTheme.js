// src/theme/customTheme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#A0E7E5', // verde acqua chiaro
    },
    secondary: {
      main: '#FFEE93', // giallo pastello tenue
    },
    info: {
      main: '#A2D2FF', // azzurro pastello
    },
    warning: {
      main: '#FDBA74', // arancione delicato
    },
    background: {
      default: '#FAFAFA', // sfondo principale
    },
  },
  typography: {
    fontFamily: [
      '"Poppins"',
      '"Roboto"',
      'Arial',
      'sans-serif'
    ].join(','),
    fontSize: 16,
  },
  shape: {
    borderRadius: 12, // bottoni e card più morbidi
  },
});

export default theme;
