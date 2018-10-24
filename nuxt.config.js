const metaDescription =
  `フリーランスのエンジニアです。Webシステムの開発をしています。`
const siteTitle = 'TOYOKAZU MIURA'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: siteTitle,
    titleTemplate: '%s | ' + siteTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: metaDescription },

      // Google Search Console
      { name: 'google-site-verification', content: '-I_DfOv8GYkv6y_nQ4urVtkxHIBnZx87uJONVb9GKM8' },

      // OGP
      // { property: 'og:title', content: siteTitle },
      { property: 'og:site_name', content: siteTitle },
      { property: 'og:description', content: metaDescription },
      { property: 'og:type', content: 'website' },
      // { property: 'og:url', content: 'https://toyokazumiura.com' },
      { property: 'og:image', content: 'https://s3-ap-northeast-1.amazonaws.com/toyokazumiura/images/site-capture.png' },
      { property: 'fb:app_id', content: '2424959297731562' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@m1ul24' },
      { name: 'twitter:creator', content: '@m1ul24' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  css: [
    { src: '~assets/styles/main.scss', lang: 'scss' } 
  ],

  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-112510158-3'
    }]
 ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
    extend(config) {
      if (process.server && process.browser) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
