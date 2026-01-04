// https://nuxt.com/docs/api/configuration/nuxt-config  
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/scripts'],

  fonts: {
    provider: 'google', // Устанавливаем Google Fonts по умолчанию, чтобы не обращаться к fontshare.com
    defaults: {
      weights: [400, 700],
      styles: ['normal'],
      subsets: ['latin']
    },
    families: [
      {
        name: 'Inter',
        provider: 'google',
        weights: [200, 300, 400, 500, 600, 700, 800, 900],
        display: 'swap'
      }
    ]
  },

  css: [
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/lineicons.css',
    '~/assets/css/tiny-slider.css',
    '~/assets/css/glightbox.min.css',
    '~/assets/css/style.css'
  ],

  app: {
    head: {
      title: 'Converted Bootstrap Template - Nuxt 4',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Bootstrap template converted to Nuxt 4' }
      ],
      script: [
        { src: '/js/bootstrap.bundle.min.js', body: true },
        { src: '/js/glightbox.min.js', body: true },
        { src: '/js/tiny-slider.js', body: true },
        { src: '/js/main.js', body: true }
      ]
    }
  }
})