import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

// reset style
import 'normalize.css/normalize.css'

// global style
import '@/styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default appWithTranslation(App)
