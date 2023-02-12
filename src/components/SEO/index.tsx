import Head from 'next/head'
import { useMemo } from 'react'

interface ISeoHeadProps {
  title?: string
  description?: string
  author?: string
  keywords?: string
  permalink?: string
  noindex?: boolean
  nofollow?: boolean
  twitterCardType?: 'summary_large_image' | 'summary'
  ogType?: 'website' | 'article'
  ogImage?: {
    url: string
    width?: number | undefined
    height?: number | undefined
  }
}

export const SeoHead = ({
  title = '技术生涯个人喜好表',
  description = '展示你的技术生涯个人喜好',
  author = 'fz6m',
  keywords = '技术生涯,个人喜好,技术栈,技术栈表格,技术表格,技术图',
  permalink = 'https://tech-grid.fz6m.com/',
  noindex = false,
  nofollow = false,
  twitterCardType = 'summary_large_image',
  ogType = 'website',
  ogImage = {
    url: 'https://tech-grid.fz6m.com/og-image.png',
    width: 1200,
    height: 630,
  },
}: ISeoHeadProps) => {
  const finalTitle = title
  const finalDescription = useMemo(
    () => [title, description].filter(Boolean).join(' - '),
    [description, title]
  )
  const robotDirectives = useMemo(
    () =>
      [noindex ? 'noindex' : 'index', nofollow ? 'nofollow' : 'follow'].join(
        ','
      ),
    [nofollow, noindex]
  )

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

      {/* open all dns prefetch */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />

      {/* cdn pre */}
      <link rel="dns-prefetch" href="//cdn.jsdelivr.net/" key="jsd-dns" />
      <link rel="preconnect" href="//cdn.jsdelivr.net/" key="jsd-preconnect" />

      <link key="favicon.ico" rel="shortcut icon" href="/favicon.ico" />

      {/* simple title */}
      <title key="title">{finalTitle}</title>

      {/* site meta info */}
      <meta key="meta-title" name="title" content={finalTitle} />
      <meta key="author" name="author" content={author} />
      <meta key="description" name="description" content={finalDescription} />
      <meta key="keyword" name="keyword" content={keywords} />
      <link key="canonical" rel="canonical" href={permalink} />
      <meta key="robots" name="robots" content={robotDirectives} />

      {/* Open Graph */}
      <meta key="og:type" property="og:type" content={ogType} />
      <meta key="og:url" property="og:url" content={permalink} />
      <meta key="og:title" property="og:title" content={finalTitle} />
      <meta
        key="og:description"
        property="og:description"
        content={finalDescription}
      />
      <meta key="og:locale" property="og:locale" content="en" />
      <meta key="og:image" property="og:image" content={ogImage.url} />
      {ogImage.width && (
        <meta
          key="og:image:width"
          property="og:image:width"
          content={ogImage.width.toString()}
        />
      )}
      {ogImage.height && (
        <meta
          key="og:image:height"
          property="og:image:height"
          content={ogImage.height.toString()}
        />
      )}

      {/* Twitter */}
      <meta key="twitter:image" name="twitter:image" content={ogImage.url} />
      <meta key="twitter:card" name="twitter:card" content={twitterCardType} />

      {/* --- Mobile --- */}
      {/* disable iphone numebr auto link */}
      <meta name="format-detection" content="telephone=no" />
    </Head>
  )
}
