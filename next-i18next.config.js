const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'hi', 'id', 'de-DE', 'tr-TR', 'zh-TW', 'zh-CN']
  },
  localePath: path.resolve('public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  keySeparator: false,
  namespaceSeparator: false,
  pluralSeparator: '——',
  contextSeparator: '——'
}
