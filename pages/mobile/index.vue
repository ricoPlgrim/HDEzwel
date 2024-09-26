<template>
  <div>
    <Gnb />
    <div class="page-guide-content">
      <h2 class="page-guide-title">Mobile</h2>
      <div class="guide-table">
        <table>
          <thead>
            <tr>
              <th width="10%">1depth</th>
              <th width="10%">2depth</th>
              <th width="15%">3depth</th>
              <th width="15%">page ID</th>
              <th width="15%">html</th>
              <th width="10%">name</th>
              <th width="8%">progress</th>
              <th>memo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="depth1 center bold">Guide</td>
              <td class="depth2"></td>
              <td class="depth3"></td>
              <td class="depth4"></td>
              <td>
                <router-link to="/guide/mobile">guide.html</router-link>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="depth1 center bold">Layout</td>
              <td class="depth2"></td>
              <td class="depth3"></td>
              <td class="depth4"></td>
              <td>
                <a href="javascript:;" target="_blank">layout.html</a>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr class="none">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
 
<script setup>
  import Gnb from '@/components/Guide/Gnb.vue';
</script>

<style lang="scss" scoped>
   @import "@/assets/scss/mobile/common.scss"; 
   @import "@/assets/scss/mobile/guide.scss";
</style>