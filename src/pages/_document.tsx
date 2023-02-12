import { Html, Head, Main, NextScript } from 'next/document'
import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
// import { ServerStyleSheet } from 'styled-components'
import { i18n } from '@/i18n'

// Why we not use styled-components?
// in nextjs 13 and sc v6, server and client the classname always different

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    // const scSheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      // SSR Render
      const cache = createCache()

      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => {
            const elm = (
              <StyleProvider cache={cache}>
                <App {...props} />
              </StyleProvider>
            )
            // return scSheet.collectStyles(elm)
            return elm
          },
        })

      const initialProps = await Document.getInitialProps(ctx)

      // Grab style from cache
      const styleText = extractStyle(cache)

      // scSheet.getStyleElement()
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            <script
              dangerouslySetInnerHTML={{
                __html: `</script>${styleText}<script>`,
              }}
            />
            {/* {scSheet.getStyleElement()} */}
          </>
        ),
      }
    } finally {
      // scSheet.seal()
    }
  }

  render() {
    const currentLocale = this.props.__NEXT_DATA__.locale ?? i18n.defaultLocale

    return (
      <Html lang={currentLocale}>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
