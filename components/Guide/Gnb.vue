<template>
    <div class="page-guide-nav">
        <h1 class="nav-title">
            <nuxt-link to="/">
                <i class="ico-logo"></i>
            </nuxt-link>
        </h1>
        <ul class="nav">
            <li :class="{ on: isActive('/desktop') }">
                <nuxt-link to="/desktop">Pc</nuxt-link>
            </li>
            <li :class="{ on: isActive('/mobile') }">
                <nuxt-link to="/mobile">Mobile</nuxt-link>
            </li>
            <li :class="{ on: isActive('/mail') }">
                <nuxt-link to="/mail">Mail</nuxt-link>
            </li>
        </ul>
    </div>
</template>
  
<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

// 현재 경로가 지정된 경로와 일치하는지 확인하는 함수
const isActive = (path: string) => {
    return route.path === path
}
</script>
  
