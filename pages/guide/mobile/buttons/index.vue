<template>
    <GuideNav title="Mobile Guide" version="2024.12" :menuItems="menuItems" />
    <div class="page-guide-content">
        <h2 class="page-guide-title">BUTTON</h2>
        <h3 class="page-guide-title2">btn-type</h3>
        <div class="page-guide-box">
            <p class="text">* button / a 태그 구분해서 사용하기</p>
            <p class="text">* height 50px</p><br>
            <div class="btn-wrap">
                <a href="#" class="btn-type btn-full">Button 1</a>
            </div>

            <div class="btn-wrap">
                <a href="#" class="btn-type btn-full v2">Button 2</a>
            </div>

            <div class="btn-wrap">
                <a href="#" class="btn-type btn-full v3">Button 3</a>
            </div>

            <div class="btn-wrap">
                <a href="#" class="btn-type btn-full v4">Button 4</a>
            </div>

            <div class="btn-wrap">
                <a href="#" class="btn-type btn-full disabled">Button 5</a>
            </div>

            <div class="btn-wrap">
                <a href="#" class="btn-type">half 1</a>
                <a href="#" class="btn-type v3">half 2</a>
            </div>

            <div class="btn-wrap v2">
                <a href="#" class="btn-type">half 1</a>
                <a href="#" class="btn-type v3">half 2</a>
            </div>
        </div>

        <h3 class="page-guide-title2">btn-type2</h3>
        <div class="page-guide-box">
            <p class="text">* height 40px</p><br>
            <div class="btn-wrap">
                <a href="#" class="btn-type2">Button 1</a>
                <a href="#" class="btn-type2 v3">Button 2</a>
                <a href="#" class="btn-type2 disabled">Button 3</a>
            </div>
            <div class="btn-wrap v2">
                <a href="#" class="btn-type2 v2">Button 1</a>
                <a href="#" class="btn-type2 v5">Button 2</a>
            </div>
            <div class="btn-wrap v2">
                <a href="#" class="btn-type2 disabled">Button 1</a>
                <a href="#" class="btn-type2 v5">Button 2</a>
            </div>
            <div class="btn-wrap">
                <a href="#" class="btn-type2 v2">Button 1</a>
            </div>
            <div class="btn-wrap">
                <a href="#" class="btn-type2">Button 1</a>
            </div>
            <div class="btn-wrap v2">
                <a href="#" class="btn-type2 v2">Button 1</a>
                <a href="#" class="btn-type2 v2">Button 1</a>
                <a href="#" class="btn-type2">Button 2</a>
            </div>
            <div class="btn-wrap v2">
                <a href="#" class="btn-type2 v2">Button 1</a>
                <a href="#" class="btn-type2">Button 2</a>
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
                    <button type="button" class="btn-wish"><i class="ico-like v2"></i><span
                            class="hidden">wish</span></button>
                    <button type="button" class="v2">
                        OUT OF STOCK<p>Restock Notification</p>
                    </button>
                </div>
            </div>
            <br>
            <div class="fixed-bottom" style="position:relative">
                <div class="btn-type3 disabled">
                    <button type="button" class="btn-wish"><i class="ico-like v2"></i><span
                            class="hidden">wish</span></button>
                    <button type="button" disabled="">CURRENTLY UNAVAILABLE</button>
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
            <a href="#" class="btn-type4 v2">Find ID<span>Find ID</span></a><br>
            <a href="#" class="btn-type4 v3">Non-member order check</a><br>
            <a href="#" class="btn-type4 v4">i'll get it later</a><br>
            <a href="#" class="btn-type4 v5">later</a><br>
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

        <h3 class="page-guide-title2">tab</h3>
        <div class="page-guide-box">
            <h3 class="page-guide-title3">tab-type</h3>
            <!-- tab -->
            <div class="tab-wrap">
                <ul class="tab-type js_tab">
                    <li class="active"><a href="#"><span>Details</span></a></li>
                    <li><a href="#"><span>Reviews<em class="count">(80)</em></span></a></li>
                    <li><a href="#"><span>Recommend</span></a></li>
                </ul>
            </div>
            <br><br>
            <h3 class="page-guide-title3">tab-type2</h3>
            <div class="tab-wrap">
                <ul class="tab-type2 js_tab">
                    <li class="active"><a href="#women" data-text="WOMEN">WOMEN</a></li>
                    <!-- 디자인 효과 구현으로 a태그의 text 값과 data-text의 text값을 일치 시켜주세요 -->
                    <li><a href="#men" data-text="MEN">MEN</a></li>
                    <li><a href="#kbeauty" data-text="K-BEAUTY">K-BEAUTY</a></li>
                    <li><a href="#life" data-text="LIFE">LIFE</a></li>
                </ul>
            </div>
            <h3 class="page-guide-title3">tab-type2 v2</h3>
            <div class="tab-wrap">
                <ul class="tab-type2 v2 js_tab">
                    <li class="active"><a href="#item" data-text="ITEM">ITEM</a></li>
                    <!-- 디자인 효과 구현으로 a태그의 text 값과 data-text의 text값을 일치 시켜주세요 -->
                    <li><a href="#brand" data-text="BRAND">BRAND</a></li>
                    <li><a href="#style" data-text="STYLE">STYLE</a></li>
                    <li><a href="#feed" data-text="FEED">FEED</a></li>
                </ul>
            </div>
        </div>


        <h3 class="page-guide-title2">paging</h3>
        <div class="page-guide-box">
            <div class="paging-wrap">
                <button type="button" class="prev"></button>
                <button type="button" class="active">1</button>
                <button type="button" class="next"></button>
            </div>
            <div class="paging-wrap">
                <button type="button" class="prev" disabled=""></button>
                <button type="button" disabled="">1</button>
                <button type="button" class="next" disabled=""></button>
            </div>
            <div class="paging-wrap">
                <button type="button" class="prev"></button>
                <button type="button" class="active">1</button>
                <button type="button">2</button>
                <button type="button">3</button>
                <button type="button">4</button>
                <button type="button">5</button>
                <button type="button" class="next"></button>
            </div>
            <div class="btn-wrap2">
                <button type="button" class="btn-type2">More 1/8</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app'
import GuideNav from '../GuideNav.vue';
import menuItems from '~/data/mobile/menuItems';

useHead({
    title: 'HDEzwel Mobile Guide',
});

</script>

<style scoped lang="scss">
    @import "@/assets/scss/mobile/common.scss";
    @import "@/assets/scss/mobile/guide.scss";
</style>
  







