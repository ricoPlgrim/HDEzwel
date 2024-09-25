// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      title: 'HDEzwel',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'HDEzwel\' UI guide' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg', href: '/favicon.svg' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap&subset=latin,latin-ext,korean'
        }
      ]
    },
    baseURL: '/HDEzwel/'
  },

  modules: [
  ],

  // css: [
  //   '@/assets/style/main.scss',
  // ],
  css: [
    '@/assets/scss/reset.scss'  // 글로벌 SCSS 파일 경로 설정
  ],

  compatibilityDate: '2024-09-25'
})