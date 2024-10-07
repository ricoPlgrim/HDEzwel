<template>
 	<GuideNav title="PC Guide" version="2024.12" :menuItems="menuItems" />
    <div class="page-guide-content" style="max-width:100%">
        <h2 class="page-guide-title">Swiper</h2>
        <h3 class="page-guide-title2">Basic</h3>
        <div class="page-guide-box">
            <swiprComponent
                customClass="my-custom-class"
                :slidesPerView="1"
                :loop="false"
                :paginationOptions="{
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                }"
                :autoplayOptions="{
                    delay: 3000,
                    disableOnInteraction: true
                }" 
                :navigationOptions="{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }"
                :modules="[Autoplay, Pagination, Navigation]"
                :touchRatio="0.5"
            />
        </div>

    </div>
</template>

<script setup lang="ts">
    import swiprComponent from "@/components/desktop/swipers/swiperComponent.vue";
    import { useHead } from 'nuxt/app';
    import GuideNav from '../GuideNav.vue';
    import menuItems from '~/data/desktop/menuItems';
    //swiper module props로 전달할때 여기서 import로 modile 설정해줘야함.
    import { Autoplay, Pagination, Navigation } from 'swiper/modules'; 
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
  








