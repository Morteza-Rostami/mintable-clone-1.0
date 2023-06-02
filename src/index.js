import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
//import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import {customTheme, theme} from 'theme/theme'
import { ChakraProvider } from '@chakra-ui/react';
//import { muiTheme } from 'theme/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* mui */}
    {/* <MuiThemeProvider
      theme={muiTheme}
    > */}
      <ChakraProvider 
        theme={customTheme}
      >
        <ThemeProvider
          theme={theme}
        >
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </ChakraProvider>
   {/*  </MuiThemeProvider> */}
  </React.StrictMode>
);