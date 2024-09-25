<template>
    <div>
        <GuideNav title="PC Guide" version="2024.12" :menuItems="[
            { name: 'color', path: '/guide/desktop/color' },
            { name: 'font', path: '/guide/desktop/fonts' },
            { name: 'text', path: '/guide/desktop/text' },
            { name: 'button', path: '/guide/desktop/buttons' },
            { name: 'form', path: '/guide/desktop/forms' },
            { name: 'component', path: '/guide/desktop/component' },
            { name: 'icon', path: '/guide/desktop/icons' },
            { name: 'table', path: '/guide/desktop/tables' },
            { name: 'swiper', path: '/guide/desktop/swiper' },
            { name: 'layerpop', path: '/guide/desktop/layerpop' },
            { name: 'vimeo', path: '/guide/desktop/vimeo' }
        ]" />

        <div class="page-guide-content">
            <h2 class="page-guide-title">COLOR</h2>

            <div class="page-guide-box color">
                <span class="CBrand">$CBrand<br />#FF563F</span>
                <br>
                <span class="CTmain">$CTmain<br />#000</span>
                <span class="CTmain2">$CTmain2<br />#222</span>
                <span class="CTsub">$CTsub<br />#777</span>
                <span class="CTsub2">$CTsub2<br />#999</span>
                <span class="CTsub3">$CTsub3<br />#BBB</span>
                <span class="CTsub4">$CTsub4<br />#AAA</span>
                <br>
                <span class="CBg">$CBg<br />#DDD</span>
                <span class="CBg2">$CBg2<br />#EEE</span>
                <span class="CBg3">$CBg3<br />#F9F9F9</span>
                <span class="CBg4">$CBg4<br />#FAFAFA</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import GuideNav from '../GuideNav.vue';
</script>

<style scoped lang="scss">
@import "@/assets/scss/desktop/common.scss";
@import "@/assets/scss/guide.scss";
</style>
  







