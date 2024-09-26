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
        <h2 class="page-guide-title">Layer PopUp</h2>
        <h3 class="page-guide-title2">basic popup</h3>
        <div class="page-guide-box">
            <div class="text">
                selId와 st 문자열로 전달<br>
                WC_UI.layerPopUp({selId:'레이어팝업아이디', st:닫기(close)});<br>
                열기 : WC_UI.layerPopUp({selId:'#pop-layer'});<br>
                닫기 : WC_UI.layerPopUp({selId:'#pop-layer', st: 'close'});
            </div>
            <div class="btn-wrap">
                <a href="javascript:WC_UI.layerPopUp({selId:'#pop-layer'})" class="btn-type">basic</a>
                <a href="javascript:WC_UI.layerPopUp({selId:'#pop-layer2'})" class="btn-type">button</a>
                <a href="javascript:WC_UI.layerPopUp({selId:'#pop-layer3'})" class="btn-type">img</a>
            </div>

            <div class="pop-layer" id="pop-layer">
                <div class="dim"></div>
                <div class="pop-wrap">
                    <div class="pop-content">
                        <strong>Notice of delivery delay</strong>
                        <p>Delivery may be delayed in some areas<br>due to strikes.</p>
                    </div>
                    <div class="btn-wrap">
                        <a href="javascript:WC_UI.layerPopUp({selId:'#pop-layer', st: 'close'})"
                            class="btn-type5">CONFIRM</a>
                    </div>
                </div>
            </div>
            <div class="pop-layer" id="pop-layer2">
                <div class="dim"></div>
                <div class="pop-wrap">
                    <div class="pop-content">
                        <strong>WCONCEPT NOTICE</strong>
                        <p>The latest version has been released. Please<br>use it after updating to the new version.</p>
                    </div>
                    <div class="btn-wrap">
                        <a href="javascript:WC_UI.layerPopUp({selId:'#pop-layer2', st: 'close'})"
                            class="btn-type5">CONFIRM</a>
                        <a href="javascript:WC_UI.layerPopUp({selId:'#pop-layer2', st: 'close'})"
                            class="btn-type5 v2">UPDATE</a>
                    </div>
                </div>
            </div>

            <div class="pop-layer" id="pop-layer3">
                <div class="dim"></div>
                <div class="pop-wrap v2">
                    <div class="pop-content v2">
                        <img src="../assets/images/temp/@temp_pop_img.png" alt="">
                    </div>
                    <div class="btn-wrap">
                        <a href="javascript:WC_UI.layerPopUp({selId:'#pop-layer3', st: 'close'})" class="btn-type5">DO
                            NOT OPEN TODAY</a>
                        <a href="javascript:WC_UI.layerPopUp({selId:'#pop-layer3', st: 'close'})"
                            class="btn-type5">CLOSE</a>
                    </div>
                </div>
            </div>
        </div>

        <h3 class="page-guide-title2">toast</h3>
        <div class="page-guide-box">
            <div class="text">
                selId와 time 닫히는 시간<br>
                WC_UI.toastPopUp({selId:'#toast01',time:3000});
            </div>

            <div id="toast01" class="toast-box">
                The status has been changed to consent.
            </div>
            <div id="toast02" class="toast-box">
                성공!
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app'
import GuideNav from '../GuideNav.vue';

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
  








