import '../styles/globals.ts'
import type { AppProps } from 'next/app'
import { Global } from '../styles/globals'
import { Provider } from '../store/Config'
import { LangProvider } from '../store/Translate'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <LangProvider>
        <>
          <Global />
          <Component {...pageProps} />
        </>
      </LangProvider>
    </Provider>
  )
}

export default MyApp
