import React from 'react';
import {ThemeProvider, createTheme,CssBaseline } from '@mui/material';

const colorConfig = {
  primary: '#336792',
  secondary: '#FF8D2A',
  
};

export const theme = () => {
  return createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            userSelect: 'none',
            fontFamily: `Poppins, sans-serif`, 
          },
        },
      
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily: 'Poppins, sans-serif',
          },
        },
      },
    },
    typography: {
        fontFamily: `Poppins, sans-serif`,
    },
    palette: {
      primary: {
        main: colorConfig.primary,
        contrastText: '#fff',
      },
      secondary: {
        main: colorConfig.secondary,
        contrastText: '#fff',
      },
     
    },
  });
};

const MuiTheme = (props) => {
  return (
    <ThemeProvider theme={theme()}>
        <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

export default MuiTheme;