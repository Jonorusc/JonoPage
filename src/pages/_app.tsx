// pages/_app.tsx
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useLocalStorage } from 'usehooks-ts'
import { defaultTheme } from '../components/themes/defaultTheme'
import { GlobalStyle } from '../components/themes/globalStyle'
import NextProgress from 'next-progress'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'

import SEO from '../../next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme] = useLocalStorage('theme', defaultTheme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>{theme.title}</title>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/jaumlu/image/upload/v1688753527/wprlt0ecrz93xnl98lcr.png"
          type="image/x-icon"
        />
      </Head>
      <DefaultSeo {...SEO} />
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
