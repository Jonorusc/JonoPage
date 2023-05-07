import React, { ReactComponentElement } from 'react'
import type { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../src/components/themes/defaultTheme'
import { GlobalStyle } from '../src/components/themes/globalStyle'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    decorators: [
      (Story: any) => (
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      )
    ]
  }
}

export default preview
