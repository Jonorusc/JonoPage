// components/themes/darkTheme.tsx
import { DefaultTheme } from 'styled-components'
export const defaultTheme: DefaultTheme = {
  name: 'default',
  borderRadius: '4px',
  bodyColor: 'colour here',
  textColor: 'colour here',
  palette: {
    common: {
      black: 'colour here',
      white: 'colour here'
    },
    primary: {
      main: 'colour here',
      contrastText: 'colour here'
    },
    secondary: {
      main: 'colour here',
      contrastText: 'colour here'
    }
  }
}
