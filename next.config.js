// const { i18n } = require('./next-i18next.config');

// module.exports = {
//   i18n,
// };
module.exports = {
  i18n: {
    locales: ['zh-TW', 'en'],
    defaultLocale: 'zh-TW'
  },
  env: {
    NEXT_PUBLIC_BUILD_ENV: process.env.NEXT_PUBLIC_BUILD_ENV
  }
}
