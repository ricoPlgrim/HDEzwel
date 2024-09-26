<template>
        <GuideNav title="PC Guide" version="2024.12" :menuItems="[
            { name: 'colors', path: '/guide/desktop/colors' },
            { name: 'fonts', path: '/guide/desktop/fonts' },
            { name: 'texts', path: '/guide/desktop/texts' },
            { name: 'buttons', path: '/guide/desktop/buttons' },
            { name: 'forms', path: '/guide/desktop/forms' },
            { name: 'components', path: '/guide/desktop/components' },
            { name: 'icons', path: '/guide/desktop/icons' },
            { name: 'tables', path: '/guide/desktop/tables' },
            { name: 'swipers', path: '/guide/desktop/swipers' },
            { name: 'layerpops', path: '/guide/desktop/layerpops' },
            { name: 'videos', path: '/guide/desktop/videos' }
        ]" />

        <div class="page-guide-content">
            <h2 class="page-guide-title">GUIDE</h2>
            <div class="page-guide-box" style="line-height:1.5">

                <strong>PC : min-width: 1376px</strong><br>

                양쪽 마진 68(1920~1471이상)<br>
                양쪽 마진 48(1377이상 ~ 1470이하)<br>
                스크롤 안생기는 최소화면사이즈 1376<br><br><br>

                <strong>padding / margin</strong><br>
                (예외있음) 8 / 16 / 24 / 32 / 40 / 48 / 56 / 64 / 72 ....

            </div>
        </div>
</template>



<script setup lang="ts">
import { useHead } from 'nuxt/app'
import GuideNav from '../desktop/GuideNav.vue';

useHead({
    title: 'HDEzwel PC Guide',
    meta: [
        { name: 'viewport', content: 'width=1460' }
    ]
});


</script>


<style scoped lang="scss">
@import "@/assets/scss/desktop/common.scss";
@import "@/assets/scss/desktop/guide.scss";
</style>
