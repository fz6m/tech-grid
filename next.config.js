const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    runtime: 'nodejs',
    legacyBrowsers: false,
    sharedPool: true,
    workerThreads: true,
    optimizeCss: process.env.NODE_ENV === 'production' ? {
      logLevel: 'warn'
    } : false
  }
}

module.exports = nextConfig
