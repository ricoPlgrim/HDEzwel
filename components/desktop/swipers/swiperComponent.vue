<template>
    <swiper 
        :class="[customClass]"
        :slides-per-view="slidesPerView"
        :loop="loop" 
        :pagination="paginationOptions" 
        :autoplay="autoplayOptions"
        :navigation="navigationOptions ? navigationOptions : false"
        :modules="modules" 
        :touch-ratio="touchRatio"
    >
        <swiper-slide>
            <img src="@/assets/images/desktop/temp/@temp_prd_detail3.png">
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/desktop/temp/@temp_prd_detail3.png">
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/desktop/temp/@temp_prd_detail3.png">
        </swiper-slide>

        <div v-if="paginationOptions" class="swiper-pagination"></div>

        <!-- Navigation buttons (only rendered if navigationOptions are passed) -->
        <div v-if="navigationOptions && navigationOptions.nextEl" class="swiper-button-next"></div>
        <div v-if="navigationOptions && navigationOptions.prevEl" class="swiper-button-prev"></div>


    </swiper>
</template>

<script setup lang="ts">
    import { defineProps } from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, Pagination, Navigation } from 'swiper/modules'; 
    import type { PaginationOptions, AutoplayOptions } from 'swiper/types';

    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';

    // Props 정의
    const props = defineProps<{
        customClass?: string;
        slidesPerView?: number;
        loop?: boolean;
        paginationOptions?: PaginationOptions;
        autoplayOptions?: AutoplayOptions;
        navigationOptions?: NavigationOptions; 
        modules?: Array<any>;
        touchRatio?: number;
    }>();

    // 기본 값 설정
    const defaultPaginationOptions: PaginationOptions = {
        el: '.swiper-pagination',
        type: 'progressbar',
    };

    const defaultNavigationOptions: NavigationOptions = {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    };

    const defaultAutoplayOptions: AutoplayOptions = {
        delay: 5000,
        disableOnInteraction: false,
    };

    // 기본적으로 사용할 Swiper 모듈 정의
    const defaultModules = [Autoplay, Pagination, Navigation]; // Swiper 모듈 정의

    // props로 받은 값 또는 기본 값을 사용
    const modules = props.modules || defaultModules;
    const paginationOptions = props.paginationOptions || defaultPaginationOptions;
    const autoplayOptions = props.autoplayOptions || defaultAutoplayOptions;
    const navigationOptions = props.navigationOptions || null; // 네비게이션 옵션 적용
    const slidesPerView = props.slidesPerView || 1;
    const loop = props.loop !== undefined ? props.loop : true;
    const touchRatio = props.touchRatio || 1;

</script>
