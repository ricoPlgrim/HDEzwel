<template>
    <div>
        <div class="page-guide-nav guide">
            <h1 class="nav-title">
                <nuxt-link to="/"><i class="ico-logo"></i><br>PC Guide <span>2024.12</span></nuxt-link>
            </h1>
            <ul class="nav">
                <li :class="{ on: isActive('/guide/desktop/color') }">
                    <nuxt-link to="/guide/desktop/color">color</nuxt-link>
                </li>
                <li :class="{ on: isActive('/guide/desktop/fonts') }">
                    <nuxt-link to="/guide/desktop/fonts">font</nuxt-link>
                </li>
                <li :class="{ on: isActive('/guide/desktop/text') }">
                    <nuxt-link to="/guide/desktop/text">text</nuxt-link>
                </li>

                <li><a href="button.html">button</a></li>
                <li><a href="form.html">form</a></li>
                <li><a href="component.html">component</a></li>
                <li><a href="icon.html">icon</a></li>
                <li><a href="table.html">table</a></li>
                <li><a href="swiper.html">swiper</a></li>
                <li><a href="layerpop.html">layerpop</a></li>
                <li><a href="vimeo.html">vimeo</a></li>
            </ul>
        </div>

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

    </div>
</template> 
 
<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute();

// 현재 경로가 지정된 경로와 일치하는지 확인하는 함수
const isActive = (path: string) => {
    return route.path === path
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/desktop/common.scss";
@import "@/assets/scss/guide.scss";
</style>
  

