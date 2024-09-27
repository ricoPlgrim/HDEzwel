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
                        <div class="title">Notice of delivery delay</div>
                        <p>Delivery may be delayed in some areas<br>due to strikes.</p>
                    </div>
                    <div class="btn-wrap">
                        <a href="javascript:WC_UI.layerPopUp({selId:'#pop-layer', st: 'close'})"
                            class="btn-type5 v2">CONFIRM</a>
                    </div>
                </div>
            </div>
            <div class="pop-layer" id="pop-layer2">
                <div class="dim"></div>
                <div class="pop-wrap">
                    <div class="pop-content">
                        <div class="title">WCONCEPT NOTICE</div>
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
                <div class="pop-wrap">
                    <div class="pop-content v2">
                        <div style="background:#bbb;padding:80px 0">IMAGE</div>
                    </div>
                    <div class="btn-wrap">
                        <a href="javascript:WC_UI.layerPopUp({selId:'#pop-layer3', st: 'close'})" class="btn-type5">DO NOT
                            OPEN TODAY</a>
                        <a href="javascript:WC_UI.layerPopUp({selId:'#pop-layer3', st: 'close'})"
                            class="btn-type5 v2">CLOSE</a>
                    </div>
                </div>
            </div>
        </div>
        <h3 class="page-guide-title2">full popup</h3>
        <div class="page-guide-box">
            <div class="btn-wrap">
                <a href="javascript:WC_UI.layerPopUp({selId:'#pop-setting'})" class="btn-type">full</a>
                <a href="javascript:WC_UI.layerPopUp({selId:'#pop-full'})" class="btn-type">button</a>
            </div>

            <div class="pop-full" id="pop-setting">
                <div class="dim"></div>
                <div class="pop-wrap">
                    <div class="pop-title">
                        <h3 class="title-type">APP Setting</h3>
                        <a href="javascript:WC_UI.layerPopUp({selId:'#pop-setting', st: 'close'})" class="pop-close"><i
                                class="ico-close"></i><span class="hidden">닫기</span></a>
                    </div>
                    <div class="pop-content">
                        <div class="setting-box">
                            <div class="title-box">
                                <button type="button" class="title-type4">Push Alarm Setting</button>
                            </div>
                            <div class="text-box">
                                <p>Shopping Alarm</p>
                                <p class="v2">You can quickly find various events and shopping information.</p>
                            </div>
                        </div>
                        <div class="setting-box">
                            <div class="title-box">
                                <button type="button" class="title-type4">Set video autoplay</button>
                            </div>
                            <div class="text-box">
                                <p>Play environment setting</p>
                                <p class="v2">You can set the auto-play environment for videos running APP.</p>
                            </div>
                        </div>
                        <div class="setting-box">
                            <div class="title-box">
                                <div class="title-type4">App Setting</div>
                            </div>
                            <div class="text-box">
                                <p>Cash Delete</p>
                                <p class="v2">Delete cached information stored on the device.<br>Current version 1.00 /
                                    latest version 1.01</p>
                            </div>
                            <div class="btn-box">
                                <a href="#">Delete</a>
                                <a href="#">Update</a>
                            </div>
                        </div>
                        <div class="setting-box">
                            <div class="title-box">
                                <div class="title-type4">Device Feauture</div>
                            </div>
                            <div class="text-box">
                                <p>Device Infromation</p>
                                <p class="v2">iPhone 11 Pro</p>
                            </div>
                            <div class="text-box">
                                <p>OS Infromation</p>
                                <p class="v2">16.0.1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pop-full" id="pop-full">
                <div class="dim"></div>
                <div class="pop-wrap">
                    <div class="pop-title2">
                        <h3 class="title-type">title</h3>
                        <a href="javascript:WC_UI.layerPopUp({selId:'#pop-full', st: 'close'})" class="pop-close"><i
                                class="ico-close"></i><span class="hidden">닫기</span></a>
                    </div>
                    <div class="pop-content">
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                        content<br>
                    </div>
                    <div class="btn-fixed-wrap">
                        <a href="#" class="btn-type v3">Ok</a>
                    </div>
                </div>
            </div>
        </div>

        <h3 class="page-guide-title2">bottom popup</h3>
        <div class="page-guide-box">
            <div class="btn-wrap">
                <a href="javascript:WC_UI.layerPopUp({selId:'#pop-bottom'})" class="btn-type">bottom</a>
                <a href="javascript:WC_UI.layerPopUp({selId:'#pop-bottom2'})" class="btn-type">bottom2</a>
                <a href="javascript:WC_UI.layerPopUp({selId:'#pop-marketing'})" class="btn-type">bottom3</a>
            </div>

            <div class="btn-wrap">
                <button type="button" class="btn-option"
                    onclick="WC_UI.layerPopUp({selId:'#pop-select', value:'optValue'})">
                    <span id="optValue">Select Option</span>
                </button>
            </div>

            <div class="pop-bottom" id="pop-bottom">
                <div class="dim"></div>
                <div class="pop-wrap">
                    <div class="pop-bar"></div>
                    <div class="pop-content">
                        <strong>Install the WCONCEPT app<br>and get more benefits.</strong>
                        <p>Automatic issuance of 7 types of coupon<br>packs exclusively for APP!</p>
                        <div class="btn-wrap">
                            <a href="javascript:WC_UI.layerPopUp({selId:'#pop-bottom', st: 'close'})"
                                class="btn-type v4">Button Name</a>
                        </div>
                    </div>
                    <div class="btn-bottom-wrap">
                        <a href="javascript:WC_UI.layerPopUp({selId:'#pop-bottom', st: 'close'})" class="today">DO NOT OPEN
                            TODAY</a>
                        <a href="javascript:WC_UI.layerPopUp({selId:'#pop-bottom', st: 'close'})">CLOSE</a>
                    </div>
                </div>
            </div>

            <div class="pop-bottom" id="pop-bottom2">
                <div class="dim"></div>
                <div class="pop-wrap">
                    <div class="pop-bar"></div>
                    <div class="pop-content v2">
                        <div style="background:#bbb;padding:80px 0">IMAGE</div>
                    </div>
                    <div class="btn-bottom-wrap">
                        <a href="javascript:WC_UI.layerPopUp({selId:'#pop-bottom2', st: 'close'})" class="today">DO NOT OPEN
                            TODAY</a>
                        <a href="javascript:WC_UI.layerPopUp({selId:'#pop-bottom2', st: 'close'})">CLOSE</a>
                    </div>
                </div>
            </div>

            <div class="pop-bottom" id="pop-marketing">
                <div class="dim"></div>
                <div class="pop-wrap">
                    <div class="pop-bar"></div>
                    <div class="pop-content">
                        <strong>Agree with the app push and get<br>shopping benefits!</strong>
                        <p>App error checking and duplicate login classification,<br>machine ID information machine </p>

                        <div class="img" style="background:#bbb;padding:80px 0">IMAGE</div>

                        <p class="v2">App error checking and duplicate login classification,<br>machine ID information
                            machine </p>

                        <div class="btn-wrap">
                            <a href="javascript:WC_UI.layerPopUp({selId:'#pop-marketing', st: 'close'})"
                                class="btn-type v3">Receive benefit notifications</a>
                            <a href="javascript:WC_UI.layerPopUp({selId:'#pop-marketing', st: 'close'})"
                                class="btn-type4 v4">i'll get it later</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pop-select" id="pop-select">
                <div class="dim"></div>
                <div class="pop-wrap">
                    <div class="pop-bar"></div>
                    <div class="pop-content option-wrap">
                        <div class="option-title">
                            <h3 class="title-type3">Option</h3>
                        </div>
                        <div class="option-inner">
                            <div class="form-wrap">
                                <div class="form-item">
                                    <div class="chk-box selected">
                                        <input type="radio" id="option1" name="option" checked="">
                                        <label class="checkbox" for="option1"></label>
                                        <label for="option1">What’s New</label>
                                    </div>
                                </div>
                                <div class="form-item">
                                    <div class="chk-box">
                                        <input type="radio" id="option2" name="option">
                                        <label class="checkbox" for="option2"></label>
                                        <label for="option2">Best Sellers</label>
                                    </div>
                                </div>
                                <div class="form-item">
                                    <div class="chk-box">
                                        <input type="radio" id="option3" name="option">
                                        <label class="checkbox" for="option3"></label>
                                        <label for="option3">Price : Low to High</label>
                                    </div>
                                </div>
                                <div class="form-item">
                                    <div class="chk-box">
                                        <input type="radio" id="option4" name="option">
                                        <label class="checkbox" for="option4"></label>
                                        <label for="option4">Price : High to Low</label>
                                    </div>
                                </div>
                                <div class="form-item">
                                    <div class="chk-box disabled">
                                        <input type="radio" id="option5" name="option" disabled="">
                                        <label class="checkbox" for="option5"></label>
                                        <label for="option5">Discount : High to Low</label>
                                    </div>
                                </div>
                            </div>
                        </div>
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

            <div id="toast01" class="toast-box active">
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
    title: 'HDEzwel Mobile Guide',
});

</script>

<style scoped lang="scss">
    @import "@/assets/scss/mobile/common.scss";
    @import "@/assets/scss/mobile/guide.scss";
</style>
  







