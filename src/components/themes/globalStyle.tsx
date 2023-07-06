import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'K2D';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('K2D Light'), local('K2D-Light'),
        url('/fonts/K2D-Light.woff2') format('woff2');
  }
  
  @font-face {
    font-family: 'K2D';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('K2D Regular'), local('K2D-Regular'),
        url('/fonts/K2D-Regular.woff2') format('woff2');
  }
  
  @font-face {
    font-family: 'K2D';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('K2D Medium'), local('K2D-Medium'),
        url('/fonts/K2D-Medium.woff2') format('woff2');
  }
  
  @font-face {
    font-family: 'K2D';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('K2D SemiBold'), local('K2D-SemiBold'),
        url('/fonts/K2D-SemiBold.woff2') format('woff2');
  }
  
  @font-face {
    font-family: 'K2D';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('K2D Bold'), local('K2D-Bold'),
        url('/fonts/K2D-Bold.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar {
      width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.palette.grey};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.palette.darkenBlue};
  }

  html {
    font-size: ${({ theme }) => theme.htmlFontSize};
  }

  body {
    background-color: ${({ theme }) => theme.bodyColor};
    color: ${({ theme }) => theme.palette.darker};
    font-family: ${({ theme }) => theme.font.family};
  }
`
