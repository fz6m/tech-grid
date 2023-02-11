import { Html, Head, Main, NextScript } from 'next/document'
import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const scSheet = new ServerStyleSheet()
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
            return scSheet.collectStyles(elm)
          },
        })

      const initialProps = await Document.getInitialProps(ctx)

      // Grab style from cache
      const styleText = extractStyle(cache)

      scSheet.getStyleElement()
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
            {scSheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      scSheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
