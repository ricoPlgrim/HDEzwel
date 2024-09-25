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
  import { defineProps, ref } from 'vue'
  
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
    return window.location.pathname === path
  }
  </script>
  
 