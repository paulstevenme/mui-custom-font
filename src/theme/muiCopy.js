/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const Primary = '#336792';
const BodyBG = '#FFF';

const colorConfig = {
  primary: '#336792',
  secondary: '#FF8D2A',
  
};

export const theme = () => {
  return createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            height: '64px',
          },
        },
      },
      MuiSelect: {
        defaultProps: {
          size: 'small',
        },
        styleOverrides: {
          root: {
            '&.no-background': {
              background: 'transparent',
            },
            '&.no-border': {
              '& .MuiOutlinedInput-notchedOutline': {
                border: 0,
              },
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            userSelect: 'none',
            fontFamily: `Poppins, sans-serif`, 
          },
        },
      
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            background: BodyBG,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: BodyBG,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            '&:hover': {
              border: '2px solid #FDC90B',
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '&.size-small .MuiInputBase-root': {
              height: '40px',
              boxSizing: 'border-box',
            },
            '& .MuiInputBase-input.Mui-disabled': {
              //WebkitTextFillColor: 'white',
            },
            '& ::-webkit-outer-spin-button, & ::-webkit-inner-spin-button': {
              '-webkit-appearance': 'none',
              margin: 0,
            },
            '&[type=number]': {
              '-moz-appearance': 'textfield',
              pointerEvents: 'none',
            },
          },
        },
      },
      MuiButton: {
        defaultProps: {
          size: 'small',
        },
        styleOverrides: {
          root: {
            padding: '8px 16px',
            boxShadow: 'none',
            textTransform: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
            '&.dashed-border': {
              borderStyle: 'dashed',
            },
            '&.MuiButton-sizeSmall': {
              height: '40px',
              maxHeight: '40px',
            },
            '&.btn-very-small': {
              maxHeight: '30px',
            },
            '&.Mui-disabled.MuiButton-containedSecondary': {
              background: colorConfig.secondary,
              color: colorConfig.white,
              opacity: 0.5,
            },
          },
          text: {
            //color: 'white',
          },
          contained: {
            textTransform: 'none',
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
      MuiMenuItem: {
        styleOverrides: {
          root: {
            backgroundColor: BodyBG,
            '&.Mui-selected': {
              backgroundColor: Primary,
              color: '#fff',
            },
            '&.multi-select-menu-item': {
              borderColor: colorConfig.borderSecondary,
              margin: '0 10px',
              '&.Mui-selected': {
                backgroundColor: BodyBG,
                color: colorConfig.textDefault,
                '&:hover': {
                  background: colorConfig.backgroundSecondary,
                },
              },
              '&.Mui-focusVisible': {
                background: colorConfig.focusBg,
              },
            },
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            backgroundColor: colorConfig.progressbarRoot,
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1440,
        xl: 1920,
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
        light: colorConfig.secondaryLight,
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