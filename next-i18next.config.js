const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    localePath: path.resolve('./public/locales')
  },
}
