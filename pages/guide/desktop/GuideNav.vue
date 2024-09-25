<template>
    <div class="page-guide-nav guide">
      <h1 class="nav-title">
        <nuxt-link to="/">
          <i class="ico-logo"></i><br />{{ title }} <span>{{ version }}</span>
        </nuxt-link>
      </h1>
      <ul class="nav">
        <li v-for="(item, index) in menuItems" :key="index" :class="{ on: isActive(item.path) }">
          <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  interface MenuItem {
    name: string;
    path: string;
  }
  
  const props = defineProps<{
    title: string;
    version: string;
    menuItems: MenuItem[];
  }>()
  
  // 활성화된 경로를 확인하는 함수
  const isActive = (path: string) => {
  // 현재 경로에서 마지막 부분을 추출
  const currentPath = window.location.pathname.split('/').filter(Boolean).pop() || ''
  // 비교 대상 경로에서 마지막 부분을 추출
  const targetPath = path.split('/').filter(Boolean).pop() || ''

  console.log("currentPath==>", currentPath)
  console.log("targetPath===>", targetPath)
  console.log(currentPath === targetPath)

  return currentPath === targetPath
}


  </script>
  <style scoped lang="scss">
  @import "@/assets/scss/desktop/common.scss";
  @import "@/assets/scss/guide.scss";
  </style>
    
 