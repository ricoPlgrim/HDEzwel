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
        <h2 class="page-guide-title">VIMEO</h2>

        <h3 class="page-guide-title2">basic</h3>
        <div class="page-guide-box">
            <div class="video-wrap">
                <div class="video-area normal" data-index="0">
                    <iframe src="https://player.vimeo.com/video/249908774" frameborder="0" allow="autoplay"
                        data-ready="true" width="640" height="360" webkitallowfullscreen="" mozallowfullscreen=""
                        allowfullscreen=""></iframe>
                </div>
            </div>
        </div>

        <h3 class="page-guide-title2">popup</h3>
        <div class="page-guide-box">
            <a href="javascript:WC_UI.layerPopUp({selId:'#pop-video'})" class="btn-type">video popup</a>
            <div class="pop-layer" id="pop-video">
                <div class="dim"></div>
                <div class="pop-wrap">
                    <div class="pop-content v2">
                        <div class="video-wrap">
                            <div class="video-area normal" data-index="1">
                                <iframe src="https://player.vimeo.com/video/249908774?" frameborder="0" allow="autoplay"
                                    data-ready="true" width="640" height="360" webkitallowfullscreen=""
                                    mozallowfullscreen="" allowfullscreen=""></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="btn-wrap">
                        <a href="javascript:WC_UI.layerPopUp({selId:'#pop-video', st: 'close'})" class="btn-type5">CLOSE</a>
                    </div>
                </div>
            </div>
        </div>


        <h3 class="page-guide-title2">swiper</h3>
        <div class="page-guide-box">
            <div
                class="video-swiper2 swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                <div class="swiper-wrapper" id="swiper-wrapper-8d764e10218f10a49d" aria-live="polite"
                    style="transform: translate3d(0px, 0px, 0px);">
                    <div class="swiper-slide swiper-slide-active" role="group" aria-label="1 / 5" style="width: 929px;">
                        <a href="#"><img src="@/assets/images/mobile/temp/@temp_banner3.png" alt=""></a>
                    </div>
                    <div class="swiper-slide swiper-slide-next" role="group" aria-label="2 / 5" style="width: 929px;">
                        <div class="video-wrap">
                            <div class="video-area" data-index="0">
                                <iframe src="https://player.vimeo.com/video/783452115?controls=0&amp;muted=1&amp;loop=1"
                                    frameborder="0" allow="autoplay" data-ready="true" width="640" height="360"
                                    webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" role="group" aria-label="3 / 5" style="width: 929px;">
                        <a href="#">
                            <div class="video-wrap">
                                <div class="video-area" data-index="1">
                                    <iframe src="https://player.vimeo.com/video/249908774?controls=0&amp;muted=1&amp;loop=1"
                                        frameborder="0" allow="autoplay" data-ready="true" width="100%" height="100%"
                                        webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="swiper-slide" role="group" aria-label="4 / 5" style="width: 929px;">
                        <a href="#"><img src="@/assets/images/mobile/temp/@temp_banner3.png" alt=""></a>
                    </div>
                    <div class="swiper-slide" role="group" aria-label="5 / 5" style="width: 929px;">
                        <a href="#"><img src="@/assets/images/mobile/temp/@temp_banner3.png" alt=""></a>
                    </div>
                </div>
                <div class="swiper-paging2"></div> <!-- 2023-11-21 paging 수정 -->
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>
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
  







