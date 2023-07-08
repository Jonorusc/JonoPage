import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
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
    &::-webkit-scrollbar {
      height: 0;
    }
  }
  
`
