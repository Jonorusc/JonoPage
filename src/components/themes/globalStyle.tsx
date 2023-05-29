import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=K2D:wght@200;400;500;600;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
