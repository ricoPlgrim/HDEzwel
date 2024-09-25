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
import { useRoute } from 'vue-router'

const route = useRoute()

// 현재 경로가 지정된 경로와 일치하는지 확인하는 함수
const isActive = (path: string) => {
    return route.path === path
}
</script>
  
<style lang="scss">
/* @import "@/assets/scss/guide.scss"; */
</style>
  







