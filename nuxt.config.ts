import { defineNuxtConfig } from 'nuxt/config';
import vue from '@vitejs/plugin-vue'

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
    '@pinia/nuxt', // Pinia 모듈 추가
  ],

  css: [
    '@/assets/scss/reset.scss'  // 글로벌 SCSS 파일 경로 설정
  ],

  build: {
    // SCSS 관련 설정을 vite.build로 이동
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('custom-'), // 예시: 'custom-'로 시작하는 요소를 사용자 정의 요소로 처리
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@import "@/assets/scss/variables.scss";`, // 필요 시 추가 SCSS 파일 가져오기
          silenceDeprecations: ["legacy-js-api"], // 경고 메시지 억제
        },
      },
    },
  },

  compatibilityDate: '2024-09-25'
})