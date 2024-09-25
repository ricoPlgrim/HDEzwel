<template>
    <div>Redirecting...</div>
</template>
  
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

// `ref`로 데이터 정의
const userAgent = ref('');
const isMobile = ref(false);
const router = useRouter();

// 페이지 로드 시 실행
onMounted(() => {
    // 처음 페이지 로드 시 userAgent 값 설정
    userAgent.value = navigator.userAgent
    isMobile.value = /mobile|android|iphone|ipad|ipod/i.test(userAgent.value) 

    // mounted에서 바로 리다이렉트 처리
    if (isMobile.value) {
        router.push('/mobile')
    } else {
        router.push('/desktop')
    }
})

// 필요시 userAgent의 변화를 감지할 수 있도록 watch 설정
watch(userAgent, (newVal) => {
    isMobile.value = /mobile|android|iphone|ipad|ipod/i.test(newVal)
    console.log('User Agent changed:', newVal)
    console.log('isMobile changed:', isMobile.value)
})
</script>
  