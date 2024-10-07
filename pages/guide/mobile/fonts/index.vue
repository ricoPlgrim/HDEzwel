<template>
    <GuideNav title="Mobile Guide" version="2024.12" :menuItems="menuItems" />
    <div class="page-guide-content">
        <h2 class="page-guide-title">FONT</h2>
        <h3 class="page-guide-title2">Happiness-Sans</h3>
        <div class="page-guide-box font">
            <p class="guide-font-box" style="font-family:'Happiness-Sans'; font-weight:400; font-size:18px;">해피니스 산스 Regular 400</p>
            <p class="guide-font-box" style="font-family:'Happiness-Sans'; font-weight:700; font-size:18px;">해피니스 산스 Bold 700</p>
        </div>
        <h3 class="page-guide-title2">Pretendard</h3>
        <div class="page-guide-box font">
            <p class="guide-font-box" style="font-family:'Pretendard'; font-weight:100; font-size:32px;">세상에 이런 폰트가 나오다니 천재인듯 Pretendard-Thin 100</p>
            <p class="guide-font-box" style="font-family:'Pretendard'; font-weight:200; font-size:32px;">세상에 이런 폰트가 나오다니 천재인듯 Pretendard-ExtraLight 200</p>
            <p class="guide-font-box" style="font-family:'Pretendard'; font-weight:300; font-size:32px;">세상에 이런 폰트가 나오다니 천재인듯 Pretendard-Light 300</p>
            <p class="guide-font-box" style="font-family:'Pretendard'; font-weight:400; font-size:32px;">세상에 이런 폰트가 나오다니 천재인듯 Pretendard-Regular 400</p>
            <p class="guide-font-box" style="font-family:'Pretendard'; font-weight:500; font-size:32px;">세상에 이런 폰트가 나오다니 천재인듯 Pretendard-Medium 500</p>
            <p class="guide-font-box" style="font-family:'Pretendard'; font-weight:600; font-size:32px;">세상에 이런 폰트가 나오다니 천재인듯 Pretendard-SemiBold 600</p>
            <p class="guide-font-box" style="font-family:'Pretendard'; font-weight:700; font-size:32px;">세상에 이런 폰트가 나오다니 천재인듯 Pretendard-Bold 700</p>
            <p class="guide-font-box" style="font-family:'Pretendard'; font-weight:800; font-size:32px;">세상에 이런 폰트가 나오다니 천재인듯 Pretendard-ExtraBold 800</p>
            <p class="guide-font-box" style="font-family:'Pretendard'; font-weight:900; font-size:32px;">세상에 이런 폰트가 나오다니 천재인듯 Pretendard-Black 900</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app'
import GuideNav from '../GuideNav.vue';
import menuItems from '~/data/mobile/menuItems';

useHead({
    title: 'HDEzwel Mobile Guide',
});


</script>
  
<style scoped lang="scss">
    @import "@/assets/scss/mobile/common.scss";
    @import "@/assets/scss/mobile/guide.scss";
</style>
  

