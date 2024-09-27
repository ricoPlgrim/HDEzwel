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
        <h2 class="page-guide-title">TABLE</h2>

        <h3 class="page-guide-title2">table type</h3>
        <div class="page-guide-box">
            <div class="tbl-wrap">
                <table class="tbl-type">
                    <caption class="table-caption">Table Caption</caption>
                    <colgroup>
                        <col width="30%">
                        <col>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">W NEWBIE</th>
                            <td>
                                <strong>$0~$299</strong>
                                <ul class="list-type">
                                    <li>$1 = 1 W Point</li>
                                    <li>Early Access to Promotions</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">W INSIDER</th>
                            <td>
                                <strong>$0~$299</strong>
                                <ul class="list-type">
                                    <li>$1 = 1 W Point</li>
                                    <li>Early Access to Promotions</li>
                                    <li>Early Access to Promotions</li>
                                    <li>Early Access to Promotions</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">W ICON</th>
                            <td>
                                <strong>$0~$299</strong>
                                <ul class="list-type">
                                    <li>$1 = 1 W Point</li>
                                    <li>Early Access to Promotions</li>
                                    <li>Early Access to Promotions</li>
                                    <li>Early Access to Promotions</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <h3 class="page-guide-title2">table type 2</h3>
        <div class="page-guide-box">
            <div class="tbl-wrap">
                <table class="tbl-type2">
                    <caption class="table-caption">Table Caption</caption>
                    <colgroup>
                        <col width="30%">
                        <col>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row">Title</th>
                            <td>
                                <ul class="list-type">
                                    <li>You are typing your content. You are typing your content.You are typing your
                                        content.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Abcedfghijk</th>
                            <td>
                                <ul class="list-type">
                                    <li>You are typing your content. You are typing your content.You are typing your
                                        content.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Abcedfghijk lmnopqr</th>
                            <td>
                                <ul class="list-type">
                                    <li>You are typing your content. You are typing your content.You are typing your
                                        content.You are typing your content. You are typing your content.You are typing your
                                        content.</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <h3 class="page-guide-title2">table scroll</h3>
        <div class="page-guide-box">
            <div class="tbl-wrap2">
                <table class="tbl-type2">
                    <tbody>
                        <tr>
                            <th>title titletitle</th>
                        </tr>
                        <tr>
                            <th>title</th>
                        </tr>
                        <tr>
                            <th>title</th>
                        </tr>
                        <tr>
                            <th>title</th>
                        </tr>
                        <tr>
                            <th>title</th>
                        </tr>
                    </tbody>
                </table>
                <div class="scroll-wrap">
                    <table class="tbl-type2">
                        <colgroup>
                            <col>
                            <col>
                            <col>
                            <col>
                        </colgroup>
                        <tbody>
                            <tr>
                                <td>ddddddddddddd</td>
                                <td>ddddddasdasdasdasdddddddd</td>
                                <td>ddddddddddddd</td>
                                <td>1111dsfdsfgsfgsdddddddddd</td>
                            </tr>
                            <tr>
                                <td>ddddddddddddd</td>
                                <td>ddddddasdasdasdasdddddddd</td>
                                <td>ddddddddddddd</td>
                                <td>1111dsfdsfgsfgsdddddddddd</td>
                            </tr>
                            <tr>
                                <td>ddddddddddddd</td>
                                <td>ddddddasdasdasdasdddddddd</td>
                                <td>ddddddddddddd</td>
                                <td>1111dsfdsfgsfgsdddddddddd</td>
                            </tr>
                            <tr>
                                <td>ddddddddddddd</td>
                                <td>ddddddasdasdasdasdddddddd</td>
                                <td>ddddddddddddd</td>
                                <td>1111dsfdsfgsfgsdddddddddd</td>
                            </tr>
                            <tr>
                                <td>ddddddddddddd</td>
                                <td>ddddddasdasdasdasdddddddd</td>
                                <td>ddddddddddddd</td>
                                <td>1111dsfdsfgsfgsdddddddddd</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

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
  







