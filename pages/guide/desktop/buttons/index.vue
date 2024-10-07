<template>
 	<GuideNav title="PC Guide" version="2024.12" :menuItems="menuItems" />
	<div class="page-guide-content">
		<h2 class="page-guide-title">BUTTON</h2>
		<h3 class="page-guide-title2">btn-type</h3>
		<div class="page-guide-box">
			<p class="text">* button / a 태그 구분해서 사용하기</p>
			<p class="text">* height 50px / width 230px</p><br>

			<a href="#" class="btn-type">Button</a>
			<br><br>
			<p class="text">* width 292px</p>
			<br>
			<a href="#" class="btn-type btn-sm">Button</a>
			<br><br>
			<p class="text">* width 476px</p>
			<br>
			<a href="#" class="btn-type btn-mid">Button</a>

			<div class="btn-wrap">
				<a href="#" class="btn-type btn-full">Button</a>
			</div>

			<div class="btn-wrap">
				<a href="#" class="btn-type btn-full v2">Button</a>
			</div>

			<div class="btn-wrap">
				<a href="#" class="btn-type btn-full v3">Button</a>
			</div>

			<div class="btn-wrap">
				<a href="#" class="btn-type btn-full v4">Button</a>
			</div>

			<div class="btn-wrap">
				<a href="#" class="btn-type btn-full disabled">Button</a>
			</div>

			<div class="btn-wrap v2">
				<a href="#" class="btn-type">half 1</a>
				<a href="#" class="btn-type v3">half 2</a>
			</div>
		</div>

		<h3 class="page-guide-title2">btn-type2</h3>
		<div class="page-guide-box">
			<p class="text">* height 40px / width 193px</p><br>

			<a href="#" class="btn-type2">Button</a>

			<div class="btn-wrap">
				<a href="#" class="btn-type2 btn-full">Button</a>
			</div>
			<div class="btn-wrap">
				<a href="#" class="btn-type2 btn-full">Load more<i class="ico-arr2"></i></a>
			</div>
			<div class="btn-wrap">
				<a href="#" class="btn-type2 btn-full v2">Button</a>
			</div>
			<div class="btn-wrap v2">
				<a href="#" class="btn-type2 v2">Button</a>
				<a href="#" class="btn-type2 v2">Button</a>
				<a href="#" class="btn-type2">Button</a>
			</div>
			<div class="btn-wrap v2">
				<a href="#" class="btn-type2 v2">Button</a>
				<a href="#" class="btn-type2">Button</a>
			</div>
			<div class="btn-wrap">
				<a href="#" class="btn-type2">Button</a>
				<a href="#" class="btn-type2 v3">Button</a>
				<a href="#" class="btn-type2 disabled">Button</a>
			</div>
			<div class="btn-wrap v2">
				<a href="#" class="btn-type2 v2">Button</a>
				<a href="#" class="btn-type2 v5">Button</a>
			</div>
			<div class="btn-wrap v2">
				<a href="#" class="btn-type2 disabled">Button</a>
				<a href="#" class="btn-type2 v5">Button</a>
			</div>
		</div>

		<h3 class="page-guide-title2">btn-type3 fixed</h3>
		<div class="page-guide-box">
			<div class="fixed-bottom" style="position:relative">
				<div class="btn-type3 v3">
					<button type="button" class="btn-wish"><i class="ico-like v2"></i><span
							class="hidden">wish</span></button>
					<button type="button">ADD TO CART</button>
				</div>
			</div>
			<br>
			<div class="fixed-bottom" style="position:relative">
				<div class="btn-type3 v3">
					<button type="button" class="btn-wish active"><i class="ico-like v2"></i><span
							class="hidden">wish</span></button>
					<button type="button">ADD TO CART</button>
				</div>
			</div>
			<br>
			<div class="fixed-bottom" style="position:relative">
				<div class="btn-type3 disabled">
					<button type="button" class="btn-wish"><i class="ico-like v2"></i><span
							class="hidden">wish</span></button>
					<button type="button" disabled="">OUT OF STOCK</button>
				</div>
			</div>
			<br>

			<div class="fixed-bottom" style="position:relative">
				<div class="btn-type3 v3">
					<button type="button">
						<em>total of 6</em>
						<span>$255,000 Order</span>
					</button>
				</div>
			</div>
		</div>

		<h3 class="page-guide-title2">btn-type4</h3>
		<div class="page-guide-box">
			<a href="#" class="btn-type4">
				<span>Join membership</span>
				<i class="ico-arr2 right"><span class="hidden">Next</span></i>
			</a><br>
			<a href="#" class="btn-type4 v2">Find ID</a><br>
			<a href="#" class="btn-type4 v3">Non-member order check</a><br>
			<a href="#" class="btn-type4 v4">i'll get it later</a><br>
			<a href="#" class="btn-type4 bd">View the entire exhibition</a>
		</div>

		<h3 class="page-guide-title2">btn-type5</h3>
		<div class="page-guide-box">
			<p class="text">* popup 안에 사용하는 버튼</p><br>
			<div class="btn-wrap v2">
				<a href="#" class="btn-type5">button</a>
				<a href="#" class="btn-type5 v2">button</a>
			</div>
		</div>

		<h3 class="page-guide-title2">filter option</h3>
		<div class="page-guide-box">
			<div class="filter-box">
				<button type="button" class="btn-clear">
					<i class="ico-refresh"><span class="hidden">Clear</span></i>
				</button>
				<div class="filter-option">
					<span class="text">Outer</span>
					<button type="button" class="btn-del">
						<i class="ico-close v2"><span class="hidden">Delete</span></i>
					</button>
				</div>
				<div class="filter-option">
					<span class="text">Black</span>
					<button type="button" class="btn-del">
						<i class="ico-close v2"><span class="hidden">Delete</span></i>
					</button>
				</div>
				<div class="filter-option">
					<span class="text">$563.00 ~$800.00</span>
					<button type="button" class="btn-del">
						<i class="ico-close v2"><span class="hidden">Delete</span></i>
					</button>
				</div>
				<div class="filter-option">
					<span class="text">THE MUSEUM VISITOR</span>
					<button type="button" class="btn-del">
						<i class="ico-close v2"><span class="hidden">Delete</span></i>
					</button>
				</div>
			</div>
		</div>

		<h3 class="page-guide-title2">tab</h3>
		<div class="page-guide-box">
			<h3 class="page-guide-title3">tab-type</h3>
			<!-- tab -->
			<div class="tab-wrap">
				<ul class="tab-type js_tab">
					<li class="active"><a href="#"><span>Details</span></a></li>
					<li><a href="#"><span>Reviews<em class="count">80</em></span></a></li>
					<li><a href="#"><span>Recommend</span></a></li>
				</ul>
			</div>
			<!-- //tab -->
			<h3 class="page-guide-title3">tab-type2</h3>
			<!-- tab -->
			<div class="tab-wrap">
				<ul class="tab-type2 js_tab">
					<li class="active"><a href="#" data-text="VERSACE">VERSACE</a></li>
					<li><a href="#" data-text="MASSIMODUTTI">MASSIMODUTTI</a></li>
					<li><a href="#" data-text="LOEUVRE">LOEUVRE</a></li>
					<li><a href="#" data-text="Calvin Klein">Calvin Klein</a></li>
				</ul>
			</div>
			<!-- //tab -->
			<h3 class="page-guide-title3">tab-type3</h3>
			<!-- tab -->
			<div class="tab-wrap">
				<ul class="tab-type3 js_tab">
					<li><a href="#">All</a></li>
					<li class="active"><a href="#">Orders</a></li>
					<li><a href="#">Shipping</a></li>
					<li><a href="#">Returns &amp; Returns</a></li>
					<li><a href="#">Products</a></li>
					<li><a href="#">Loyalty Program &amp; Promotions</a></li>
				</ul>
			</div>
			<!-- //tab -->
			<h3 class="page-guide-title3">tab-type4</h3>
			<!-- tab -->
			<div class="tab-wrap">
				<ul class="tab-type4 js_tab">
					<li class="active"><a href="#">Activity</a></li>
					<li><a href="#">Benefits</a></li>
				</ul>
			</div>
			<!-- //tab -->
			<h3 class="page-guide-title3">tab-type4 v2</h3>
			<!-- tab -->
			<div class="tab-wrap">
				<ul class="tab-type4 v2 js_tab">
					<li class="active"><a href="#">VERSACE</a></li>
					<li><a href="#">MASSIMODUTTI</a></li>
					<li><a href="#">LOEUVRE</a></li>
					<li><a href="#">Calvin Klein</a></li>
				</ul>
			</div>
			<!-- //tab -->
		</div>


		<h3 class="page-guide-title2">paging</h3>
		<div class="page-guide-box">
			<div class="paging-wrap">
				<button type="button" class="prev"></button>
				<button type="button" class="active">1</button>
				<button type="button" class="next"></button>
			</div>
			<br>
			<div class="paging-wrap">
				<button type="button" class="prev" disabled=""></button>
				<button type="button" disabled="">1</button>
				<button type="button" class="next" disabled=""></button>
			</div>
			<br>
			<div class="paging-wrap">
				<button type="button" class="first"></button>
				<button type="button" class="prev"></button>
				<button type="button" class="active">1</button>
				<button type="button">2</button>
				<button type="button">3</button>
				<button type="button">4</button>
				<button type="button">5</button>
				<button type="button" class="next"></button>
				<button type="button" class="last"></button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app'
import GuideNav from '../GuideNav.vue';
import menuItems from '~/data/desktop/menuItems';
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
  

