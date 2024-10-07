<template>
   <GuideNav title="Mobile Guide" version="2024.12" :menuItems="menuItems" />
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
import menuItems from '~/data/mobile/menuItems';

useHead({
	title: 'HDEzwel Mobile Guide',

});

</script>


<style scoped lang="scss">
@import "@/assets/scss/mobile/guide.scss";
</style>
