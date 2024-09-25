<template>
    <div class="redirect-animation">Redirecting...</div>
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

    setTimeout(() => {
        if (isMobile.value) {
            router.push('/mobile')
        } else {
            router.push('/desktop')
        }
    }, 2000) // 2초 지연 후 리디렉션
})

// 필요시 userAgent의 변화를 감지할 수 있도록 watch 설정
watch(userAgent, (newVal) => {
    isMobile.value = /mobile|android|iphone|ipad|ipod/i.test(newVal)
    console.log('User Agent changed:', newVal)
    console.log('isMobile changed:', isMobile.value)
})
</script>

<style scoped>
.redirect-animation {
    font-size: 2em;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    animation: fadeInOut 2s infinite; /* 2초 동안 애니메이션 반복 */
}

/* Fade in and out animation */
@keyframes fadeInOut {
    0%, 100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
}
</style>
