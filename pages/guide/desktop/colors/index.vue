<template>
 	<GuideNav title="PC Guide" version="2024.12" :menuItems="menuItems" />
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
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app'
import GuideNav from '../GuideNav.vue';
import menuItems from '~/data/desktop/menuItems';

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
  







