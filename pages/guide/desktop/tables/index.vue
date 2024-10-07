<template>
 	<GuideNav title="PC Guide" version="2024.12" :menuItems="menuItems" />
    <div class="page-guide-content">
        <h2 class="page-guide-title">TABLE</h2>

        <h3 class="page-guide-title2">table type</h3>

        <div class="page-guide-box">
            <div class="tbl-wrap">
                <table class="tbl-type">
                    <caption class="table-caption">Table Caption</caption>
                    <thead>
                        <tr>
                            <th scope="col" class="col">Size</th>
                            <th scope="col" class="col">Denim</th>
                            <th scope="col" class="col">US</th>
                            <th scope="col" class="col">UK</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="col">XS</th>
                            <td class="col">24</td>
                            <td class="col">0</td>
                            <td class="col">4</td>
                        </tr>
                        <tr>
                            <th class="col">S</th>
                            <td class="col">25</td>
                            <td class="col">2</td>
                            <td class="col">6</td>
                        </tr>
                        <tr>
                            <th class="col">M</th>
                            <td class="col">27</td>
                            <td class="col">4</td>
                            <td class="col">8</td>
                        </tr>
                        <tr>
                            <th class="col">L</th>
                            <td class="col">28</td>
                            <td class="col">6</td>
                            <td class="col">10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br><br>
            <div class="tbl-wrap">
                <table class="tbl-type2">
                    <caption class="table-caption">News</caption>
                    <colgroup>
                        <col width="20%">
                        <col>
                        <col width="20%">
                    </colgroup>
                    <thead>
                        <tr>
                            <th>
                                <span class="tag-type3 v2">EVENT</span>
                            </th>
                            <th>
                                <a href="#" class="title">Wconcept Launches Reebok Partnership</a>
                            </th>
                            <th class="t-r">
                                <p class="date">Jan 01, 2023</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="col">
                                <span class="tag-type3">NOTICE</span>
                            </td>
                            <td class="col">
                                <a href="#" class="title">How much is the return fee?</a>
                            </td>
                            <td class="col t-r">
                                <p class="date">Feb 23, 2023</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="col">
                                <span class="tag-type3">NOTICE</span>
                            </td>
                            <td class="col">
                                <a href="#" class="title">Today, Wconcept Announces Filing of Annual Report
                                    on Form 20-F djk</a>
                            </td>
                            <td class="col t-r">
                                <p class="date">Feb 23, 2023</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="col">
                                <span class="tag-type3">NOTICE</span>
                            </td>
                            <td class="col">
                                <a href="#" class="title">When can I receive my package?</a>
                            </td>
                            <td class="col t-r">
                                <p class="date">Jan 01, 2023</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="col">
                                <span class="tag-type3">NOTICE</span>
                            </td>
                            <td class="col">
                                <a href="#" class="title">Are Life/Beauty products returnable?</a>
                            </td>
                            <td class="col t-r">
                                <p class="date">Feb 23, 2023</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="col">
                                <span class="tag-type3">NOTICE</span>
                            </td>
                            <td class="col">
                                <a href="#" class="title">I did not receive an order confirmation email, is
                                    my order successful? successful success is my order successful?
                                    successful success</a>
                            </td>
                            <td class="col t-r">
                                <p class="date">Jan 01, 2023</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
  








