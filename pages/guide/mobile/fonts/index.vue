<template>
    <GuideNav title="Mobile Guide" version="2024.12" :menuItems="[
        { name: 'colors', path: '/guide/mobile/colors' },
        { name: 'fonts', path: '/guide/mobile/fonts' },
        { name: 'texts', path: '/guide/mobile/texts' },
        { name: 'buttons', path: '/guide/mobile/buttons' },
        { name: 'forms', path: '/guide/mobile/forms' },
        { name: 'components', path: '/guide/mobile/components' },
        { name: 'icons', path: '/guide/mobile/icons' },
        { name: 'tables', path: '/guide/mobile/tables' },
        { name: 'swipers', path: '/guide/mobile/swipers' },
        { name: 'layerpops', path: '/guide/mobile/layerpops' },
        { name: 'videos', path: '/guide/mobile/videos' }
    ]" />
    <div class="page-guide-content">
        <h2 class="page-guide-title">FONT</h2>
        <h3 class="page-guide-title2">EN</h3>
        <div class="page-guide-box font">
            <p class="guide-font-box" style="font-size:30px;font-weight:700">Hello, Jost Bold 700</p>
            <p class="guide-font-box" style="font-size:30px;font-weight:600">Hello, Jost SemiBold 600</p>
            <p class="guide-font-box" style="font-size:30px;font-weight:500">Hello, Jost Medium 500</p>
            <p class="guide-font-box" style="font-size:30px;font-weight:400">Hello, Jost Regular 400</p>
            <p class="guide-font-box" style="font-size:30px;font-weight:300">Hello, Jost Light 300</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app'
import GuideNav from '../GuideNav.vue';

useHead({
    title: 'HDEzwel Mobile Guide',
});


</script>
  
<style scoped lang="scss">
@import "@/assets/scss/mobile/common.scss";
@import "@/assets/scss/mobile/guide.scss";
</style>
  

