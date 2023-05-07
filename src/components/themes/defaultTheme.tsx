// components/themes/defaultTheme.tsx
import { DefaultTheme } from 'styled-components'
export const defaultTheme: DefaultTheme = {
  name: 'default',
  borderRadius: '4px',
  bodyColor: 'wheat',
  textColor: 'red',
  palette: {
    common: {
      black: 'colour here',
      white: '#ffffff'
    },
    primary: {
      main: 'colour here',
      contrastText: '#ffffff'
    },
    secondary: {
      main: 'colour here',
      contrastText: '#ffffff'
    }
  }
}
