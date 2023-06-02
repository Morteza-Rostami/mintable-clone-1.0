import { createTheme } from "@mui/material"
import { red, green } from '@mui/material/colors';
import { extendTheme } from "@chakra-ui/react"

/* MUI */

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: green[500],
    },
    // Override the default colors
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
    // Add new colors
    customColor: {
      main: '#9c27b0',
    },
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
  },
})

/* chakra ui */

export const customTheme = extendTheme({
  fonts: {
    body: "'Lato', sans-serif",
    heading: "'Lato', sans-serif",
  },
  colors: {
    primary: {
      50: "#5168e1",
     /*  100: "#bae3ff",
      200: "#7cc4fa",
      300: "#47a3f3",
      400: "#2186eb",
      500: "#0967d2",
      600: "#0552b5",
      700: "#03449e",
      800: "#01337d",
      900: "#002159", */
    },
  },
})

/* styled-components */

export const theme = {
  wrap: `
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  `
}