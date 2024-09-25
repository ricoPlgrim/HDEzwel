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
  

