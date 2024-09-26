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
		<h2 class="page-guide-title">GUIDE</h2>
		<div class="page-guide-box">

			MO : 100%<br><br> inner-box: rem(0 20px)<br><br>

			<span style="font-size:14px;color:#666;">▶ 사이즈 : rem(값) </span><br><br><br>
			<span style="font-size:14px;color:red;">디자인 가이드 4/26 - 5/12 &amp; 상시 추가 작업</span><br>
			<br>
		</div>
	</div>
</template>



<script setup lang="ts">
import { useHead } from 'nuxt/app'
import GuideNav from '../mobile/GuideNav.vue';

useHead({
	title: 'HDEzwel Mobile Guide',

});

</script>


<style scoped lang="scss">
@import "@/assets/scss/mobile/guide.scss";
</style>
