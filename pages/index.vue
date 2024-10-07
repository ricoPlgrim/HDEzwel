<template>
  <div>
    <h1>홈페이지</h1>
    <p>이 페이지는 {{ device }} 버전입니다.</p>
    <nuxt /> <!-- 현재 페이지를 렌더링 -->
  </div>
</template>

<script setup lang="ts">
import { useDeviceStore } from '@/stores/device'; // Pinia 스토어 가져오기
import { computed, onMounted, watch } from 'vue';
import { useRouter } from 'nuxt/app'; // Nuxt의 라우터 가져오기

const deviceStore = useDeviceStore();
const device = computed(() => deviceStore.device); // Pinia 스토어에서 device 상태를 반응형으로 가져옵니다

// Nuxt의 라우터 사용
const router = useRouter();

// 페이지 로드 시 디바이스 감지
onMounted(() => {
  deviceStore.detectDevice(); // 디바이스 감지 호출
  // 초기 디바이스에 따라 리디렉션
  router.push(device.value === 'mobile' ? '/mobile' : '/desktop'); 
});

// device가 변경될 때마다 리디렉션 업데이트
watch(device, (newDevice) => {
  router.push(newDevice === 'mobile' ? '/mobile' : '/desktop'); // 디바이스 변경 시 리디렉션
});

// 콘솔 로그로 상태 확인
console.log("device ===>", device.value);
</script>
