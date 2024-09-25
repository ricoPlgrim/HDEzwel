<template>
    <div class="mobile-layout">
      <Nuxt />
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue'
  
  onMounted(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    const isMobile = /mobile|android|iphone|ipad|ipod/.test(userAgent)
  
    // 디바이스에 따라 CSS를 동적으로 로드
    if (isMobile) {
      loadStyle('/HDEzwel/mobile.css')  // 모바일용 SCSS 파일
    } else {
      loadStyle('/HDEzwel/desktop.css')  // 데스크탑용 SCSS 파일
    }
  })
  
  function loadStyle(href: string) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    document.head.appendChild(link)
  }
  </script>
 