// pages/_app.tsx
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useLocalStorage } from 'usehooks-ts'
import { defaultTheme } from '../components/themes/defaultTheme'
import { GlobalStyle } from '../components/themes/globalStyle'
import NextProgress from 'next-progress'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme] = useLocalStorage('theme', defaultTheme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NextProgress
        color="#344352"
        delay={300}
        height={3}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
