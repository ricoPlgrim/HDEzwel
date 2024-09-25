<template>
    <div>
        <GuideNav title="PC Guide" version="2024.12" :menuItems="[
            { name: 'color', path: '/guide/desktop/color' },
            { name: 'font', path: '/guide/desktop/fonts' },
            { name: 'text', path: '/guide/desktop/text' },
            { name: 'button', path: '/guide/desktop/buttons' },
            { name: 'form', path: '/guide/desktop/forms' },
            { name: 'component', path: '/guide/desktop/component' },
            { name: 'icon', path: '/guide/desktop/icons' },
            { name: 'table', path: '/guide/desktop/tables' },
            { name: 'swiper', path: '/guide/desktop/swiper' },
            { name: 'layerpop', path: '/guide/desktop/layerpop' },
            { name: 'vimeo', path: '/guide/desktop/vimeo' }
        ]" />
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
    import GuideNav from '../GuideNav.vue';
</script>
  
<style scoped lang="scss">
@import "@/assets/scss/desktop/common.scss";
@import "@/assets/scss/guide.scss";
</style>
  

