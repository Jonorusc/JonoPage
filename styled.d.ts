// styled.d.ts
import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    bodyColor: string
    containerMaxWidth: string
    htmlFontSize: string
    palette: {
      primary: string
      secondary: string
      green: string
      dark: string
      lightGreen: string
      grey: string
      darker: string
      darkenBlue: string
      whiteSmoke: string
      black: string
    }
    font: {
      family: string
      size: {
        small: string
        medium: string
        large: string
        xlarge: string
      }
    }
    border: {
      radius: string
    }
    shadow: {
      text: {
        small: string
        medium: string
        large: string
      }
      box: {
        small: string
        medium: string
        large: string
      }
    }
    spacing: {
      small: string
      medium: string
      large: string
      xlarge: string
    }
  }
}
