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
                @click openPopup 이벤트 메소드<br />
                예시 @click="openPopup('basicPopup')"
            </div>
            <div class="btn-wrap">
                <button @click="openPopup('basicPopup')" class="btn-type">basic</button>
                <button @click="openPopup('buttonPopup')" class="btn-type">button</button>
                <button @click="openPopup('imgPopup')" class="btn-type">img</button>
            </div>
        </div>

        <h3 class="page-guide-title2">toast</h3>
        <div class="page-guide-box">
            <div class="text">
                toastPopupLayer컴포넌트<br />
                title은 string값이고,<br />
                :duration값은 토스트 팝업에 유지 시간  타입은 number,
                이벤트 함수<br />
                초기값: showToastPopup함수 실행이후<br />
                onMounte 이후 이벤트 실행 
            </div>


        </div>
    </div>
    <basicPopuLayer ref="basicPopup" title="Notice of delivery delay" description="Delivery may be delayed in some areas"
        checkText="CONFIRM" />
    <buttonPopupLayer ref="buttonPopup" title="WCONCEPT NOTICE"
        description="The latest version has been released. Please<br/>use it after updating to the new version."
        leftText="CONFIRM" rightText="UPDATE" />

    <imgPopupLayer ref="imgPopup" :imgSrc="testImg" imgAlt="테스트 이미지" leftText="DO NOT OPEN TODAY" rightText="CLOSE" />

    <toastPopupLayer ref="toastPopup" title=" The status has been changed to consent." :duration="3000" />
</template>

<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app';
import GuideNav from '../GuideNav.vue';
import basicPopuLayer from '@/components/desktop/popup/basicPopup.vue';
import buttonPopupLayer from '@/components/desktop/popup/buttonPopup.vue';
import imgPopupLayer from '@/components/desktop/popup/imgPopup.vue';
import toastPopupLayer from '@/components/desktop/popup/toastPopup.vue';


//더미 테스트 이미지
import testImg from '@/assets/images/desktop/about_us/about_img_01.png';

useSeoMeta({
    title: 'HDEzwel PC Guide',
    meta: [
        { name: 'viewport', content: 'width=1460' }
    ]
});

const basicPopup = ref<InstanceType<typeof basicPopuLayer> | null>(null);
const buttonPopup = ref<InstanceType<typeof buttonPopupLayer> | null>(null);
const imgPopup = ref<InstanceType<typeof imgPopupLayer> | null>(null);
const toastPopup = ref<InstanceType<typeof toastPopupLayer> | null>(null);


const openPopup = (popupName: string) => {
    switch (popupName) {
        case 'basicPopup':
            if (basicPopup.value) {
                basicPopup.value.openPopup();
            };
            break;
        case 'buttonPopup':
            if (buttonPopup.value) buttonPopup.value.openPopup();
            break;
        case 'imgPopup':
            if (imgPopup.value) imgPopup.value.openPopup();
            break;
    }
};

const showToastPopup = () => {
  if (toastPopup.value) toastPopup.value.showPopup();
};

onMounted(() => {
  showToastPopup();
});

</script>

<style  lang="scss">
    @import "@/assets/scss/desktop/guide.scss";
    @import "@/assets/scss/desktop/common.scss";
</style>
  








