import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../src/components/themes/defaultTheme'
import { GlobalStyle } from '../src/components/themes/globalStyle'


export const decorators = [
  withThemeFromJSXProvider({
    themes: { defaultTheme },
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyle, 
  }),
];