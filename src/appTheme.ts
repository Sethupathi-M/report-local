import { createBreakpoints } from '@mui/system';
import { createTheme } from '@mui/material/styles';

import OpenSansRegularWoff from './assets/fonts/OpenSans/OpenSans-Regular.woff';
import OpenSansRegularWoff2 from './assets/fonts/OpenSans/OpenSans-Regular.woff2';
import OpenSansBoldWoff from './assets/fonts/OpenSans/OpenSans-SemiBold.woff';
import OpenSansBoldWoff2 from './assets/fonts/OpenSans/OpenSans-SemiBold.woff2';
import OpenSansItalicWoff from './assets/fonts/OpenSans/OpenSans-Italic.woff';
import OpenSansItalicWoff2 from './assets/fonts/OpenSans/OpenSans-Italic.woff2';

import SignikaRegularWoff from './assets/fonts/Signika/Signika-Regular.woff';
import SignikaRegularWoff2 from './assets/fonts/Signika/Signika-Regular.woff2';
import SignikaBoldWoff from './assets/fonts/Signika/Signika-SemiBold.woff';
import SignikaBoldWoff2 from './assets/fonts/Signika/Signika-SemiBold.woff2';

import RobotoRegularWoff from './assets/fonts/Roboto/Roboto-Regular.woff';
import RobotoRegularWoff2 from './assets/fonts/Roboto/Roboto-Regular.woff2';
import RobotoBoldWoff from './assets/fonts/Roboto/Roboto-Medium.woff';
import RobotoBoldWoff2 from './assets/fonts/Roboto/Roboto-Medium.woff2';

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    white: string;
    black: string;
    gray: string;
    lightOrange: string;
    lightBlue: string;
    fireOpal: string;
    blue: string;
    seaGreen: string;
    lightRed: string;
    azure: string;
    lemonChiffon: string;
    vividOrange: string;
  }

  interface Palette {
    textPrimary: Palette['primary'];
    textSecondary: Palette['primary'];
    textDisabled: Palette['primary'];
    icon: Palette['text'];
    common: CommonColors;
  }

  interface PaletteOptions {
    textPrimary: PaletteOptions['primary'];
    textSecondary: PaletteOptions['primary'];
    textDisabled: PaletteOptions['primary'];
    icon: Palette['text'];
    common?: Partial<CommonColors>;
  }
}

const breakpoints = createBreakpoints({});

export const appTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1280,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#F0874A',
      contrastText: '#FFF',
      light: '#F0874A',
      dark: '#FA7A30',
    },
    secondary: {
      main: '#3C4C5B',
      contrastText: '#FFF',
      light: '#FFF8F4',
      dark: '#D2D8DD',
    },
    text: {
      primary: '#3C4C5B',
      secondary: '#6D757D',
      disabled: '#D2D8DD',
    },
    textPrimary: {
      main: '#3C4C5B',
      contrastText: '#FFF',
      light: '#3C4C5B',
    },
    textSecondary: {
      main: '#6D757D',
      contrastText: '#FFF',
      light: '#6D757D',
    },
    textDisabled: {
      main: '#D2D8DD',
      contrastText: '#FFF',
      light: '#D2D8DD',
    },
    error: {
      main: '#B00020',
      contrastText: '#FFF',
      light: '#B00020',
    },
    info: {
      main: '#0E71E3',
      contrastText: '#FFF',
      light: '#0E71E3',
    },
    success: {
      main: '#168154',
      contrastText: '#FFF',
      light: '#168154',
    },
    warning: {
      main: '#BC5316',
      contrastText: '#FFF',
      light: '#BC5316',
    },
    common: {
      white: '#FFF',
      black: '#000',
      gray: '#F5F5F5',
      lightOrange: '#FFF4ED',
      lightBlue: '#8BAAD9',
      fireOpal: '#EB5757',
      blue: '#2F80ED',
      seaGreen: '#219653',
      lightRed: '#fff1f1',
      azure: '#F0FFFF',
      lemonChiffon: '#FFFCC8',
      vividOrange: '#FF991F',
    },
    icon: {
      primary: '#EEA83F',
      secondary: '#3C4C5B',
      disabled: '#D2D8DD',
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 16,
    h1: {
      fontSize: 28,
      fontWeight: 600,
      lineHeight: 1.25,
      fontFamily: 'Signika',
    },
    h2: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.25,
      fontFamily: 'Signika',
    },
    h3: {
      fontSize: 17,
      fontWeight: 600,
      fontFamily: 'Signika',
    },
    h4: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.625,
      letterSpacing: 0.2,
      fontFamily: '"Open Sans", sans-serif',
    },
    h6: {
      fontSize: 12,
      color: '#3C4C5B',
      lineHeight: 1.2,
      fontWeight: 400,
    },
    caption: {
      fontSize: 13,
    },
    body1: {
      fontSize: 14,
      lineHeight: 1.4,
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.4,
      fontWeight: 600,
    },
    button: {
      fontSize: 14,
      fontWeight: 400,
      fontFamily: 'Signika',
    },
    subtitle1: {
      fontFamily: 'Open Sans',
    },
  },
  shape: {
    borderRadius: 10,
  },
  mixins: {
    toolbar: {
      minHeight: 64,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          src:
            local('Open Sans'),
            url(${RobotoBoldWoff2}) format('woff2'),
            url(${RobotoBoldWoff}) format('woff');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          src:
            local('Open Sans'),
            url(${RobotoRegularWoff2}) format('woff2'),
            url(${RobotoRegularWoff}) format('woff');
        }
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          src:
            local('Open Sans'),
            url(${OpenSansRegularWoff2}) format('woff2'),
            url(${OpenSansRegularWoff}) format('woff');
        }
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 600;
          src:
            local('Open Sans'),
            url(${OpenSansBoldWoff2}) format('woff2'),
            url(${OpenSansBoldWoff}) format('woff');
        }
        @font-face {
          font-family: 'Open Sans';
          font-style: italic;
          font-weight: 400;
          src:
            local('Open Sans'),
            url(${OpenSansItalicWoff2}) format('woff2'),
            url(${OpenSansItalicWoff}) format('woff');
        }
        @font-face {
          font-family: 'Signika';
          font-style: normal;
          font-weight: 400;
          src:
            local('Signika'),
            url(${SignikaRegularWoff2}) format('woff2'),
            url(${SignikaRegularWoff}) format('woff');
        }
        @font-face {
          font-family: 'Signika';
          font-style: normal;
          font-weight: 600;
          src:
            local('Signika'),
            url(${SignikaBoldWoff2}) format('woff2'),
            url(${SignikaBoldWoff}) format('woff');
        }
        html, &* {
          scrollbar-color: #cccccc #e5e5e5;
          scrollbar-width: thin;
        }
        body {
          background: #f2f4f7;
          &::-webkit-scrollbar {
            width: 12px;
            height: 6px;
          }
          & *::-webkit-scrollbar {
            width: 8px;
            height: 6px;
          }
          &::-webkit-scrollbar-track, & *::-webkit-scrollbar-track {
            border-radius: 10px;
            background: #e5e5e5;
          }
          &::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: #cccccc;
          }
          &::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover {
            background: #999999;
          }
        }
        #root {
          height: 100vh;
          overflow: hidden;
        }
      `,
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          [breakpoints.up('lg')]: {
            paddingLeft: 32,
            paddingRight: 32,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 6px 10px rgba(56, 76, 93, 0.1)',
        },
      },
    },
  },
});
