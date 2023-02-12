import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import Script from 'next/script'
import { Analytics } from '../components/Analytics'

// reset style
import 'normalize.css/normalize.css'

// global style
import '@/styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {process.env.NODE_ENV === 'production' && (
        <>
          <Script
            strategy="afterInteractive"
            async
            src={'https://www.googletagmanager.com/gtag/js?id=G-XF3ZECJMF8'}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-XF3ZECJMF8');
          `.trim(),
            }}
          />
        </>
      )}
      <Analytics />
    </>
  )
}

export default appWithTranslation(App)
