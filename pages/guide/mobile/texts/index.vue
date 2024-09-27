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
        <h2 class="page-guide-title">TEXT</h2>

        <h3 class="page-guide-title2">title</h3>
        <div class="page-guide-box">
            <p class="text">* font-size: 33px</p><br>
            <div class="title-wrap">
                <h2 class="title-type">SPRING BIG SALE<br>2023 EVENT</h2>
            </div>
            <p class="text">* font-size: 21px</p><br>
            <div class="title-wrap">
                <h2 class="title-type2">OUR FAVORITE BRANDS</h2>
            </div>
            <div class="title-wrap">
                <h2 class="title-type2 v2">OUR FAVORITE BRANDS</h2>
            </div>
            <p class="text">* font-size: 18px</p><br>
            <div class="title-wrap">
                <h2 class="title-type3">HOTEL DAWSON</h2>
            </div>
            <p class="text">* font-size: 14px</p><br>
            <div class="title-wrap">
                <h2 class="title-type4">HOTEL DAWSON</h2>
            </div>
            <p class="text">* font-size: 12px</p><br>
            <div class="title-wrap">
                <h2 class="title-type5">HOTEL DAWSON</h2>
            </div>
        </div>

        <h3 class="page-guide-title2">side title</h3>
        <div class="page-guide-box">
            <div class="title-wrap">
                <h5 class="title-type2">WHAT’S <br>NEW IN TODAY</h5>
                <p><em class="count">502</em></p>
                <a href="#" class="side-box">Shop New In</a>
            </div>

            <div class="title-wrap">
                <h5 class="title-type2">OUR FAVORITE BRANDS</h5>
                <a href="#" class="side-box">View More</a>
            </div>

            <div class="title-wrap">
                <h3 class="title-type2">#wMUSE</h3>
                <p>Post on and hashtag #wMUSE for a chance to be featured below, and earn W Points on purchases you've
                    influenced!</p>
                <a href="#" class="side-box v2">View More</a>
            </div>

            <div class="title-wrap">
                <h5 class="title-type2">OUR FAVORITE BRANDS</h5>
                <a href="#" class="side-box v3">View More</a>
            </div>

            <div class="title-wrap">
                <h5 class="title-type2">SHIPPING ADDRESS</h5>
                <span class="side-box required"><em>*</em> Required</span>
            </div>
        </div>


        <h3 class="page-guide-title2">tag</h3>
        <div class="page-guide-box">
            <!-- tag -->
            <div class="tag-box">
                <a href="#" class="tag-type">Priority Shipping</a>
                <a href="#" class="tag-type">Exclusive</a>
            </div>
            <!-- //tag -->
            <br>
            <!-- tag -->
            <div class="tag-box">
                <a href="#" class="tag-type2">#Coats</a>
                <a href="#" class="tag-type2">#Clothing</a>
                <a href="#" class="tag-type2">#Women</a>
                <a href="#" class="tag-type2 active">#RAIVE</a>
            </div>
            <!-- //tag -->
            <br>
            <!-- tag -->
            <div class="tag-box">
                <a href="#" class="tag-type3">ORDER</a>
                <a href="#" class="tag-type3">SHIPPING</a>
                <a href="#" class="tag-type3">RETURNS</a>
                <a href="#" class="tag-type3 v2">EVENT</a>
            </div>
            <!-- //tag -->
            <br>
            <em class="tag-type4">me</em>
        </div>

        <h3 class="page-guide-title2">box type</h3>
        <div class="page-guide-box">
            <div class="box-type">
                <dl>
                    <dt>Order Subtotal</dt>
                    <dd><b>$400.00</b></dd>
                </dl>
                <dl>
                    <dt>Sales Tax</dt>
                    <dd><b>$10.00</b></dd>
                </dl>
                <dl>
                    <dt>Est. Shipping</dt>
                    <dd><b>$20.00</b></dd>
                </dl>
                <dl>
                    <dt>Promotion Code</dt>
                    <dd><b>$8.00</b></dd>
                </dl>
            </div>
        </div>

        <h3 class="page-guide-title2">box type2</h3>
        <div class="page-guide-box">
            <div class="box-type2">
                <dl>
                    <dt>EMAIL</dt>
                    <dd>wconcept@gmail.com</dd>
                </dl>
                <dl>
                    <dt>SHIP TO</dt>
                    <dd>
                        <p>AN YUJIN</p>
                        <p>1234 Main St, Suite 5, S1234.<br> My City CA, 94000, United States</p>
                        <p>01012345678</p>
                        <a href="#" class="btn-type4 v3">Edit</a>
                    </dd>
                </dl>
            </div>
        </div>

        <h3 class="page-guide-title2">list type</h3>
        <div class="page-guide-box">
            <ul class="list-type">
                <li>Coupons are valid for purchases of KRW 50,000 or more, including brand products in the special
                    exhibition.</li>
                <li>Free gifts are non-refundable and non-exchangeable.</li>
                <li>One free gift is given per person.</li>
                <li>If you have any questions, please contact us at 02)1234-1234.</li>
            </ul>
        </div>

        <h3 class="page-guide-title2">list type2</h3>
        <div class="page-guide-box">
            <ul class="list-type2">
                <li>Coupons are valid for purchases of KRW 50,000 or more, including brand products in the special
                    exhibition.</li>
                <li>Free gifts are non-refundable and non-exchangeable.</li>
                <li>One free gift is given per person.</li>
                <li>If you have any questions, please contact us at 02)1234-1234.</li>
            </ul>
        </div>

        <h3 class="page-guide-title2">info type</h3>
        <div class="page-guide-box">
            <p class="info-type">
                Enter your birthdate, and get a birthday gift every year
            </p>
            <br><br>
            <div class="info-guide">
                <p class="info-type">
                    Outside the USA?
                </p>
                <p class="desc">For shipping addresses outside the USA, please click <a href="#" class="link">here</a>
                    and change your shipping
                    country before proceeding to our international checkout.</p>
            </div>
        </div>


        <h3 class="page-guide-title2">tootip</h3>
        <div class="page-guide-box">
            <div class="tooltip-wrap">
                <div class="tooltip-btn">
                    Click to Tooltip <i class="ico-info"></i>
                </div>
                <div class="tooltip-box">
                    Subject to data protection regulations, I agree to the use of name for account identification and
                    communication purposes.
                </div>
            </div>
            <br>
            <br>
            <div class="tooltip-wrap">
                <div class="tooltip-btn">
                    Click to Tooltip <i class="ico-info"></i>
                </div>
                <div class="tooltip-box">
                    Subject to data protection regulations
                </div>
            </div>
            <br>
            <br>
            <div class="tooltip-wrap">
                <p class="tooltip-text">Final Sale
                    <span class="tooltip-btn"><i class="ico-info"></i></span>
                    : Non-returnable item
                </p>
                <div class="tooltip-box">
                    Subject to data protection regulations
                </div>
            </div>
        </div>


        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
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
  







