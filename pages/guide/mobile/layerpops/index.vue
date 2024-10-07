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
                @click openPopup 이벤트 메소드<br />
                예시 @click="openPopup('basicPopup')"
            </div>
            <div class="btn-wrap">
                <button @click="openPopup('basicPopup')" class="btn-type">basic</button>
                <button @click="openPopup('buttonPopup')" class="btn-type">button</button>
                <button @click="openPopup('imgPopup')" class="btn-type">img</button>
            </div>
        </div>
        <h3 class="page-guide-title2">full popup</h3>
        <div class="page-guide-box">
            <div class="btn-wrap">
                <button @click="openPopup('fullPopup')" class="btn-type">full</button>
                <button @click="openPopup('fullBottomPopup')" class="btn-type">button</button>
            </div>



        </div>

        <h3 class="page-guide-title2">bottom popup</h3>
        <div class="page-guide-box">
            <div class="btn-wrap">
                <button @click="openPopup('bottomPopup')" class="btn-type">bottom</button>
                <button @click="openPopup('bottomImgPopup')" class="btn-type">bottom2</button>
                <button @click="openPopup('bottomMarketingPopup')" class="btn-type">bottom3</button>
            </div>

            <div class="btn-wrap">
                <button type="button" class="btn-option" @click="openPopup('selectPopup')">
                <span id="optValue">{{ selectedOption || 'Select Option' }}</span>
                </button>
            </div>
        </div>

        <h3 class="page-guide-title2">toast</h3>
        <div class="page-guide-box">
            <div class="text">
                selId와 time 닫히는 시간<br>
                WC_UI.toastPopUp({selId:'#toast01',time:3000});
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


    <fullPopupLayer ref="fullPopup" />
    <fullBottomPopupLayer ref="fullBottomPopup" title="title"
        contentData="content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>content<br>"
        checkText="OK" />

    <bottomPopupLayer ref="bottomPopup" title="Install the WCONCEPT app<br>and get more benefits."
        description="Automatic issuance of 7 types of coupon<br>packs exclusively for APP!" buttonName="Button Name"
        todayTitle="DO NOT OPEN TODAY" closeText="CLOSE" />
    <bottomImgPopupLayer ref="bottomImgPopup" :imgSrc="testImg" imgAlt="테스트 이미지"
        todayTitle="DO NOT OPEN TODAY" closeText="CLOSE" />
    <bottomMarketingPopupLayer ref="bottomMarketingPopup" />

    <selectPopupLayer ref="selectPopup" @update:selectedOption="handleOptionSelected" />


</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app'
import GuideNav from '../GuideNav.vue';
import basicPopuLayer from '@/components/mobile/popup/basicPopup.vue';
import buttonPopupLayer from '@/components/mobile/popup/buttonPopup.vue';
import imgPopupLayer from '@/components/mobile/popup/imgPopup.vue';
import toastPopupLayer from '@/components/mobile/popup/toastPopup.vue';
import fullPopupLayer from '@/components/mobile/popup/fullPopup.vue';
import fullBottomPopupLayer from '@/components/mobile/popup/fullBottomPopup.vue';

import bottomPopupLayer from '@/components/mobile/popup/bottomPopup.vue';
import bottomImgPopupLayer from '@/components/mobile/popup/bottomImgPopup.vue';
import bottomMarketingPopupLayer from '@/components/mobile/popup/bottomMarketingPopup.vue';
import selectPopupLayer from '@/components/mobile/popup/selectPoup.vue';
//더미 테스트 이미지
import testImg from '@/assets/images/desktop/about_us/about_img_01.png';

useHead({
    title: 'HDEzwel Mobile Guide',
});


const basicPopup = ref<InstanceType<typeof basicPopuLayer> | null>(null);
const buttonPopup = ref<InstanceType<typeof buttonPopupLayer> | null>(null);
const imgPopup = ref<InstanceType<typeof imgPopupLayer> | null>(null);
const toastPopup = ref<InstanceType<typeof toastPopupLayer> | null>(null);
const fullPopup = ref<InstanceType<typeof fullPopupLayer> | null>(null);
const fullBottomPopup = ref<InstanceType<typeof fullBottomPopupLayer> | null>(null);
const bottomPopup = ref<InstanceType<typeof bottomPopupLayer> | null>(null);
const bottomImgPopup = ref<InstanceType<typeof bottomImgPopupLayer> | null>(null);
const bottomMarketingPopup = ref<InstanceType<typeof bottomMarketingPopupLayer> | null>(null);
const selectPopup = ref<InstanceType<typeof selectPopupLayer> | null>(null);


const selectedOption = ref<string | null>(null);


const handleOptionSelected = (option: string) => {
  selectedOption.value = option;
};

const openPopup = (popupName: string) => {
    switch (popupName) {
        case 'basicPopup':
            if (basicPopup.value) basicPopup.value.openPopup();
            break;
        case 'buttonPopup':
            if (buttonPopup.value) buttonPopup.value.openPopup();
            break;
        case 'imgPopup':
            if (imgPopup.value) imgPopup.value.openPopup();
            break;
        case 'fullPopup':
            if (fullPopup.value) fullPopup.value.openPopup();
            break;
        case 'fullBottomPopup':
            if (fullBottomPopup.value) fullBottomPopup.value.openPopup();
            break;
            case 'bottomPopup':
            if (bottomPopup.value) bottomPopup.value.openPopup();
        break;
            case 'bottomImgPopup':
            if (bottomImgPopup.value) bottomImgPopup.value.openPopup();
        break;
            case 'bottomMarketingPopup':
            if (bottomMarketingPopup.value) bottomMarketingPopup.value.openPopup();
        break;
            case 'selectPopup':
            if (selectPopup.value) selectPopup.value.openPopup();
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
@import "@/assets/scss/mobile/guide.scss";
@import "@/assets/scss/mobile/common.scss";
</style>
  







