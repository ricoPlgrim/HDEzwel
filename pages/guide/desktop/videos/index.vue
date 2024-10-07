<template>
<GuideNav title="PC Guide" version="2024.12" :menuItems="menuItems" />
        <div class="page-guide-content">
            <h2 class="page-guide-title">VIMEO</h2>

            <h3 class="page-guide-title2">basic</h3>
            <div class="page-guide-box ddd">
                <div class="video-wrap">
                    <div class="video-area normal" data-index="0">
                        <iframe src="https://player.vimeo.com/video/249908774?muted=1&amp;loop=1" frameborder="0"
                            allow="autoplay" data-ready="true" width="100%" height="100%" webkitallowfullscreen=""
                            mozallowfullscreen="" allowfullscreen=""></iframe>
                    </div>
                </div>
            </div>

            <h3 class="page-guide-title2">swiper</h3>
            <div class="page-guide-box">
                <div class="video-swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                    <div class="swiper-wrapper" id="swiper-wrapper-4b25f65d84205337" aria-live="polite"
                        style="transition-duration: 0ms; transform: translate3d(-2470px, 0px, 0px);">
                        <div class="swiper-slide" role="group" aria-label="1 / 3" style="width: 1235px;">
                            1
                        </div>
                        <div class="swiper-slide swiper-slide-prev" role="group" aria-label="2 / 3" style="width: 1235px;">
                            2
                        </div>
                        <div class="swiper-slide swiper-slide-active" role="group" aria-label="3 / 3"
                            style="width: 1235px;">
                            <div class="video-wrap">
                                <div class="video-area" data-index="0">
                                    <iframe src="https://player.vimeo.com/video/249908774?controls=0&amp;muted=1&amp;loop=1"
                                        frameborder="0" allow="autoplay" data-ready="true" width="100%" height="100%"
                                        webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal"><span
                            class="swiper-pagination-progressbar-fill"
                            style="transform: translate3d(0px, 0px, 0px) scaleX(1) scaleY(1); transition-duration: 300ms;"></span>
                    </div>
                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
            </div>

            <h3 class="page-guide-title2">popup</h3>
            <div class="page-guide-box">
                <a href="javascript:WC_UI.layerPopUp({selId:'#pop-video'})" class="btn-type">video popup</a>

                <div class="pop-layer" id="pop-video" style="visibility: hidden;">
                    <div class="dim" style="display: none;"></div>
                    <div class="pop-wrap">
                        <div class="pop-content v2">
                            <div class="video-wrap">
                                <div class="video-area normal" data-index="1">
                                    <iframe src="https://player.vimeo.com/video/249908774?muted=1&amp;loop=1"
                                        frameborder="0" allow="autoplay" data-ready="true" width="100%" height="100%"
                                        webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
                                </div>
                            </div>
                        </div>
                        <div class="btn-wrap">
                            <a href="javascript:WC_UI.layerPopUp({selId:'#pop-video', st: 'close'})"
                                class="btn-type5">CLOSE</a>
                        </div>
                    </div>
                </div>
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

<style scoped lang="scss">@import "@/assets/scss/desktop/common.scss";
@import "@/assets/scss/desktop/guide.scss";</style>
  








