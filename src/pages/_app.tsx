import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { ThemeContextProvider } from '../contexts/ThemeContext'
import { globalStyles } from '../styles/global'

globalStyles()

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page)
  return getLayout(
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}
export default App
