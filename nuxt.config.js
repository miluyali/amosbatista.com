require('dotenv').config()

export default {
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  buildModules: ['@nuxt/typescript-build'],
  modules: [
    // Simple usage
    '@nuxtjs/dotenv',

    // With options
    ['@nuxtjs/dotenv', { /* module options */ }],
 ],
 serverMiddleware: [
    // Will register redirect-ssl npm package
    'redirect-ssl'
  ],
  plugins: [
    {
      src: '~/plugins/infinite-scroll.js', mode: 'client'
    }
  ]
}